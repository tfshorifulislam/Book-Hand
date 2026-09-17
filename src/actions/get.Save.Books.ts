"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getSavedBook = async (listingId: string) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user?.id) {
        return {
            success: true,
            isSaved: false,
        };
    }

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${listingId}/save`,
        {
            method: "GET",
            headers: {
                "x-user-id": session.user.id,
            },
            cache: "no-store",
        }
    );

    const data = await response.json();

    console.log("GET SAVE STATUS:", data);

    if (!response.ok) {
        throw new Error(
            data?.message || "Failed to get saved book status"
        );
    }

    return data;
};