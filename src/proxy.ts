import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function proxy(request: Request) {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session) {
        return NextResponse.redirect(
            new URL("/auth/signin", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/profile",
        "/profile/:path*",
        "/wishlist",
        "/sell-book",
        "/settings",
        "/books/:path+",
    ],
};