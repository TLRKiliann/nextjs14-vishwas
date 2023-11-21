import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reviews } from '../../../lib/datas'
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: {
        absolute: "Reviews"
    },
    description: "list of reviews"
}

const ReviewsList = ({params}: {params: {productId: string}}) => {

    if (parseInt(params.productId) > 100) {
        notFound();
    }

    return (
        <div className='h-screen'>
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

export default ReviewsList;

//const ReviewsList = ({params}: {params: {productId: string}}) => {...