import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type ReviewsProps = {
    id: number;
    ref: string;
}

const ReviewsList = ({params}: {params: {productId: string}}) => {

    const reviews: ReviewsProps[] = [
        {
            id: 1,
            ref: "267816378261"
        },
        {
            id: 2,
            ref: "267816378262"
        },
        {
            id: 3,
            ref: "267816378263"
        }
    ];

    if (parseInt(params.productId) > 100) {
        notFound();
    }

    return (
        <div className='h-sceen'>
            {reviews.map((rev) => (
                <p key={rev.id}>
                    <Link 
                        href={`/products/${params.productId}/reviews/${rev.id}`}
                        className="text-slate-200 hover:text-blue-400"
                    >
                        Refs : {rev.ref}
                    </Link>
                </p>
            ))}  
        </div>
    )
}

export default ReviewsList