"use client";

import SellBookForm from "@/components/Sell_Book/SellBookForm";
import { uploadImage } from "@/lib/uploadImage";
import { SellBookFormData } from "../../../Types/SellBookFormData";
import { sellBook } from "@/actions/sellBook";
import { useSession } from "@/lib/auth-client";
import { toast } from "@/components/ui/toast";

const SellBookPage = () => {
    const { data: session, isPending } = useSession();

    const submit = async (
        data: SellBookFormData
    ): Promise<boolean> => {
        if (isPending) {
            return false;
        }

        if (!session?.user?.id) {
            toast.add({
                title: "Please login first",
                type: "error",
            });

            return false;
        }

        try {
            const imageUrl = data.coverImage?.[0]
                ? await uploadImage(data.coverImage[0])
                : "";

            await sellBook({
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

            // Full page refresh after successful submission
            window.location.reload();

            return true;
        } catch (error) {
            console.error("Sell book error:", error);

            toast.add({
                title:
                    error instanceof Error
                        ? error.message
                        : "Failed to list book",
                type: "error",
            });

            return false;
        }
    };

    if (isPending) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center">
                <div className="flex items-center gap-3">
                    <span className="text-xl font-bold tracking-tight">
                        Book<span className="text-[#FF9100]">Hand</span>
                    </span>

                    <div className="flex items-center gap-1">
                        <span className="size-1.5 animate-pulse rounded-full bg-[#FF9100]" />
                        <span className="size-1.5 animate-pulse rounded-full bg-[#FF9100] [animation-delay:150ms]" />
                        <span className="size-1.5 animate-pulse rounded-full bg-[#FF9100] [animation-delay:300ms]" />
                    </div>
                </div>
            </div>
        );
    }

    return <SellBookForm onSubmit={submit} />;
};

export default SellBookPage;