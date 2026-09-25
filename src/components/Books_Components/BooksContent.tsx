import { getBooks } from "@/actions/books";
import BooksCard from "@/components/Books_Components/BooksCard";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import { BookListing } from "../../../Types/Book_Listing";
import { BookOpen, Search } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type BooksContentProps = {
    currentPage: number;
    search: string;
};

function getPageNumbers(
    currentPage: number,
    totalPages: number
): (number | "ellipsis")[] {
    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | "ellipsis")[] = [1];

    if (currentPage > 3) {
        pages.push("ellipsis");
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    if (currentPage < totalPages - 2) {
        pages.push("ellipsis");
    }

    pages.push(totalPages);

    return pages;
}

const BooksContent = async ({
    currentPage,
    search,
}: BooksContentProps) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const userId = session?.user?.id;

    const booksData = await getBooks(currentPage, 12, search);

    const items: BookListing[] = booksData?.data ?? [];
    const pagination = booksData?.pagination;

    const totalPages = pagination?.totalPages ?? 1;
    const totalCount = pagination?.total ?? items.length;

    const pageNumbers = getPageNumbers(currentPage, totalPages);

    const getPageUrl = (page: number) =>
        `/books?page=${page}${
            search ? `&search=${encodeURIComponent(search)}` : ""
        }`;

    return (
        <div className="mx-auto min-h-screen max-w-7xl px-4 py-10 md:px-6">
            <div className="mb-10">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-700 dark:bg-emerald-500">
                        <BookOpen className="size-5 text-white dark:text-black" />
                    </div>

                    <h1 className="text-2xl font-bold sm:text-3xl">
                        Browse Books
                    </h1>
                </div>

                <p className="mt-2 text-muted-foreground">
                    Discover books from sellers across the marketplace
                    {totalCount > 0 && (
                        <span className="ml-1 text-foreground">
                            · {totalCount}{" "}
                            {totalCount === 1 ? "book" : "books"} available
                        </span>
                    )}
                </p>
            </div>

            {items.length === 0 && (
                <div className="flex flex-col items-center justify-center border border-dashed px-6 py-20 text-center">
                    <Search className="mb-4 size-6 text-muted-foreground" />

                    <h3 className="font-semibold">
                        No books found
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                        There are no books available at the moment.
                    </p>
                </div>
            )}

            {items.length > 0 && (
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((item) => (
                        <BooksCard
                            key={item.id}
                            userId={userId}
                            item={item}
                        />
                    ))}
                </div>
            )}

            {totalPages > 1 && (
                <Pagination className="mt-12">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href={
                                    currentPage > 1
                                        ? getPageUrl(currentPage - 1)
                                        : "#"
                                }
                                className={
                                    currentPage === 1
                                        ? "pointer-events-none opacity-50"
                                        : undefined
                                }
                            />
                        </PaginationItem>

                        {pageNumbers.map((page, index) =>
                            page === "ellipsis" ? (
                                <PaginationItem key={`ellipsis-${index}`}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            ) : (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href={getPageUrl(page)}
                                        isActive={page === currentPage}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        )}

                        <PaginationItem>
                            <PaginationNext
                                href={
                                    currentPage < totalPages
                                        ? getPageUrl(currentPage + 1)
                                        : "#"
                                }
                                className={
                                    currentPage === totalPages
                                        ? "pointer-events-none opacity-50"
                                        : undefined
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
};

export default BooksContent;