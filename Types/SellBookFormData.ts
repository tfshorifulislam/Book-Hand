export type SellBookFormData = {
    title: string;
    author: string;
    category: string;
    language: string;
    description: string;
    price: number;
    condition: string;
    coverImage?: FileList;
};