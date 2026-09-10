"use client";

import SellBookForm from "@/components/Sell_Book/SellBookForm";
import { uploadImage } from "@/lib/uploadImage";
import { SellBookFormData } from "../../../Types/SellBookFormData";
import { sellBook } from "@/actions/sellBook";

const SellBookPage = () => {


    const submit = async (data: SellBookFormData) => {
        try {
            const imageUrl = data.coverImage?.[0]
                ? await uploadImage(data.coverImage[0])
                : "";

            console.log(imageUrl);


            const result = await sellBook({
                title: data.title,
                author: data.author,
                category: data.category,
                language: data.language,
                description: data.description,
                price: data.price,
                condition: data.condition,
                coverImage: imageUrl,
            });

            console.log(result);
        } catch (error) {
            console.error(error);
        }
    };

    return <SellBookForm onSubmit={submit} />;


};

export default SellBookPage;