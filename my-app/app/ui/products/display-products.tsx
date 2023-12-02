import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ProductsProps } from '@/app/lib/definitions';

export default function DisplayProducts({ id, name, price, img, stock }: ProductsProps) {

    const [count, setCount] = useState<number>(0);

    const [totalPrice] = useState<number>(price);

    let newCount: number = count;

    const handleSub = (id: number) => {
        console.log(id)
        if (count === 0) {
            console.log("Nothing has changed");
        }
        else {
            setCount((count) => count - 1);
        }
    }

    const handleAdd = (id: number) => {
        console.log(id)
        setCount((count) => count + 1);
    }

    return (

        <div className='flex flex-col m-auto h-auto
            font-bold text-slate-100
            dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
            dark:via-sky-500 dark:via-50% dark:to-slate-900 dark:to-90%
            bg-gradient-to-r from-blue-400 from-10% 
            via-slate-50 via-50% to-indigo-400 to-90%
            transform transition hover:scale-[1.025] hover:shadow-2xl
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
                        {count === 0 ? price : totalPrice * newCount}.- CHF
                    </p>
                    <p className='text-sm mx-auto mb-1'>
                        {stock >= count 
                            ? "Stock: " + (stock - count) 
                            : (
                                <span className='text-red-500'>
                                    No more in stock
                                </span>
                            )
                        }
                    </p>
                    <p className='text-md mx-auto mb-2'>
                        Count:&nbsp; 
                        <span className={`${count === 0 ? "text-slate-400" : "text-slate-50"}`}>
                            {count <= stock ? count : "No more"}
                        </span>
                    </p>
                    <Link 
                        href={`/products/${id}`} 
                        className='text-sm mx-auto text-cyan-400 hover:text-cyan-500 pb-1'>
                        View details
                    </Link>
                </div>

            </div>

            <div className='px-3 py-2 pb-3'>
                <div className='flex justify-around bg-slate-600 
                        m-auto rounded-lg shadow-in'
                >
                    <button
                        type="button"
                        onClick={() => handleSub(id)}
                        className='w-16 text-lg font-extrabold
                        bg-blue-500 border-none
                        hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                        active:bg-blue-600 active:shadow-inlight active:text-slate-300
                        shadow-btn dark:border-none dark:shadow-btn
                        transition transform ease-in-out
                        dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
                        dark:via-sky-400 dark:via-50% dark:to-slate-900 dark:to-90%
                        dark:hover:from-slate-600 dark:hover:from-10% dark:hover:via-sky-500 
                        dark:hover:via-50% dark:hover:to-slate-600 dark:hover:to-90% 
                        dark:hover:shadow-none dark:active:text-emerald-500
                        dark:active:shadow-in my-3 py-1 rounded-full'
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={() => handleAdd(id)}
                        className='w-16 text-lg font-extrabold
                        bg-blue-500 border-none
                        hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                        active:bg-blue-600 active:shadow-inlight active:text-slate-300
                        shadow-btn dark:border-none dark:shadow-btn
                        transition transform ease-in-out
                        dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
                        dark:via-sky-400 dark:via-50% dark:to-slate-900 dark:to-90%
                        dark:hover:from-slate-600 dark:hover:from-10% dark:hover:via-sky-500 
                        dark:hover:via-50% dark:hover:to-slate-600 dark:hover:to-90% 
                        dark:hover:shadow-none dark:active:text-emerald-500
                        dark:active:shadow-in my-3 py-1 rounded-full'
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}

/*
<div className='relative flex align-center justify-center h-12 
dark:text-slate-50 text-cyan-600
dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
dark:via-sky-400 dark:via-40% dark:to-slate-900 dark:to-90%
bg-gradient-to-r from-blue-400 from-10% 
via-slate-50 via-40% to-blue-400 to-90%
shadow-xllight mt-40 z-0'
>
<h2 className='text-2xl font-bold m-auto text-transparent bg-clip-text 
  dark:bg-gradient-to-br dark:from-slate-500 dark:from-10% 
  dark:via-cyan-200 dark:via-40% dark:to-slate-500 dark:to-90%
  dark:drop-shadow-lg
  bg-gradient-to-br from-slate-600 from-10% 
  via-sky-600 via-40% to-indigo-800 to-90% drop-shadow-lg
  transition animate-slice-appear'
>
*/