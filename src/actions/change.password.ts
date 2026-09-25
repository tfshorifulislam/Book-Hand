"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type ChangePasswordData = {
    currentPassword: string;
    newPassword: string;
};

export const changePassword = async ({
    currentPassword,
    newPassword,
}: ChangePasswordData) => {
    try {
        await auth.api.changePassword({
            headers: await headers(),
            body: {
                currentPassword,
                newPassword,
                revokeOtherSessions: true,
            },
        });

        return {
            success: true,
            message: "Password changed successfully",
        };
    } catch (error) {
        console.error("Change password error:", error);

        throw new Error("Failed to change password");
    }
};