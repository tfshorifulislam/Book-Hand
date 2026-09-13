"use server";

import { BookListing } from "../../Types/Book_Listing";



type UserBooksResponse = {
    success: boolean;
    listings: BookListing[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
};

export async function getUserBooks(
    userId: string
): Promise<UserBooksResponse> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/${userId}/books`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        throw new Error("Failed to fetch user books");
    }

    return res.json();
}