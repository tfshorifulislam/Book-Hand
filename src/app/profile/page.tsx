import { getUserBooks } from "@/actions/user.Post.get";
import BooksCard from "@/components/Books_Components/BooksCard";
import CoverProfile from "@/components/Profile_Components/Cover_Profile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

type ProfilePageProps = {
    searchParams: Promise<{
        page?: string;
    }>;
};

const ProfilePage = async ({
    searchParams,
}: ProfilePageProps) => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const user = session?.user;

    if (!user) {
        return null;
    }

    const params = await searchParams;

    const page = Math.max(
        Number(params.page) || 1,
        1
    );

    const limit = 10;

    const booksData = await getUserBooks(
        user.id,
        page,
        limit
    );

    const books = booksData?.listings ?? [];
    const pagination = booksData?.pagination;

    return (
        <div className="mx-auto max-w-7xl px-4 md:px-6">
            <CoverProfile user={user} />

            {books.length > 0 ? (
                <>
                    <div className="my-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {books.map((item) => (
                            <BooksCard
                                key={item.id}
                                item={item}
                                canDelete={true}
                            />
                        ))}
                    </div>

                    {/* Pagination এখানে বসবে */}
                </>
            ) : (
                <div className="my-20 flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 text-center">
                    <h2 className="text-xl font-semibold">
                        No books listed yet
                    </h2>

                    <p className="mt-2 text-sm text-muted-foreground">
                        You haven&apos;t listed any books for sale yet.
                    </p>
                </div>
            )}

            {/* pagination add system */};
            {pagination && pagination.totalPages > 1 && (
                <Pagination className="mb-20">
                    <PaginationContent>
                        {pagination.page > 1 && (
                            <PaginationItem>
                                <PaginationPrevious
                                    href={`/profile?page=${pagination.page - 1}`}
                                />
                            </PaginationItem>
                        )}

                        {Array.from(
                            { length: pagination.totalPages },
                            (_, index) => index + 1
                        ).map((pageNumber) => (
                            <PaginationItem key={pageNumber}>
                                <PaginationLink
                                    href={`/profile?page=${pageNumber}`}
                                    isActive={pageNumber === pagination.page}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        {pagination.page < pagination.totalPages && (
                            <PaginationItem>
                                <PaginationNext
                                    href={`/profile?page=${pagination.page + 1}`}
                                />
                            </PaginationItem>
                        )}
                    </PaginationContent>
                </Pagination>
            )}

        </div>
    );
};

export default ProfilePage;