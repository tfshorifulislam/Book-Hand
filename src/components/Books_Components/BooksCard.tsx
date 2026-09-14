"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
    ArrowUpRight,
    Trash2,
    UserRound,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { BookListing } from "../../../Types/Book_Listing";
import { deleteBookListing } from "@/actions/delete.Post";
import DeleteBookDialog from "@/components/Books_Components/DeleteBookDialog";
import { toast } from "@/components/ui/toast";

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
                className="
                    group relative overflow-hidden
                    border-border/60 bg-card
                    py-0
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-emerald-500/30
                    hover:shadow-xl hover:shadow-black/5
                    dark:hover:shadow-black/20
                "
            >
                {/* ================= IMAGE ================= */}
                <Link
                    href={`/books/${item.id}`}
                    className="block"
                >
                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                        <Image
                            src={item.book.coverImage || "/book.png"}
                            alt={item.book.title}
                            fill
                            sizes="
                                (max-width: 640px) 100vw,
                                (max-width: 1024px) 50vw,
                                (max-width: 1280px) 33vw,
                                25vw
                            "
                            className="
                                object-cover
                                transition-transform
                                duration-500
                                ease-out
                                group-hover:scale-105
                            "
                        />

                        {/* Image Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                        {/* Condition */}
                        <div className="absolute left-3 top-3">
                            <Badge
                                className="
                                    border-0
                                    bg-black/70
                                    px-2.5 py-1
                                    text-[11px]
                                    font-medium
                                    text-white
                                    shadow-sm
                                    backdrop-blur-md
                                "
                            >
                                {item.condition}
                            </Badge>
                        </div>

                        {/* Category */}
                        <div className="absolute right-3 top-3">
                            <Badge
                                variant="secondary"
                                className="
                                    border-0
                                    bg-white/90
                                    px-2.5 py-1
                                    text-[11px]
                                    font-medium
                                    text-neutral-800
                                    shadow-sm
                                    backdrop-blur-md
                                    dark:bg-black/80
                                    dark:text-white
                                "
                            >
                                {item.book.category}
                            </Badge>
                        </div>

                        {/* Hover Icon */}
                        <div
                            className="
                                absolute bottom-3 right-3
                                flex size-9 items-center justify-center
                                rounded-full
                                bg-white/95
                                text-neutral-900
                                opacity-0
                                shadow-lg
                                transition-all duration-300
                                group-hover:opacity-100
                                dark:bg-black/90
                                dark:text-white
                            "
                        >
                            <ArrowUpRight className="size-4" />
                        </div>
                    </div>
                </Link>

                {/* ================= CONTENT ================= */}
                <div className="space-y-4 p-4">

                    {/* Title */}
                    <div className="min-w-0 space-y-1.5">
                        <Link href={`/books/${item.id}`}>
                            <h3
                                className="
                                    line-clamp-2
                                    min-h-[3rem]
                                    text-base
                                    font-semibold
                                    leading-6
                                    tracking-tight
                                    transition-colors
                                    group-hover:text-emerald-600
                                    dark:group-hover:text-emerald-400
                                "
                            >
                                {item.book.title}
                            </h3>
                        </Link>

                        <p className="truncate text-sm text-muted-foreground">
                            by {item.book.author}
                        </p>
                    </div>

                    {/* Seller */}
                    <Link
                        href={profileUrl}
                        className="
                            flex items-center gap-3
                            rounded-xl
                            border border-border/50
                            bg-muted/30
                            p-2.5
                            transition-all duration-200
                            hover:border-emerald-500/30
                            hover:bg-emerald-50/50
                            dark:hover:bg-emerald-950/20
                        "
                    >
                        <Avatar className="size-9">
                            <AvatarImage
                                src={item.seller?.image || undefined}
                                alt={item.seller?.name || "Seller"}
                            />

                            <AvatarFallback
                                className="
                                    bg-emerald-100
                                    text-xs
                                    font-semibold
                                    text-emerald-700
                                    dark:bg-emerald-900/60
                                    dark:text-emerald-300
                                "
                            >
                                {item.seller?.name
                                    ?.charAt(0)
                                    .toUpperCase() || "U"}
                            </AvatarFallback>
                        </Avatar>

                        <div className="min-w-0 flex-1">
                            <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                                Seller
                            </p>

                            <p className="truncate text-sm font-medium">
                                {item.seller?.name || "Unknown seller"}
                            </p>
                        </div>

                        <UserRound className="size-4 shrink-0 text-muted-foreground" />
                    </Link>

                    {/* Bottom */}
                    <div className="flex items-end justify-between gap-3 border-t border-border/50 pt-4">

                        {/* Price */}
                        <div className="min-w-0">
                            <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                                Price
                            </p>

                            <p className="mt-0.5 text-xl font-bold tracking-tight">
                                ৳{item.price}
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">

                            {canDelete && (
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        setDeleteDialogOpen(true)
                                    }
                                    disabled={deleting}
                                    className="
                                        size-9
                                        border-border
                                        text-destructive
                                        hover:border-destructive/30
                                        hover:bg-destructive/10
                                        hover:text-destructive
                                    "
                                >
                                    <Trash2 className="size-4" />
                                </Button>
                            )}

                            <Button
                                size="sm"
                                nativeButton={false}
                                render={
                                    <Link
                                        href={`/books/${item.id}`}
                                    />
                                }
                                className="
                                    h-9
                                    gap-1.5
                                    rounded-lg
                                    bg-emerald-600
                                    px-3.5
                                    text-white
                                    shadow-sm
                                    transition-all
                                    hover:bg-emerald-700
                                    hover:shadow-md
                                    dark:bg-emerald-500
                                    dark:text-black
                                    dark:hover:bg-emerald-400
                                "
                            >
                                Details
                                <ArrowUpRight className="size-3.5" />
                            </Button>
                        </div>
                    </div>
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