'use client';

import SellBookForm from "@/components/Sell_Book/SellBookForm";
import { uploadImage } from "@/lib/uploadImage";
import { SellBookFormData } from "../../../Types/SellBookFormData";
import { sellBook } from "@/actions/sellBook";
import { useSession } from "@/lib/auth-client";


const SellBookPage = () => {

    const { data: session } = useSession();
    const userId = session?.user?.id;
   

    const submit = async (data: SellBookFormData) => {
        try {

            if (!userId) {
                console.error("User is not logged in");
                return;
            }

            const imageUrl = data.coverImage?.[0]
                ? await uploadImage(data.coverImage[0])
                : "";

            console.log(imageUrl);


            const result = await sellBook({
                title: data.title,
                author: data.author,
                category: data.category,
                language: data.language,
                condition: data.condition,
                description: data.description,
                price: data.price,
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