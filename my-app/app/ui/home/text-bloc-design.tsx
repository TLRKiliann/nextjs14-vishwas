import React from 'react';
import Image from 'next/image';
import flipFamily from '@/public/img_decks/flip-family.jpg';

type PropsText = {
    text: string;
}

export default function TextBlockDesign({text}: PropsText) {
    return (
        <div className='w-full dark:bg-slate-900 bg-slate-100 py-10'>
            
            <hr className='w-4/5 m-auto mb-10 border border-indigo-800/40 dark:border-blue-600/50 dark:shadow-lgblue' />

            <div className='flex items-center justify-between w-4/5 m-auto'>
                
                <div className='flex flex-col items-center justify-center w-3/5 h-[260px] xl:py-10'>

                    <h2 className='sm:text-3xl xl:text-5xl font-extrabold text-transparent bg-clip-text 
                        light-main-tile dark-main-tile mb-4 pb-4'
                    >
                        High-quality products with guarantees for our members.
                    </h2>

                    <p className='sm:text-md xl:text-2xl text-justify text-slate-600 dark:text-blue-300 pr-8'>
                        {text}
                    </p>

                </div>

                <Image src={flipFamily} width={2048} height={1365} alt="img text bloc design"
                    className='flex items-center justify-center w-2/5 h-auto xl:w-[400px] object-cover 
                        rounded-lg dark:shadow-lgblue' />

            </div>

            <hr className='w-4/5 m-auto mt-10 border border-indigo-800/40 dark:border-blue-600/50 dark:shadow-lgblue' />

        </div>
    )
}
