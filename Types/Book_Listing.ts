export type BookListing = {
    id: string;

    book: {
        id:string;
        title: string;
        author: string;
        coverImage: string
        category: string
        language: string
    };

    seller: {
        id:string;
        name:string;
        image: string | null;
    }


}