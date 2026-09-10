"use client";

import SellBookForm from "@/components/Sell_Book/SellBookForm";
import { uploadImage } from "@/lib/uploadImage";
import { SellBookFormData } from "../../../Types/SellBookFormData";

const SellBookPage = () => {


    const submit = async (data: SellBookFormData) => {
        try {
            const imageUrl = data.coverImage?.[0]
                ? await uploadImage(data.coverImage[0])
                : "";

            console.log(imageUrl);


            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/sell-book`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include",
                    body: JSON.stringify({
                        title: data.title,
                        author: data.author,
                        category: data.category,
                        language: data.language,
                        description: data.description,
                        price: data.price,
                        condition: data.condition,
                        coverImage: imageUrl,
                    }),
                }
            );

            const result = await res.json();

            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return <SellBookForm onSubmit={submit} />;


};

export default SellBookPage;