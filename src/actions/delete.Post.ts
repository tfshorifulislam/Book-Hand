"use server";

export const deleteBookListing = async (listingId: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/delete/books/${listingId}`,
        {
            method: "DELETE",
            credentials: "include",
            cache: "no-store",
        }
    );

    const data = await res.json();

    if (!res.ok) {
        throw new Error(
            data?.message || "Failed to delete book listing"
        );
    }

    return data;
};