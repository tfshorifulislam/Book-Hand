"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import { BookListing } from "../../../Types/Book_Listing";

import { deleteBookListing } from "@/actions/delete.Post";
import DeleteBookDialog from "@/components/Books_Components/DeleteBookDialog";
import { toast } from "@/components/ui/toast";

import BookCardImage from "./BookCardImage";
import BookCardSeller from "./BookCardSeller";
import BookCardFooter from "./BookCardFooter";
import Link from "next/link";
import { Heart } from "lucide-react";
import { saveBook } from "@/actions/save.post";
import { deleteSavedBook } from "@/actions/delete.save.post";
import { getSavedBook } from "@/actions/get.Save.Books";

type Props = {
    item: BookListing;
    canDelete?: boolean;
    userId?: string;
};

const BooksCard = ({
    item,
    canDelete = false,
    userId,
}: Props) => {
    const router = useRouter();

    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [isSaved, setIsSaved] = useState(false);

    const isOwner = userId === item.seller?.id;

    const profileUrl = isOwner
        ? "/profile"
        : `/profile/${item.seller?.id}`;

    useEffect(() => {
        const checkSavedBook = async () => {
            try {
                const data = await getSavedBook(item.id);

                setIsSaved(data.isSaved);
            } catch (error) {
                console.error("Get saved book error:", error);
            }
        };

        checkSavedBook();
    }, [item.id]);

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
            <Card
                className="group overflow-hidden border-border/60 bg-card py-0 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 "
            >
                {/* Image */}
                <BookCardImage
                    id={item.id}
                    title={item.book.title}
                    coverImage={item.book.coverImage}
                    condition={item.condition}
                    category={item.book.category}
                />

                {/* Content */}
                <div className="space-y-4 p-4">

                    {/* Book Info */}
                    <div className="min-w-0 space-y-1.5">
                        <div className="flex items-start justify-between gap-3">
                            <Link
                                href={`/books/${item.id}`}
                                className="min-w-0 flex-1"
                            >
                                <h3 className="line-clamp-2 min-h-12 text-base font-semibold leading-6 tracking-tight transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                                    {item.book.title}
                                </h3>
                            </Link>

                            <button
                                type="button"
                                onClick={handleSavePost}
                                className="shrink-0 cursor-pointer rounded-full p-1.5 transition-colors hover:bg-muted"
                            >
                                <Heart
                                    className={`size-5 transition-colors ${isSaved
                                        ? "fill-emerald-700 text-emerald-700"
                                        : "text-muted-foreground"
                                        }`}
                                />
                            </button>
                        </div>

                        <p className="truncate text-sm text-muted-foreground">
                            by {item.book.author}
                        </p>
                    </div>

                    {/* Seller */}
                    <BookCardSeller
                        sellerName={item.seller?.name}
                        sellerImage={item.seller?.image}
                        profileUrl={profileUrl}
                    />

                    {/* Footer */}
                    <BookCardFooter
                        id={item.id}
                        price={item.price}
                        canDelete={canDelete}
                        deleting={deleting}
                        onDelete={() => setDeleteDialogOpen(true)}
                    />
                </div>
            </Card>

            {/* Delete Dialog */}
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