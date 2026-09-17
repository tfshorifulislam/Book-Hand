import { getUserBooks } from "@/actions/user.Post.get";
import { userProfile } from "@/actions/userId.Profile";
import BooksCard from "@/components/Books_Components/BooksCard";
import CoverProfile from "@/components/Profile_Components/Cover_Profile";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
  params: Promise<{
    userId: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
};

function getPageNumbers(
  currentPage: number,
  totalPages: number
): (number | "ellipsis")[] {
  if (totalPages <= 7) {
    return Array.from(
      { length: totalPages },
      (_, i) => i + 1
    );
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

const UserIdProfilePage = async ({
  params,
  searchParams,
}: Props) => {
  const { userId } = await params;

  const paramsData = await searchParams;

  const currentPage = Math.max(
    Number(paramsData.page) || 1,
    1
  );

  const limit = 8;

  const [userInfo, booksData] = await Promise.all([
    userProfile(userId),
    getUserBooks(userId, currentPage, limit),
  ]);

  const user = userInfo?.user;
  const books = booksData?.listings ?? [];
  const pagination = booksData?.pagination;

  const totalPages = pagination?.totalPages ?? 1;

  const pageNumbers = getPageNumbers(
    currentPage,
    totalPages
  );

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
              />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination className="mb-20">
              <PaginationContent>
                {/* Previous */}
                <PaginationItem>
                  <PaginationPrevious
                    href={
                      currentPage > 1
                        ? `/profile/${userId}?page=${currentPage - 1}`
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
                    <PaginationItem
                      key={`ellipsis-${index}`}
                    >
                      <PaginationEllipsis />
                    </PaginationItem>
                  ) : (
                    <PaginationItem key={page}>
                      <PaginationLink
                        href={`/profile/${userId}?page=${page}`}
                        isActive={
                          page === currentPage
                        }
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
                        ? `/profile/${userId}?page=${currentPage + 1}`
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
        </>
      ) : (
        <div className="my-20 flex min-h-75 flex-col items-center justify-center rounded-xl border border-dashed bg-muted/20 text-center">
          <h2 className="text-xl font-semibold">
            No books listed yet
          </h2>

          <p className="mt-2 text-sm text-muted-foreground">
            This user hasn&apos;t listed any books for sale yet.
          </p>
        </div>
      )}
    </div>
  );
};

export default UserIdProfilePage;