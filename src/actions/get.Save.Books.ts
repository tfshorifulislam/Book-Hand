"use server";

export async function getSavedBook(listingId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/books/${listingId}/save`,
    {
      method: "GET",
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to check saved book");
  }

  return response.json();
}