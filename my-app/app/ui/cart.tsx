"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useCart } from '@/app/context/cart-context';
import { BsCart3 } from "react-icons/bs";

export default function Cart() {

    const pathname = usePathname();
    
    const {state} = useCart();

    console.log(state.items, "+ state.items")

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen((old) => !old);
    }

    const transClass: string = isOpen ? "flex" : "hidden";

    return (
        <div className='flex items-center m-auto'>

            <span
                className={`${pathname === "/cart"
                ? "text-lg ml-10 p-2 dark:text-cyan-300 text-fuchsia-600"
                : "text-lg ml-10 p-2 hover:text-slate-50 hover:scale-105 hover:cursor-pointer"}`}
                onClick={toggle}
            >
                <BsCart3 size={22} />
                <div className='absolute text-sm m-auto pl-4 -mt-1'>
                    <p className='flex items-center justify-center w-6 h-6 
                        text-slate-900 bg-slate-50 border-none 
                        hover:border-slate-50 dark:border-slate-50 rounded-full'
                    >
                        {state.items.length}
                    </p>
                </div>
            </span>

            <div className={`absolute flex-col text-md font-normal top-0 right-0 w-[500px] h-[auto] 
                text-slate-900 bg-slate-100 rounded-br-lg rounded-bl-lg ${transClass} z-20`}
            >
                <div className='text-right p-2'>
                    <button
                        type="button"
                        onClick={toggle} 
                        className='w-7 h-7 bg-slate-200 border-none
                            hover:text-slate-500 hover:bg-slate-300/60 hover:border-slate-200
                             active:text-slate-50 active:bg-slate-200
                            pb-2 rounded-full'>
                        x
                    </button>
                </div>

                <div className='my-auto border border-slate-900'>

                    {state.items.length === null ? state.items.map((item) => (
                        <div key={item.id} className='flex items-center justify-around my-2'>

                            <div className='border border-slate-900 m-auto ml-4'>
                                
                                <Image src={item.img} width={100} height={100} alt={item.img} />
                            </div>

                            <div className='flex-1 items-center m-auto mr-4 border border-slate-900 ml-4'>
                                <p className='text-xl font-bold text-slate-600 border 
                                    border-slate-900 mb-2'>
                                    {item.deckname.toUpperCase()} 
                                </p>
                                <p className='text-lg text-slate-600 border border-slate-900 mb-2'>
                                    Price: {item.price.toFixed(2)}.- CHF
                                </p>
                                <div className='flex items-center justify-between'>
                                    <p className='text-md text-slate-600 border border-slate-900'>
                                        stock: {item.stock}
                                    </p>
                                    <span className='flex items-center justify-between
                                        border border-slate-900'>
                                        <button className='w-8 h-8 mx-4 text-slate-200 font-bold 
                                            bg-red-500 border-none hover:text-slate-300 
                                                hover:bg-red-600 active:text-slate-50 active:bg-red-400 rounded-full'>
                                                -
                                        </button>

                                        <button className='w-8 h-8 mx-4 text-slate-200 font-bold 
                                            bg-red-500 border-none hover:text-slate-300 
                                                hover:bg-red-600 active:text-slate-50 active:bg-red-400 rounded-full'>
                                                +
                                        </button>
                                    </span>
                                </div>
                            </div>

                        </div>
                    )) : (
                        <p className='text-md text-center'>Nothing saved in cart</p>
                    )
                    }

                </div>

                <div className='flex items-center justify-center py-4 border border-slate-900'>
                    <Link href="/cart"
                        onClick={toggle}
                        className='w-full font-bold text-center text-slate-50 bg-sky-700/80
                        hover:text-slate-200 hover:bg-sky-700/90 hover:shadow-none
                        active:text-green-300 active:bg-sky-700/70 active:scale-95 active:shadow-none
                        border-none mx-4 py-2 rounded-lg shadow-md'>
                        Go to cart
                    </Link>
                </div>

            </div>

        </div>
    )
}
