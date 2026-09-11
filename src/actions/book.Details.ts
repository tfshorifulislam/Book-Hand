"use server";

export const bookDetails = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/book-details/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const error = await res.text();

    console.log("BOOK DETAILS API STATUS:", res.status);
    console.log("BOOK DETAILS API RESPONSE:", error);

    throw new Error(`Failed to fetch book details: ${res.status}`);
  }

  return res.json();
};