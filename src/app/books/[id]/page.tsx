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

  const { book, seller, price, condition, status } = data.data;

  return (
    <main className="bg-background mx-auto w-full max-w-7xl min-h-screen">
      <div className=" px-4 py-8 sm:px-6 lg:px-8 lg:py-12">

        {/* Back */}
        <Link
          href="/books"
          className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
          Back to books
        </Link>

        {/* Main Product */}
        <section className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-sm">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">

            {/* Cover */}
            <div className="flex items-center justify-center border-b border-border/60 bg-muted/20 p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-14">
              <BookCover
                title={book.title}
                coverImage={book.coverImage}
              />
            </div>

            {/* Details */}
            <div className="flex flex-col p-6 sm:p-10 lg:p-12">
              <BookInfo
                book={book}
                price={price}
                condition={condition}
                status={status}
              />

              <div className="mt-auto pt-8">
                <BookActions sellerId={seller.id} />
              </div>
            </div>
          </div>
        </section>

        {/* Seller */}
        <section className="mt-10">
          <SellerCard seller={seller} />
        </section>
      </div>
    </main>
  );
};

export default BookDetailsPage;