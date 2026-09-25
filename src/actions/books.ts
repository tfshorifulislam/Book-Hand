"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export const getBooks = async (
    page = 1,
    limit = 12,
    search = ""
) => {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });

        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        if (!backendUrl) {
            throw new Error("Backend URL is not configured");
        }

        const url = new URL("/api/books", backendUrl);

        url.searchParams.set("page", String(page));
        url.searchParams.set("limit", String(limit));
        url.searchParams.set("search", search.trim());

        const requestHeaders: HeadersInit = {};

        if (session?.user?.id) {
            requestHeaders["x-user-id"] = session.user.id;
        }

        const response = await fetch(url.toString(), {
            method: "GET",
            headers: requestHeaders,
            cache: "no-store",
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Books API Error:", {
                status: response.status,
                statusText: response.statusText,
                data,
            });

            throw new Error(
                data?.message ||
                `Failed to fetch books (${response.status})`
            );
        }

        return data;
    } catch (error) {
        console.error("GetBooks Error:", error);
        throw error;
    }
};