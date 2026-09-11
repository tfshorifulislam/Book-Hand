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

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};

function getPageNumbers(currentPage: number, totalPages: number): (number | "ellipsis")[] {
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

    if (totalPages > 1) {
        pages.push(totalPages);
    }

    return pages;
}

const BooksPage = async ({ searchParams }: Props) => {
    const params = await searchParams;

    const currentPage = Math.max(Number(params.page) || 1, 1);

    const booksData = await getBooks(currentPage, 12);

    const items: BookListing[] = booksData?.data ?? [];
    const pagination = booksData?.pagination;

    const totalPages = pagination?.totalPages ?? 1;
    const totalCount = pagination?.total ?? items.length;

    const pageNumbers = getPageNumbers(currentPage, totalPages);

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 md:py-16 lg:py-20">
            {/* Header */}
            <div className="mb-10 space-y-2">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                        <BookOpen className="size-5 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                            Browse Books
                        </h1>
                    </div>
                </div>
                <p className="text-muted-foreground">
                    Discover books from sellers across the marketplace
                    {totalCount > 0 && (
                        <span className="ml-1 font-medium text-foreground">
                            &middot; {totalCount} {totalCount === 1 ? "book" : "books"} available
                        </span>
                    )}
                </p>
            </div>

            {/* Empty State */}
            {items.length === 0 && (
                <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border/60 bg-muted/30 px-6 py-20 text-center">
                    <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-muted">
                        <Search className="size-6 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold">No books found</h3>
                    <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                        There are no books available at the moment. Check back later or try a different page.
                    </p>
                </div>
            )}

            {/* Books Grid */}
            {items.length > 0 && (
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {items.map((item) => (
                        <BooksCard key={item.id} item={item} />
                    ))}
                </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <Pagination className="mt-12">
                    <PaginationContent>
                        {/* Previous */}
                        <PaginationItem>
                            <PaginationPrevious
                                href={
                                    currentPage > 1
                                        ? `/books?page=${currentPage - 1}`
                                        : "#"
                                }
                                className={
                                    currentPage === 1
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                }
                            />
                        </PaginationItem>

                        {/* Page Numbers */}
                        {pageNumbers.map((page, index) =>
                            page === "ellipsis" ? (
                                <PaginationItem key={`ellipsis-${index}`}>
                                    <PaginationEllipsis />
                                </PaginationItem>
                            ) : (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href={`/books?page=${page}`}
                                        isActive={page === currentPage}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            )
                        )}

                        {/* Next */}
                        <PaginationItem>
                            <PaginationNext
                                href={
                                    currentPage < totalPages
                                        ? `/books?page=${currentPage + 1}`
                                        : "#"
                                }
                                className={
                                    currentPage === totalPages
                                        ? "pointer-events-none opacity-50"
                                        : ""
                                }
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
        </div>
    );
};

export default BooksPage;
