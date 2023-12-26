"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useShoppingCart } from '@/app/context/cart-context';
import CartItem from './cartitem';
import { BsCart3 } from "react-icons/bs";

export default function ShoppingCart() {

    const pathname = usePathname();
    
    const { cartItems } = useShoppingCart();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen((old) => !old);
    };

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
                            {cartItems.reduce((total, cartItem) => {
                                const totalCart: number = total += cartItem.quantity
                                return totalCart}, 0
                            )}
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

                    {cartItems.length !== 0 ? cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                        )) : (
                        <p className='text-center text-slate-600'>Add product to cart</p>
                    )}

                </div>

                <div className='flex items-center justify-center py-4 border border-slate-900'>
                    <Link href="/order"
                        onClick={toggle}
                        className='w-full font-bold text-center text-slate-50 bg-sky-700/80
                        hover:text-slate-200 hover:bg-sky-700/90 hover:shadow-none
                        active:text-green-300 active:bg-sky-700/70 active:scale-95 active:shadow-none
                        border-none mx-4 py-2 rounded-lg shadow-md'>
                        Order
                    </Link>
                </div>

            </div>

        </div>
    )
}
