"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { BookListing } from "../../Types/Book_Listing";


type WishlistItem = {
    id: string;
    userId: string;
    listingId: string;
    createdAt: string;
    listing: BookListing;
};

type WishlistResponse = {
    success: boolean;
    message?: string;
    data: WishlistItem[];
};

export const getWishlist = async (): Promise<WishlistResponse> => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user?.id) {
        return {
            success: true,
            data: [],
        };
    }

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/wishlist`,
        {
            method: "GET",
            headers: {
                "x-user-id": session.user.id,
                "x-internal-secret":
                    process.env.BACKEND_INTERNAL_SECRET!,
            },
            cache: "no-store",
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data?.message || "Failed to fetch wishlist"
        );
    }

    return data;
};