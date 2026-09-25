"use server";

export const uploadImage = async (file: File) => {
    const formData = new FormData();

    formData.append("key", process.env.IMAGEBB_API_KEY!);
    formData.append("image", file);

    const response = await fetch(
        "https://api.imgbb.com/1/upload",
        {
            method: "POST",
            body: formData,
        }
    );

    const result = await response.json();

    if (!response.ok || !result.success) {
        throw new Error("Image upload failed");
    }

    return result.data.url;
};