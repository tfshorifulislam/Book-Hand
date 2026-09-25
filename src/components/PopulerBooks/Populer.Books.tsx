import { getBooks } from "@/actions/books";
import BooksCard from "@/components/Books_Components/BooksCard";
import Link from "next/link";
import { BookListing } from "../../../Types/Book_Listing";

const PopularBooks = async () => {
    
    const booksData = await getBooks(1, 6);
    const books: BookListing[] = booksData.data ?? [];

    return (
        <section className="w-full py-20 sm:py-24">
            <div className="mx-auto max-w-370 px-6 lg:px-8">
                <div className="flex items-end justify-between gap-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EB7D00]">
                            Popular books
                        </p>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                            Find your next book.
                        </h2>

                        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                            Explore some of the latest books available on
                            BookHand.
                        </p>
                    </div>

                    <Link
                        href="/books"
                        className="hidden shrink-0 text-sm font-medium text-[#EB7D00] transition-colors hover:text-[#FF9100] sm:block"
                    >
                        View all books →
                    </Link>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {books.map((book: BookListing) => (
                        <BooksCard
                            key={book.id}
                            item={book}
                        />
                    ))}
                </div>

                <div className="mt-8 text-center sm:hidden">
                    <Link
                        href="/books"
                        className="text-sm font-medium text-[#EB7D00] transition-colors hover:text-[#FF9100]"
                    >
                        View all books →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularBooks;