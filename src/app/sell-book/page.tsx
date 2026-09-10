"use client";

import SellBookForm from "@/components/Sell_Book/SellBookForm";
import { SellBookFormData } from "../../../Types/SellBookFormData";

const SellBookPage = () => {
    const submit = async (data: SellBookFormData) => {
        try {
            let imageUrl = "";

            if (data.coverImage?.[0]) {
                const imageData = new FormData();

                imageData.append("image", data.coverImage[0]);

                const imageRes = await fetch(
                    `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
                    {
                        method: "POST",
                        body: imageData,
                    }
                );

                const imageResult = await imageRes.json();

                if (!imageResult.success) {
                    throw new Error("Image upload failed");
                }

                imageUrl = imageResult.data.url;
            }

            // 2. Send book data to backend
            const formData = new FormData();

            formData.append("title", data.title);
            formData.append("author", data.author);
            formData.append("category", data.category);
            formData.append("language", data.language);
            formData.append("description", data.description);
            formData.append("price", String(data.price));
            formData.append("condition", data.condition);
            formData.append("coverImage", imageUrl);

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sell-book`,
                {
                    method: "POST",
                    body: formData,
                    credentials: "include",
                }
            );

            const result = await res.json();

            if (!res.ok) {
                throw new Error(
                    result.message || "Failed to create listing"
                );
            }

            console.log("Success:", result);
        } catch (error) {
            console.error("Sell book error:", error);
        }
    };

    return <SellBookForm onSubmit={submit} />;
};

export default SellBookPage;