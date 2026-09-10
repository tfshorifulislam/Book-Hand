import { BookListing } from "../../../Types/Book_Listing";

type Props = {
    item: BookListing;
}

const BooksCard = ({ item }: Props) => {
    
    return (
        <div>
            {/* {item.book.title} */}
        </div>
    );
};

export default BooksCard;