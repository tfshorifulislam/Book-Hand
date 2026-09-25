"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const deleteAccount = async () => {
    try {
        const result = await auth.api.deleteUser({
            headers: await headers(),
            body: {},
        });

        return result;
    } catch (error) {
        console.error("Delete account error:", error);

        throw new Error(
            error instanceof Error
                ? error.message
                : "Failed to delete account"
        );
    }
};