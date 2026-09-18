"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getBooks = async (
    page = 1,
    limit = 12,
     search = ""
) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books?page=${page}&limit=${limit}&search=${encodeURIComponent(search)}`,
        {
            method: "GET",

            headers: {
                ...(session?.user?.id && {
                    "x-user-id": session.user.id,
                }),
            },

            cache: "no-store",
        }
    );

    const data = await response.json();

    if (!response.ok) {
        throw new Error( data?.message || "Failed to fetch books" );
    }

    return data;
};