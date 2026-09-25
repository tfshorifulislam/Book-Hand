"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getAuthProvider = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user?.id) {
        throw new Error("Unauthorized");
    }

    const accounts = await auth.api.listUserAccounts({
        headers: await headers(),
    });

    const isGoogleUser = accounts.some(
        (account) => account.providerId === "google"
    );

    const hasCredentialAccount = accounts.some(
        (account) => account.providerId === "credential"
    );

    return { isGoogleUser, hasCredentialAccount, };
};