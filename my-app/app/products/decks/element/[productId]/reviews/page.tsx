"use client";

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reviewsElement } from '@/app/lib/datas'


const ReviewsList = ({params}: {params: {productId: string}}) => {

    if (parseInt(params.productId) > 27) {
        notFound();
    };

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error product id is not a number");
    };

    return (
        <>
            <h2 className='text-3xl text-transparent bg-clip-text dark-title-h1 light-title-h1 m-4'>
                All videos about Element
            </h2>
            
            <div className='flex'>

                <div className='w-[220px] py-2'>

                    {reviewsElement.map((rev) => (
                        <ul key={rev.id} className='list-outside list-disc mb-2 ml-10'>
                            <li className='text-lg dark:text-blue-500'>
                                <Link 
                                    href={`/products/decks/element/${params.productId}/reviews/${rev.id}`}
                                    className="text-transparent bg-clip-text dark-title-h1 light-title-h1 
                                    hover:text-fuchsia-600 hover:dark:text-blue-400"
                                >
                                    {rev.categories}
                                </Link>
                            </li>
                        </ul>
                    ))}

                </div>

                <div className='grid grid-cols-3 grid-rows-3 w-4/5 mr-10'>
                    {reviewsElement.map((rev) => (
                        <div key={rev.id} className='flex flex-col '>
                            
                            <div className='flex items-center justify-center '>

                                <div className='flex flex-col items-center justify-center w-full py-4'>
                                    <video muted controls className='w-4/5 h-auto'>
                                        <source src={rev.video} type="video/mp4" />
                                    </video>
                                    <div className='flex items-center justify-start w-4/5 text-sm text-slate-100 
                                        py-2'>
                                        <span className='flex items-center justify-center text-sm font-bold text-yellow-300 bg-green-600
                                            ml-0 mr-3 px-[7px] pt-[8px] pb-[5px] rounded-full'>
                                            {rev.label}
                                        </span>
                                        <div className='text-md text-transparent bg-clip-text dark-title-h1 light-title-h1 
                                            hover:dark:text-blue-400 mt-1'>
                                            <Link 
                                                href={`/products/decks/element/${params.productId}/reviews/${rev.id}`}
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
