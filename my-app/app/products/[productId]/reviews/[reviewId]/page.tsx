import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { products } from "@/app/lib/datas";
import { reviews } from "@/app/lib/datas";

type Props = {
    params: {
        productId: string;
        reviewId: string;
    }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${params.productId} extra: ${params.reviewId}`)
        }, 300)
    })
    return {
        title: `Product ${title}`
    }
}

export default function ReviewById({ params }: Props) {
    if (parseInt(params.reviewId) > 100 || parseInt(params.reviewId) !== Number(params.reviewId)) {
        notFound();
    }
    //console.log(params.reviewId, "reviewid")
    return (
        <div className='flex flex-col min-h-screen'>
            <p>Product id: {params.productId} and article id: {params.reviewId}</p>
            {products.map((prod) => (
                prod.id === parseInt(params.productId) ? (
                    <div key={prod.id}>
                        <p>{prod.name}</p>
                        <p>{prod.price}.- CHF</p>
                    </div>
                ) : null
            ))}
            {reviews.map((rev) => (
                rev.id === parseInt(params.reviewId) ? (
                    <p key={rev.id}>{rev.categories}</p>
                ) : null
            ))}
        </div>
    )
}

// params take the string value of productId & reviewId