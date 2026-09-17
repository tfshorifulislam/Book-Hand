"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { Card } from "@/components/ui/card";
import { BookListing } from "../../../Types/Book_Listing";

import { deleteBookListing } from "@/actions/delete.Post";
import DeleteBookDialog from "@/components/Books_Components/DeleteBookDialog";
import { toast } from "@/components/ui/toast";

import BookCardImage from "./BookCardImage";
import BookCardSeller from "./BookCardSeller";
import BookCardFooter from "./BookCardFooter";
import Link from "next/link";

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

    return (
        <>
            <Card
                className="group overflow-hidden border-border/60 bg-card py-0 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20"
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
                        <Link href={`/books/${item.id}`}>
                            <h3
                                className="line-clamp-2 min-h-12 text-base font-semibold leading-6 tracking-tight transition-colors group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                            >
                                {item.book.title}
                            </h3>
                        </Link>

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