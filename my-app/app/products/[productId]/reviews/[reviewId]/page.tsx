import { notFound } from 'next/navigation';

export default function ReviewById({ params }: {params: { productId: string, reviewId: string }}) {
    if (parseInt(params.reviewId) > 100) {
        notFound();
    }
    console.log(params.reviewId, "reviewid")
    return (
        <div className='h-sceen'>
            <p>Product id: {params.productId} and review id: {params.reviewId}</p>
        </div>
    )
}

// params take the string value of productId & reviewId