"use client";

import type { ReviewsProps } from '@/app/lib/definitions';
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { reviewsBaker } from '@/app/lib/datas'

type VideoProps = {
    id: number;
    video: string;
}

const ReviewsList = ({params}: {params: {productId: string}}) => {

    if (parseInt(params.productId) > 9) {
        notFound();
    };

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error product id is not a number");
    };

    const videoMap: VideoProps[] = [
        {
            id: 1,
            video: "Baker"
        },
        {
            id: 2,
            video: "Blind"
        },
        {
            id: 3,
            video: "Element"
        },
        {
            id: 4,
            video: "Girl"
        }
    ];

    return (
        <>
            <div className='flex items-center justify-start border'>
                <h2 className='text-3xl text-transparent bg-clip-text dark-title-h1 light-title-h1 m-4'>
                    All videos about Baker
                </h2>
                <div className='absolute w-full flex items-center justify-center border'>
                    <div className='flex items-center justify-evenly w-2/5 border'>
                        {videoMap.map((v.id: VideoProps) => (
                            v.id !== parseInt(params.productId) ? (
                                <Link key={v.id} href={`/products/decks/${v.video}/1/reviews`} className='cursor-pointer border'>
                                    {v.video} Video
                                </Link>
                            ): null )
                        )}

                    </div>
                </div>
            </div>
            
            <div className='flex'>

                {/*<div className='flex flex-col w-[220px] py-2 border'>

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

                </div>*/}
                
                <div className='flex items-center justify-center w-full'>

                    <div className='grid grid-cols-3 grid-rows-3 w-3/5 gap-x-4'>
                        {reviewsBaker.map((rev: ReviewsProps) => (
                            <div key={rev.id} className='flex flex-col '>
                                
                                <div className='flex items-center justify-center '>

                                    <div className='flex flex-col items-center justify-center w-full py-2'>
                                        <video muted controls className='w-full h-auto'>
                                            <source src={rev.video} type="video/mp4" />
                                        </video>
                                        <div className='flex items-center justify-start w-full text-sm text-slate-100 
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

            </div>
        </>
    )
};
export default ReviewsList;
