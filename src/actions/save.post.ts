"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function saveBook(listingId: string) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user?.id) {
    throw new Error("Please login to save this book");
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books/${listingId}/save`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-user-id": session.user.id,
        "x-internal-secret": process.env.BACKEND_INTERNAL_SECRET!,
      },
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to save book");
  }

  return data;
}