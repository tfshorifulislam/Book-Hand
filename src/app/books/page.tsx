import { Suspense } from "react";
import BooksLoading from "@/components/Books_Components/BooksLoading";
import BooksContent from "@/components/Books_Components/BooksContent";


type Props = {
  searchParams: Promise<{
    page?: string;
    search?: string;
  }>;
};

const BooksPage = async ({ searchParams }: Props) => {
  const params = await searchParams;

  const search = params.search?.trim() || "";

  const currentPage = Math.max(
    Number(params.page) || 1,
    1
  );

  return (
    <Suspense
      key={`${currentPage}-${search}`}
      fallback={<BooksLoading />}
    >
      <BooksContent
        currentPage={currentPage}
        search={search}
      />
    </Suspense>
  );
};

export default BooksPage;
