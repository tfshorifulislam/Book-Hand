"use client";

import { useState } from "react";

import BooksCard from "@/components/Books_Components/BooksCard";
import { BookListing } from "../../../Types/Book_Listing";

type WishlistItem = {
    id: string;
    listing: BookListing;
};

type Props = {
    initialWishlist: WishlistItem[];
    userId: string;
};


const WishlistPage = ({ initialWishlist, userId }: Props) => {

    const [wishlist, setWishlist] = useState<WishlistItem[]>(initialWishlist);

    const handleRemove = (listingId: string) => {
        setWishlist((prev) => prev.filter((item) => item.listing.id !== listingId));
    };

    return (
        <main className="mx-auto min-h-screen w-full max-w-370 px-4 py-10 md:px-6 md:py-16 lg:py-20">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    My Wishlist
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Books you have saved for later.
                </p>
            </div>

            {wishlist.length === 0 ? (
                <div className="flex min-h-[300px] items-center justify-center rounded-xl border border-dashed">
                    <p className="text-muted-foreground">
                        You haven't saved any books yet.
                    </p>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {wishlist.map((item) => (
                        <BooksCard
                            key={item.id}
                            item={{
                                ...item.listing,
                                isSaved: true,
                            }}
                            userId={userId}
                            onSavedChange={handleRemove}
                        />
                    ))}
                </div>
            )}
        </main>
    );
};

export default WishlistPage;