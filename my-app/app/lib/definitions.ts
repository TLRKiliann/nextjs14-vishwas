export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
};

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

export type AllTitlesProps = {
    titleOne: string;
    titleTwo: string;
    titleThree: string;
    titlebox_1: string;
    titlebox_2: string;
}

export type AllTextProps = {
    textOne: string;
    textTwo: string;
    textThree: string;
    textbox_1: string;
    textbox_2: string;
}

export type PropsProdReview = {
    params: {
        productId: string;
        reviewId: string;
    }
}