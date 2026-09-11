export type BookListing = {
    id: string;
    condition: string;
    price: number;
    book: {
        id: string;
        title: string;
        author: string;
        coverImage: string
        category: string
        language: string
    };

    seller: {
        id: string;
        name: string;
        image: string | null;
    }


}