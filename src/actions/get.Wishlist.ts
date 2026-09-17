"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getWishlist = async () => {
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
                "x-internal-secret":process.env.BACKEND_INTERNAL_SECRET!,
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