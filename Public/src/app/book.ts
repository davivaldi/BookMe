export interface Book {
    title: string;
    _id?: string;
    author: string;
    desc: string;
    isbn: number;
    image?: string;
    rating?: number;
    createdAt?: Date;
    updatedAt?: Date;
}
