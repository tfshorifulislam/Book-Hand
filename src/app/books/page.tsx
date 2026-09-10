import { getBooks } from "@/actions/books";
import BooksCard from "@/components/Books_Components/BooksCard";
import { BookListing } from "../../../Types/Book_Listing";

const BooksPage = async () => {

    const booksData = await getBooks();
    const items:BookListing[] = booksData?.data;
    console.log(booksData)

    return (
        <div className="mx-auto max-w-7xl py-10 md:py-16 lg:py-20 px-4 md:px-6">
            <div>
                {
                    items?.map((item) => (
                        <div key={item.id}>

                            <BooksCard
                                item={item}
                            />

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BooksPage;