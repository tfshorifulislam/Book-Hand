'use server'


export const getBooks = async (page = 1, limit = 10) => {

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/books?page=${page}&limit=${limit}`,
        {
            next: {
                revalidate:60,
            },
        },
    );

    if(!res.ok) {
        throw new Error("Failed to fetch books");
    };

    return res.json();
}