"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { SellBookFormData } from "../../Types/SellBookFormData";

export const sellBook = async (data: SellBookFormData) => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        throw new Error("Unauthorized");
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sell-book`,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                "x-user-id": session.user.id,
                "x-internal-secret": process.env.BACKEND_INTERNAL_SECRET!,
            },

            body: JSON.stringify(data),
        }
    );

    const result = await res.json();

    if (!res.ok) {
        throw new Error(
            result.message || "Failed to sell book"
        );
    }

    return result;
};