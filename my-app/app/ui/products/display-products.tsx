import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductsProps } from '@/app/lib/definitions';

export default function DisplayProducts({ id, name, price, img, stock }: ProductsProps) {

    return (

        <div key={id} className='flex flex-col m-auto h-auto
            font-bold text-slate-100
            dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
            dark:via-sky-500 dark:via-50% dark:to-slate-900 dark:to-90%
            bg-gradient-to-r from-blue-400 from-10% 
            via-slate-50 via-50% to-indigo-400 to-90%
            transform transition hover:scale-[1.025] hover:shadow-lg
            translate-y-0 animate-up-start rounded-lg'
        >

            <div className='px-3 py-2 pt-3'>
                <div className='md:w-[200px] xl:w-[300px] h-auto rounded-lg shadow-in'
                >
                    <Image
                        src={img}
                        width={1920}
                        height={1080}
                        alt="img cpui9"
                        className="object-fill rounded-lg shadow-in"
                    />

                </div>
            </div>

            <div className='px-3 py-1 pt-2'>
                <div className='flex flex-col align-center justify-center 
                    bg-slate-700 shadow-in border-none m-auto rounded-lg py-2'
                >
                    <h3 className='text-xl m-auto transform'>
                        {name}
                    </h3>
                    <p className='text-md mx-auto my-1'>
                        {price}.- CHF
                    </p>
                    <p className='text-sm mx-auto mb-1'>
                        Stock: {stock}
                    </p>
                    <p className='text-sm mx-auto mb-2'>
                        Count: 0 {/* comment faire */}
                    </p>
                    <Link 
                        href={`/products/${id}`} 
                        className='text-xs mx-auto text-blue-500 hover:text-blue-400 pb-1'>
                        View details
                    </Link>
                </div>

            </div>

            <div className='px-3 py-2 pb-3'>
                <div className='flex justify-around bg-slate-600 
                        m-auto rounded-lg shadow-in'
                >
                    <button className='w-16
                        text-lg font-extrabold
                        bg-blue-500 border-none
                        my-3 py-1 rounded-full shadow-btn 
                        hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                        active:bg-blue-600 active:shadow-inlight active:text-slate-300'
                    >
                        -
                    </button>
                    <button className='w-16
                        text-lg font-extrabold
                        bg-blue-500 border-none
                        my-3 py-1 rounded-full shadow-btn 
                        hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                        active:bg-blue-600 active:shadow-inlight active:text-slate-300'
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}
