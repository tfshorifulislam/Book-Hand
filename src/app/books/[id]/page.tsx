
import { bookDetails } from "@/actions/book.Details";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  BookOpen,
  Globe2,
  Mail,
  ShoppingCart,
  Tag,
  UserRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BookDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const BookDetailsPage = async ({ params }: BookDetailsPageProps) => {
  const { id } = await params;

  const data = await bookDetails(id);

  const book = data.data.book;
  const seller = data.data.seller;

  return (
    <main className="min-h-screen mx-auto max-w-7xl bg-background">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

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

        {/* Main Book Section */}
        <section className="grid items-start gap-10 lg:grid-cols-[420px_minmax(0,1fr)] xl:gap-16">

          {/* Book Cover */}
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border bg-muted shadow-sm">
              <div className="relative aspect-3/4">
                <Image
                  src={book.coverImage || "/book-placeholder.png"}
                  alt={book.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Book Content */}
          <div className="min-w-0">

            {/* Category + Status */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="secondary"
                className="gap-1 rounded-full px-3 py-1"
              >
                <Tag className="size-3.5" />
                {book.category}
              </Badge>

              <Badge
                variant="outline"
                className="rounded-full px-3 py-1 text-emerald-600"
              >
                {data.data.status}
              </Badge>
            </div>

            {/* Title */}
            <h1 className="mt-5 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {book.title}
            </h1>

            {/* Author */}
            <p className="mt-4 flex items-center gap-2 text-lg text-muted-foreground">
              <UserRound className="size-5" />
              {book.author}
            </p>

            {/* Divider */}
            <div className="my-7 h-px bg-border" />

            {/* Book Info */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <Card className="border shadow-none">
                <CardContent className="p-4">
                  <BookOpen className="mb-3 size-5 text-emerald-600" />

                  <p className="text-xs text-muted-foreground">
                    Condition
                  </p>

                  <p className="mt-1 font-semibold">
                    {data.data.condition}
                  </p>
                </CardContent>
              </Card>

              <Card className="border shadow-none">
                <CardContent className="p-4">
                  <Globe2 className="mb-3 size-5 text-emerald-600" />

                  <p className="text-xs text-muted-foreground">
                    Language
                  </p>

                  <p className="mt-1 font-semibold">
                    {book.language}
                  </p>
                </CardContent>
              </Card>

              <Card className="border shadow-none">
                <CardContent className="p-4">
                  <Tag className="mb-3 size-5 text-emerald-600" />

                  <p className="text-xs text-muted-foreground">
                    Category
                  </p>

                  <p className="mt-1 truncate font-semibold">
                    {book.category}
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Price */}
            <div className="mt-8 rounded-2xl border bg-muted/30 p-5">
              <p className="text-sm text-muted-foreground">
                Selling price
              </p>

              <p className="mt-1 text-4xl font-bold tracking-tight text-emerald-600">
                ৳{data.data.price}
              </p>
            </div>

            {/* Description */}
            {book.description && (
              <div className="mt-8">
                <h2 className="text-xl font-semibold">
                  About this book
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                  {book.description}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                className="h-12 gap-2 bg-emerald-600 px-7 hover:bg-emerald-700"
              >
                <ShoppingCart className="size-5" />
                Contact Seller
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7"
                
              >
                <Link href={`/profile/${seller.id}`}>
                  View Seller
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Seller */}
        <section className="mt-16 border-t pt-10">
          <div className="mb-5">
            <p className="text-sm font-medium text-emerald-600">
              SELLER
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-tight">
              Seller Information
            </h2>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">

              {/* Seller Profile */}
              <div className="flex items-center gap-4">
                <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-muted">
                  {seller.image ? (
                    <Image
                      src={seller.image}
                      alt={seller.name}
                      width={56}
                      height={56}
                      className="size-full object-cover"
                    />
                  ) : (
                    <UserRound className="size-6 text-muted-foreground" />
                  )}
                </div>

                <div className="min-w-0">
                  <h3 className="font-semibold">
                    {seller.name}
                  </h3>

                  <p className="mt-1 flex items-center gap-1.5 truncate text-sm text-muted-foreground">
                    <Mail className="size-3.5 shrink-0" />
                    {seller.email}
                  </p>
                </div>
              </div>

              <Button variant="outline" >
                <Link href={`/profile/${seller.id}`}>
                  View Profile
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </main>
  );
};

export default BookDetailsPage;