"use client";

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reviews } from '@/app/lib/datas'


const ReviewsList = ({params}: {params: {productId: string}}) => {

    if (parseInt(params.productId) > 36) {
        notFound();
    }

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error product id is not a number");
    }

    return (
        <>
            <h2 className='text-xl font-bold text-violet-500 dark:text-sky-500 m-4'>
                All Videos about Blind
            </h2>
            {reviews.map((rev) => (
                <ul key={rev.id} className='list-outside list-disc m-4 ml-10'>
                    <li className='text-violet-600 dark:text-slate-200'>
                        <Link 
                            href={`/products/decks/blind/${params.productId}/reviews/${rev.id}`}
                            className="text-violet-600 hover:text-fuchsia-600 
                                dark:text-slate-200 hover:dark:text-blue-400"
                        >
                            Refs : {rev.categories}
                        </Link>
                    </li>
                </ul>
            ))}  
        </>
    )
}

export default ReviewsList;
