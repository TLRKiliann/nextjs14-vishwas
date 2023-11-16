import { notFound } from 'next/navigation';

export default function ReviewById({params}: {params: {
    productId: string, 
    reviewId: string }
    }) {
        if (parseInt(params.reviewId) > 100) {
            notFound();
        }
    return (
        <p>Product id: {params.productId} and review id: {params.reviewId}</p>
    )
}