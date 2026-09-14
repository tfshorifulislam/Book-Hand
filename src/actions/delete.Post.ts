"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const deleteBookListing = async (listingId: string) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        throw new Error("Unauthorized");
    }


    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/delete/books/${listingId}`,
        {
            method: "DELETE",
            credentials: "include",
            cache: "no-store",
            headers: {
                "x-user-id": session.user.id,
                "x-internal-secret": process.env.BACKEND_INTERNAL_SECRET!,
            },
        },
    );

    const data = await res.json();

    if (!res.ok) {
        throw new Error(
            data?.message || "Failed to delete book listing"
        );
    }

    return data;
};