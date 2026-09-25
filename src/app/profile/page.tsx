import { getUserBooks } from "@/actions/user.Post.get";
import BooksCard from "@/components/Books_Components/BooksCard";
import CoverProfile from "@/components/Profile_Components/Cover_Profile";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type ProfilePageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
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

const ProfilePage = async ({ searchParams }: ProfilePageProps) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        return null;
    }

    const { page } = await searchParams;
    const currentPage = Math.max(Number(page) || 1, 1);
    const limit = 9;

    const booksData = await getUserBooks(
        session?.user?.id,
        currentPage,
        limit
    );

    const books = booksData?.listings ?? [];
    const totalPages = booksData?.pagination?.totalPages ?? 1;

    const pageNumbers = getPageNumbers(currentPage, totalPages);

    return (
        <div className="mx-auto max-w-7xl px-4 md:px-6">
            <CoverProfile user={session.user} />

            {books.length > 0 ? (
                <>
                    <div className="my-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {books.map((item) => (
                            <BooksCard
                                key={item.id}
                                item={item}
                                canDelete
                            />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <Pagination className="mb-20">
                            <PaginationContent>
                                <PaginationItem>
                                    <PaginationPrevious
                                        href={
                                            currentPage > 1
                                                ? `/profile?page=${currentPage - 1}`
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
                                        <PaginationItem
                                            key={`ellipsis-${index}`}
                                        >
                                            <PaginationEllipsis />
                                        </PaginationItem>
                                    ) : (
                                        <PaginationItem key={page}>
                                            <PaginationLink
                                                href={`/profile?page=${page}`}
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
                                                ? `/profile?page=${currentPage + 1}`
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
                </>
            ) : (
                <div className="my-20 flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed text-center">
                    <h2 className="text-xl font-semibold">
                        No books listed yet
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        You haven&apos;t listed any books for sale yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;