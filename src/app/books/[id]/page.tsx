import { bookDetails } from "@/actions/book.Details";
import BookActions from "@/components/book-details/book-actions";
import BookCover from "@/components/book-details/book-cover";
import BookInfo from "@/components/book-details/book-info";
import SellerCard from "@/components/book-details/seller-card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BookDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
    const { id } = await params;

    const data = await bookDetails(id);
    const { book, seller, price, condition, status } = data?.data;

    return (
        <main className="mx-auto min-h-screen max-w-370 px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
            <Link
                href="/books"
                className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="size-4" />
                Back to books
            </Link>

            <section className="grid overflow-hidden rounded-2xl border lg:grid-cols-2">
                <div className="flex min-h-105 items-center justify-center bg-muted/30 p-8 sm:p-12 lg:min-h-145 lg:p-16">
                    <BookCover
                        title={book.title}
                        coverImage={book.coverImage}
                    />
                </div>

                <div className="flex flex-col p-6 sm:p-10 lg:p-12">
                    <BookInfo
                        book={book}
                        price={price}
                        condition={condition}
                        status={status}
                    />

                    <div className="mt-8">
                        <BookActions sellerId={seller.id} />
                    </div>
                </div>
            </section>

            <section className="mt-10">
                <SellerCard seller={seller} />
            </section>
        </main>
    );
};

export default BookDetailsPage;