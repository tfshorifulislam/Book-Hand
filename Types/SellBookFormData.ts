export type SellBookFormData = {
    title: string;
    author: string;
    category: string;
    language: string;
    description: string;
    coverImage: FileList;
    price: number;
    condition: string;
}