"use server";

export const getBooks = async (
    page = 1,
    limit = 10,
    search = ""
) => {
    const params = new URLSearchParams({
        page: String(page),
        limit: String(limit),
    });

    if (search.trim()) {
        params.set("search", search.trim());
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books?${params.toString()}`,
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