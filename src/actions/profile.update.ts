"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type UpdateProfileData = {
    name?: string;
    email?: string;
    image?: string;
};

export const updateProfile = async (data: UpdateProfileData) => {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "x-user-id": session.user.id,
            },
            body: JSON.stringify(data),
        }
    );

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result?.message || "Failed to update profile");
    }

    return result;
};