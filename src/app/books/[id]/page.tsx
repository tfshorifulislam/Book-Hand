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
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Back Navigation */}
      <div className="mb-10">
        <Link
          href="/books"
          className="group inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all duration-200 hover:border-emerald-200 hover:text-foreground hover:shadow-md dark:hover:border-emerald-800"
        >
          <ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
          Back to books
        </Link>
      </div>

      {/* Book Details Card */}
      <section className="overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl shadow-black/[0.03]">
        <div className="grid items-stretch gap-0 lg:grid-cols-[400px_minmax(0,1fr)] xl:grid-cols-[440px_minmax(0,1fr)]">
          {/* Cover Section */}
          <div className="flex items-center justify-center border-b border-border/60 bg-gradient-to-br from-muted/30 via-muted/20 to-transparent p-8 lg:border-b-0 lg:border-r lg:p-10">
            <BookCover title={book.title} coverImage={book.coverImage} />
          </div>

          {/* Content Section */}
          <div className="min-w-0 p-6 sm:p-8 lg:p-10">
            <BookInfo
              book={book}
              price={price}
              condition={condition}
              status={status}
            />
            <BookActions sellerId={seller.id} />
          </div>
        </div>
      </section>

      {/* Seller Section */}
      <SellerCard seller={seller} />
    </div>
  );
};

export default BookDetailsPage;
