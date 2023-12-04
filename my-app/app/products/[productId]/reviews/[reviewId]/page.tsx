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
            resolve(`CPU: ${params.productId} Art: ${params.reviewId}`)
        }, 300)
    })
    return {
        title: `Prod-${title}-`
    }
}

export default function ReviewById({ params }: Props) {
    if (parseInt(params.reviewId) > 100 || parseInt(params.reviewId) !== Number(params.reviewId)) {
        notFound();
    }
    //console.log(params.reviewId, "reviewid")
    return (
        <div className='flex flex-col min-h-screen'>
            <div className='p-4'>
                <p>Product id: {params.productId} and article id: {params.reviewId}</p>
            </div>
            {products.map((prod) => (
                prod.id === parseInt(params.productId) ? (
                    <div key={prod.id} className='p-4'>
                        <p>{prod.name}</p>
                        <p>{prod.price}.- CHF</p>
                    </div>
                ) : null
            ))}
            {reviews.map((rev) => (
                rev.id === parseInt(params.reviewId) ? (
                    <div key={rev.id} className='p-4'>
                        <h3 className='text-2xl'>{rev.categories}</h3>
                        <p className='text-md mt-2'>{rev.review}</p>
                    </div>
                ) : null
            ))}
        </div>
    )
}

// params take the string value of productId & reviewId