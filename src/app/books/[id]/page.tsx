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
    <div className="mx-auto w-full max-w-7xl overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <Link
        href="/books"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-600 dark:hover:text-emerald-400"
      >
        <ArrowLeft className="size-4" />
        Back to books
      </Link>

      <div className="grid items-start gap-10 sm:gap-14 lg:grid-cols-[1fr_1.1fr]">
        {/* Cover - Left side */}
        <div className="flex justify-center lg:justify-end">
          <BookCover title={book.title} coverImage={book.coverImage} />
        </div>

        {/* Info + Actions - Right side */}
        <div className="min-w-0 space-y-6">
          <BookInfo
            book={book}
            price={price}
            condition={condition}
            status={status}
          />
          <BookActions sellerId={seller.id} />
        </div>
      </div>

      {/* Seller - Full width below main content */}
      <div className="mt-10">
        <SellerCard seller={seller} />
      </div>
    </div>
  );
};

export default BookDetailsPage;
