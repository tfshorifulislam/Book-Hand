import { Badge } from "@/components/ui/badge";
import { BookOpen, Globe2, Tag, UserRound } from "lucide-react";

type BookInfoProps = {
    book: {
        title: string;
        author: string;
        category: string;
        language: string;
        description?: string | null;
    };
    price: number;
    condition: string;
    status: string;
};

const BookInfo = ({
    book,
    price,
    condition,
    status,
}: BookInfoProps) => {
    return (
        <div>
            <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#EB7D00] text-white">
                    {book.category}
                </Badge>

                <Badge variant="outline">{status}</Badge>
            </div>

            <h1 className="mt-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
                {book.title}
            </h1>

            <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <UserRound className="size-4" />
                {book.author}
            </p>

            <div className="mt-6">
                <p className="text-sm text-muted-foreground">Price</p>
                <p className="text-3xl font-bold text-[#EB7D00]">
                    ৳{price}
                </p>
            </div>

            <div className="my-7 border-t" />

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                <div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="size-4" />
                        <span className="text-xs">Condition</span>
                    </div>
                    <p className="mt-2 text-sm font-medium">{condition}</p>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Globe2 className="size-4" />
                        <span className="text-xs">Language</span>
                    </div>
                    <p className="mt-2 text-sm font-medium">
                        {book.language}
                    </p>
                </div>

                <div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Tag className="size-4" />
                        <span className="text-xs">Category</span>
                    </div>
                    <p className="mt-2 text-sm font-medium">
                        {book.category}
                    </p>
                </div>
            </div>

            {book.description && (
                <div className="mt-8 border-t pt-6">
                    <h2 className="font-semibold">About this book</h2>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {book.description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default BookInfo;