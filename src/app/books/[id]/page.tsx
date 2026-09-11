import { bookDetails } from "@/actions/book.Details";

type BookDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};


const BookDetailsPage = async ({ params, }: BookDetailsPageProps) => {
    const { id } = await params;

    console.log(id);

    const data = await bookDetails(id);

    return (
        <div>
            {data.data.book.title}
        </div>
    );
};

export default BookDetailsPage;