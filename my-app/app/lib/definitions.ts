import { StaticImageData } from "next/image";

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
    label: string;
    review: string;
    video: string;
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
    titleFour: string;
    titlebox_1: string;
    titlebox_2: string;
}

export type AllTextProps = {
    textOne: string;
    textTwo: string;
    textThree: string;
    textFour: string;
    textbox_1: string;
    textbox_2: string;
}

export type PropsProdReview = {
    params: {
        productId: string;
        reviewId: string;
    }
}

export type TitlesProps = {
    id: number;
    title: string;
}

export type LinksProps = {
    id: number;
    link: string;
}

/* data for db interactions */
export type CartItem = {
    id: number;
    name: string;
    img: string;
    price: number;
    stock: number;
    quantity: number;
}

export type CartProps = {
    id: number;
    name: string;
    price: number;
    count: number;
    stock: number;
    img: string;
}

export type MessageProps = {
    username: string;
    email: string;
    message: string;
}

export type ImgSetProps = {
    id: number;
    images: StaticImageData[]
}

export type ListOfDecksProps = {
    id: number;
    name: string;
    label: string;
}

export type DataDeleteProps = {
    id: number;
}

export type EmailProps = {
    email: string;
}
export type PaymentProps = {
    user: string;
    date: string;
    securitycode: number;
    checkcard: boolean;
}