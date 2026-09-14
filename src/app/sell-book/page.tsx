'use client';

import SellBookForm from "@/components/Sell_Book/SellBookForm";
import { uploadImage } from "@/lib/uploadImage";
import { SellBookFormData } from "../../../Types/SellBookFormData";
import { sellBook } from "@/actions/sellBook";
import { useSession } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";


const SellBookPage = () => {

    const { data: session } = useSession();
    const userId = session?.user?.id;
   

  const submit = async (data: SellBookFormData) => {
    try {
        if (!userId) {
            toast.add({
                title: "Please login first",
                type: "error",
            });
            return;
        }

        const imageUrl = data.coverImage?.[0]
            ? await uploadImage(data.coverImage[0])
            : "";

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

        toast.add({
            title: "Book listed successfully",
            type: "success",
        });

        console.log(result);
    } catch (error) {
        console.error(error);

        toast.add({
            title: "Failed to list book",
            type: "error",
        });
    }
};
    return <SellBookForm onSubmit={submit} />;


};

export default SellBookPage;