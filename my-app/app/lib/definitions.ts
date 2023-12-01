export type ProductsProps = {
    id: number;
    name: string;
    img: string;
    price: number;
    stock: number;
}

export type ReviewsProps = {
    id: number;
    categories: string;
    review: string;
}

export type CustomersProps = {
    id: string;
    name: string;
    email: string;
    date: string;
    amount: number;
    status: string;
}