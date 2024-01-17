"use client";

import type { ReviewsProps, VideoProps } from '@/app/lib/definitions';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { reviewsBlind } from '@/app/lib/datas'
import { videoDecks } from '@/app/lib/video-data';
import videoTape from '@/public/video/video-tape.png';


const ReviewsList = ({params}: {params: {productId: string}}) => {

    const router = useRouter();

    if (parseInt(params.productId) > 18) {
        notFound();
    };

    if (parseInt(params.productId) !== Number(params.productId)) {
        throw new Error("Error product id is not a number");
    };

    const handlePath = (id: number, video: string) => {
        router.push(`/products/decks/${video}/${id}/reviews`);
    };

    return (
        <>
            <div className='flex items-center justify-start'>
                <h2 className='text-3xl text-transparent bg-clip-text dark-title-h1 light-title-h1 m-4'>
                    All videos about Blind
                </h2>
                <div className='absolute w-full flex items-center justify-center'>
                    <div className='flex items-center justify-evenly w-2/5'>

                        {videoDecks.map((vid: VideoProps) => (
                            vid.id !== parseInt(params.productId) ? (
                                <div key={vid.id}
                                    onClick={() => handlePath(vid.id, vid.video)}
                                    className="relative flex items-center justify-center cursor-pointer 
                                        hover:scale-105">
                                    <span className='w-[100px] h-auto'>
                                        <Image src={videoTape} width={512} height={512} alt="tape img"
                                            className="object-cover" />
                                    </span>
                                    <div className='absolute w-[200px] flex justify-center -rotate-45'>
                                        <h3 className='text-2xl font-bold text-transparent bg-clip-text
                                            dark-title-h1 light-title-h1'>
                                            {vid.video.toUpperCase()}
                                        </h3>
                                    </div>
                                </div>
                            ): null )
                        )}

                    </div>
                </div>
            </div>

            <div className='flex'>

                <div className='flex items-center justify-center w-full'>

                    <div className='grid grid-cols-3 grid-rows-3 w-3/5 gap-x-4'>
                        {reviewsBlind.map((rev: ReviewsProps) => (
                            <div key={rev.id} className='flex flex-col '>
                                
                                <div className='flex items-center justify-center '>

                                    <div className='flex flex-col items-center justify-center w-full py-4'>
                                        <video muted controls className='w-4/5 h-auto'>
                                            <source src={rev.video} type="video/mp4" />
                                        </video>
                                        <div className='flex items-center justify-start w-4/5 text-sm text-slate-100 
                                            py-2'>
                                            <span className='flex items-center justify-center text-sm font-bold text-slate-900 bg-slate-200
                                                ml-0 mr-3 px-[7px] pt-[8px] pb-[5px] rounded-full'>
                                                {rev.label}
                                            </span>
                                            <div className='text-md text-transparent bg-clip-text dark-title-h1 light-title-h1 
                                                hover:dark:text-blue-400 mt-1'>
                                                <Link 
                                                    href={`/products/decks/blind/${params.productId}/reviews/${rev.id}`}
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
