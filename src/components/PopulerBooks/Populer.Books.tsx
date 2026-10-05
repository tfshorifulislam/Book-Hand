import { getBooks } from "@/actions/books";
import BooksCard from "@/components/Books_Components/BooksCard";
import Link from "next/link";
import { BookListing } from "../../../Types/Book_Listing";

const PopularBooks = async () => {
    
    const booksData = await getBooks(1, 6);
    const books: BookListing[] = booksData.data ?? [];

    return (
        <section className="section-container bg-background">
            <div className="mx-auto px-6 lg:px-8">
                <div className="flex items-end justify-between gap-6 mb-8">
                    <div>
                        <p className="section-eyebrow">
                            Popular books
                        </p>

                        <h2 className="section-heading mb-0 text-left">
                            Find your next book.
                        </h2>

                        <p className="section-description mx-0 max-w-xl text-left mt-2">
                            Explore some of the latest books available on
                            BookHand.
                        </p>
                    </div>

                    <Link
                        href="/books"
                        className="hidden shrink-0 text-sm font-bold text-primary transition-colors hover:text-primary-hover sm:block"
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
                        className="text-sm font-bold text-primary transition-colors hover:text-primary-hover"
                    >
                        View all books →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default PopularBooks;