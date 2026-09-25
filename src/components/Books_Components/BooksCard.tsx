"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Heart } from "lucide-react";

import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/toast";

import { BookListing } from "../../../Types/Book_Listing";
import { deleteBookListing } from "@/actions/delete.Post";
import { saveBook } from "@/actions/save.post";
import { deleteSavedBook } from "@/actions/delete.save.post";

import DeleteBookDialog from "@/components/Books_Components/DeleteBookDialog";
import BookCardImage from "./BookCardImage";
import BookCardSeller from "./BookCardSeller";
import BookCardFooter from "./BookCardFooter";

type Props = {
    item: BookListing;
    canDelete?: boolean;
    userId?: string;
    onSavedChange?: (listingId: string) => void;
};

const BooksCard = ({
    item,
    canDelete = false,
    userId,
    onSavedChange,
}: Props) => {
    const router = useRouter();

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [isSaved, setIsSaved] = useState(item.isSaved);

    const isOwner = userId === item.seller?.id;

    const profileUrl = isOwner
        ? "/profile"
        : `/profile/${item.seller?.id}`;

    const handleDelete = async () => {
        try {
            setDeleting(true);

            await deleteBookListing(item.id);
            setDeleteDialogOpen(false);

            toast.add({
                title: "Book deleted successfully",
                type: "success",
            });

            router.refresh();
        } catch (error) {
            console.error(error);

            toast.add({
                title: "Delete failed",
                type: "error",
            });
        } finally {
            setDeleting(false);
        }
    };

    const handleSavePost = async () => {
        const previousState = isSaved;

        setIsSaved(!previousState);

        try {
            if (previousState) {
                await deleteSavedBook(item.id);
                onSavedChange?.(item.id);
            } else {
                await saveBook(item.id);
            }
        } catch (error) {
            console.error("Save post error:", error);

            setIsSaved(previousState);

            toast.add({
                title: "Something went wrong",
                type: "error",
            });
        }
    };

    return (
        <>
            <Card className="group overflow-hidden py-0 transition-transform hover:-translate-y-1">
                <BookCardImage
                    id={item.id}
                    title={item.book.title}
                    coverImage={item.book.coverImage}
                    condition={item.condition}
                    category={item.book.category}
                />

                <div className="p-4">
                    <div className="flex items-start justify-between gap-3">
                        <Link
                            href={`/books/${item.id}`}
                            className="min-w-0 flex-1"
                        >
                            <h3 className="line-clamp-2 text-base font-semibold transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                                {item.book.title}
                            </h3>
                        </Link>

                        <button
                            type="button"
                            onClick={handleSavePost}
                            className="shrink-0 cursor-pointer p-1.5"
                        >
                            <Heart
                                className={`size-5 ${
                                    isSaved
                                        ? "fill-emerald-700 text-emerald-700"
                                        : "text-muted-foreground"
                                }`}
                            />
                        </button>
                    </div>

                    <p className="mt-1 truncate text-sm text-muted-foreground">
                        by {item.book.author}
                    </p>

                    <BookCardSeller
                        sellerName={item.seller?.name}
                        sellerImage={item.seller?.image}
                        profileUrl={profileUrl}
                    />

                    <BookCardFooter
                        id={item.id}
                        price={item.price}
                        canDelete={canDelete}
                        deleting={deleting}
                        onDelete={() => setDeleteDialogOpen(true)}
                    />
                </div>
            </Card>

            <DeleteBookDialog
                open={deleteDialogOpen}
                onOpenChange={setDeleteDialogOpen}
                title={item.book.title}
                deleting={deleting}
                onConfirm={handleDelete}
            />
        </>
    );
};

export default BooksCard;