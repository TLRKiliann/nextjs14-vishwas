"use client";

import type { ReviewsProps } from '@/app/lib/definitions';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reviewsBaker } from '@/app/lib/datas'

const ReviewsList = ({params}: {params: {productId: string}}) => {

    if (parseInt(params.productId) > 9) {
        notFound();
    };

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error product id is not a number");
    };

    return (
        <>
            <h2 className='text-3xl text-transparent bg-clip-text dark-title-h1 light-title-h1 m-4'>
                All videos about Baker
            </h2>
            
            <div className='flex'>

                <div className='w-[220px] py-2'>

                    {reviewsBaker.map((rev: ReviewsProps) => (
                        <ul key={rev.id} className='list-outside list-disc mb-2 ml-10'>
                            <li className='custom-li'>
                                <Link 
                                    href={`/products/decks/baker/${params.productId}/reviews/${rev.id}`}
                                    className="custom-link"
                                >
                                    {rev.categories}
                                </Link>
                            </li>
                        </ul>
                    ))}

                </div>

                <div className='grid grid-cols-3 grid-rows-3 w-4/5 mr-10'>
                    {reviewsBaker.map((rev: ReviewsProps) => (
                        <div key={rev.id} className='flex flex-col '>
                            
                            <div className='flex items-center justify-center '>

                                <div className='flex flex-col items-center justify-center w-full py-4'>
                                    <video muted controls className='w-4/5 h-auto'>
                                        <source src={rev.video} type="video/mp4" />
                                    </video>
                                    <div className='flex items-center justify-start w-4/5 text-sm text-slate-100 
                                        py-2'>
                                        <span className='flex items-center justify-center text-sm font-bold bg-red-600
                                            ml-0 mr-3 px-[7px] pt-[8px] pb-[5px] rounded-full'>
                                            {rev.label}
                                        </span>
                                        <div className='text-md text-transparent bg-clip-text dark-title-h1 light-title-h1 
                                            hover:dark:text-blue-400 mt-1'>
                                            <Link 
                                                href={`/products/decks/baker/${params.productId}/reviews/${rev.id}`}
                                            >
                                                {rev.review}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
export default ReviewsList;
