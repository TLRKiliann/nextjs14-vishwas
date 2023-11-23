import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
    if (parseInt(params.reviewId) > 100 || parseInt(params.productId) !== Number(params.productId)) {
        notFound();
    }
    console.log(params.reviewId, "reviewid")
    return (
        <div className='flex flex-col min-h-screen'>
            <p>Product id: {params.productId} and review id: {params.reviewId}</p>
        </div>
    )
}

// params take the string value of productId & reviewId