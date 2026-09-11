"use server";

export const getBooks = async (page = 1, limit = 10) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books?page=${page}&limit=${limit}`,
        {
            next: {
                revalidate: 60,
            },
        }
    );

    if (!res.ok) {
        const error = await res.text();

        console.log("BOOK API STATUS:", res.status);
        console.log("BOOK API RESPONSE:", error);

        throw new Error(`Failed to fetch books: ${res.status}`);
    }

    return res.json();
};