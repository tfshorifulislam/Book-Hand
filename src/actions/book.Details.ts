"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const bookDetails = async (id: string) => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        throw new Error("Unauthorized");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/book-details/${id}`,
        {
            headers:
            {
                "x-internal-secret": process.env.BACKEND_INTERNAL_SECRET!,
                "x-user-id": session.user.id,
            },

            cache: "no-store",
        }
    );

    if (!res.ok) {
        const error = await res.text();

        console.log("BOOK DETAILS API STATUS:", res.status);
        console.log("BOOK DETAILS API RESPONSE:", error);

        throw new Error(`Failed to fetch book details: ${res.status}`);
    }

    return res.json();
};