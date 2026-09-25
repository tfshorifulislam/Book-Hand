"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type ChangePasswordData = {
    currentPassword: string;
    newPassword: string;
};

type SetPasswordData = {
    newPassword: string;
};

export const changePassword = async ({ currentPassword, newPassword, }: ChangePasswordData) => {

    try {
        return await auth.api.changePassword({
            headers: await headers(),
            body: {
                currentPassword,
                newPassword,
                revokeOtherSessions: true,
            },
        });

    } catch (error) {
        console.error("Change password error:", error);

        throw new Error(
            error instanceof Error
                ? error.message
                : "Failed to change password"
        );
    }
};



export const setPassword = async ({ newPassword, }: SetPasswordData) => {
    
    try {
        return await auth.api.setPassword({
            headers: await headers(),
            body: {
                newPassword,
            },
        });
    } catch (error) {
        console.error("Set password error:", error);

        throw new Error(
            error instanceof Error
                ? error.message
                : "Failed to set password"
        );
    }
};