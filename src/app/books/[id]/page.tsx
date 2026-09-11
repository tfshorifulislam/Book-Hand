import { bookDetails } from "@/actions/book.Details";
import BookActions from "@/components/book-details/book-actions";
import BookCover from "@/components/book-details/book-cover";
import BookInfo from "@/components/book-details/book-info";
import SellerCard from "@/components/book-details/seller-card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BookDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

const BookDetailsPage = async ({
    params,
}: BookDetailsPageProps) => {
    const { id } = await params;

    const data = await bookDetails(id);

    const { book, seller, price, condition, status } = data.data;

    return (

        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

            {/* Back Button */}
            <div className="mb-8">
                <Button
                    variant="ghost"
                    size="sm"
                    
                    className="group gap-2 px-2 text-muted-foreground hover:text-foreground"
                >
                    <Link href="/books" className="flex items-center gap-1">
                        <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                        Back to books
                    </Link>
                </Button>
            </div>

            {/* Book Details */}
            <section className="grid items-start gap-10 rounded-3xl border bg-card p-5 shadow-sm sm:p-8 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-14 lg:p-10 xl:grid-cols-[420px_minmax(0,1fr)]">

                {/* Cover */}
                <BookCover
                    title={book.title}
                    coverImage={book.coverImage}
                />

                {/* Content */}
                <div className="min-w-0">
                    <BookInfo
                        book={book}
                        price={price}
                        condition={condition}
                        status={status}
                    />

                    <BookActions sellerId={seller.id} />
                </div>
            </section>

            {/* Seller */}
            <SellerCard seller={seller} />
        </div>

    );
};

export default BookDetailsPage;