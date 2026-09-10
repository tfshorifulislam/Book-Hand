"use server";

export const userProfile = async (userId: string) => {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/profile/${userId}`);


    if (!res.ok) {
        throw new Error("Failed to fetch user profile");
    };

    const data = await res.json();

    return data;
}