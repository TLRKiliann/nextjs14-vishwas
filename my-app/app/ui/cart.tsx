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
    console.log(state.items)

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
                        border border-slate-950 hover:border-slate-50 dark:border-slate-50 rounded-full'
                    >
                        {state.items.length}
                    </p>
                </div>
            </span>






            <div className={`absolute flex-col text-md font-normal top-0 right-0 w-[400px] h-[auto] 
                text-slate-900 bg-cyan-50 rounded-br-lg rounded-bl-lg ${transClass} z-20`}
            >
                <div className='text-right p-2'>
                    <button
                        type="button"
                        onClick={toggle} 
                        className='w-7 h-7 border border-slate-900 rounded-full pb-2'>
                        x
                    </button>
                </div>

                <div className='flex items-center justify-between pb-4 border border-slate-900'>

                    {state.items.map((s) => (
                        <p key={s.id}>deckname{s.deckname}</p>   
                    ))}

                    <div className='border border-slate-900 m-auto ml-4'>
                        Image
                        {/* <Image src={} width={100} height={100} alt={} /> */}
                    </div>

                    <div className='flex-1 items-center m-auto mr-4 border border-slate-900'>
                        <p className='text-xl text-blue-600 border border-slate-900 mb-2'>Name: .... </p>
                        <p className='text-lg text-blue-600 border border-slate-900 mb-2'>Price: ...</p>
                        <p className='text-md text-blue-600 border border-slate-900'>stock: ...</p>
                    </div>

                </div>

                <div className='flex items-center justify-center py-4 border border-slate-900'>
                    <Link href="/cart" className='text-slate-50 bg-sky-700/80 hover:bg-sky-700/60
                        hover:shadow-none active:text-slate-50 active:bg-sky-700/40 
                        active:scale-95 active:shadow-none border-none px-4 py-1 rounded-lg shadow-md'>
                        Go to cart
                    </Link>
                </div>

            </div>

        </div>
    )
}
