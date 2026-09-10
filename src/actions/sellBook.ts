"use server";

import { SellBookFormData } from "../../Types/SellBookFormData";

export const sellBook = async (data: SellBookFormData) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sell-book`,
        {
            method: "POST",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(data),
        }
    );

    const result = await res.json();

    if (!res.ok) {
        throw new Error(result.message || "Failed to sell book");
    }

    return result;
};