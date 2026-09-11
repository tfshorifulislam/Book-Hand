import { bookDetails } from "@/actions/book.Details";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

import BookActions from "@/components/book-details/book-actions";
import BookCover from "@/components/book-details/book-cover";
import BookInfo from "@/components/book-details/book-info";
import SellerCard from "@/components/book-details/seller-card";

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
    <main className="min-h-screen bg-background mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      

        {/* Back */}
        <div className="mb-8">
          <Button
            variant="ghost"
            size="sm"
            
            className="gap-2 px-2 text-muted-foreground hover:text-foreground"
          >
            <Link href="/books">
              <ArrowLeft className="size-4" />
              Back to books
            </Link>
          </Button>
        </div>

        {/* Main */}
        <section className="grid items-start gap-10 lg:grid-cols-[420px_minmax(0,1fr)] xl:gap-16">

          {/* Cover */}
          <BookCover
            title={book.title}
            coverImage={book.coverImage}
          />

          {/* Content */}
          <div>
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

     
    </main>
  );
};

export default BookDetailsPage;