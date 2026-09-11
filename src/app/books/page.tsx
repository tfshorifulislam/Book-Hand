import { getBooks } from "@/actions/books";
import BooksCard from "@/components/Books_Components/BooksCard";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { BookListing } from "../../../Types/Book_Listing";

type Props = {
    searchParams: Promise<{
        page?: string;
    }>;
};

const BooksPage = async ({ searchParams }: Props) => {
    const params = await searchParams;

    const currentPage = Math.max(Number(params.page) || 1, 1);

    const booksData = await getBooks(currentPage, 12);

    const items: BookListing[] = booksData?.data ?? [];
    const pagination = booksData?.pagination;

    const totalPages = pagination?.totalPages ?? 1;

    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-10 md:px-6 md:py-16 lg:py-20">

            {/* Books */}
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {items.map((item) => (
                    <BooksCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <Pagination className="mt-10">
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
                        {Array.from(
                            { length: totalPages },
                            (_, index) => index + 1
                        ).map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    href={`/books?page=${page}`}
                                    isActive={page === currentPage}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

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
