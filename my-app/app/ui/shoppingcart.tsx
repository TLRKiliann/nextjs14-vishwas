"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useShoppingCart } from '@/app/context/cart-context';
import CartItem from './cartitem';
import { BsCart3 } from "react-icons/bs";

export default function ShoppingCart() {

    const { cartItems } = useShoppingCart();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen((old) => !old);
    };

    const transClass: string = isOpen === true ? "flex" : "hidden";

    return (
        <div className='flex items-center m-auto'>

            <span
                className="text-lg ml-10 p-2 hover:text-indigo-500 hover:scale-105 cursor-pointer 
                dark:hover:text-slate-50"
                onClick={toggle}
            >
                <BsCart3 size={22} />
                <div className='absolute text-sm m-auto pl-4 -mt-1'>
                    <p className='flex items-center justify-center w-6 h-6 dark:text-slate-800 
                        bg-slate-50/80 border-none hover:border-slate-50 dark:border-slate-50 rounded-full'
                    >
                        {cartItems.reduce((total: number, cartItem: {quantity: number}) => {
                            const totalCart: number = total += cartItem.quantity;
                            return totalCart}, 0)
                        }
                    </p>
                </div>
            </span>

            <div id="miniscroll-cart"  
                className={`z-30 fixed right-0 flex-col text-md font-normal top-[80px] w-[400px] h-[auto] 
                text-slate-900 bg-slate-100 rounded-bl-lg ${transClass}`}
            >
                <div className='text-right pt-2 pr-2'>
                    <button
                        type="button"
                        onClick={toggle} 
                        className='w-7 h-7 bg-slate-200 hover:text-slate-500 hover:bg-slate-300/60
                            active:text-slate-50 active:bg-slate-200 pb-2 rounded-full'
                    >
                        x
                    </button>
                </div>

                <div className='my-auto'>

                    {cartItems.length !== 0 ? cartItems.map((item) => (
                        <CartItem 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.img}
                            price={item.price}
                            stock={item.stock}
                            quantity={item.quantity}
                        />
                        )) : (
                        <p className='text-center text-slate-600'>
                            Add product to cart
                        </p>
                    )}

                </div>

                <div className='flex items-center justify-center pt-2 pb-2'>
                    <Link href="/cart" onClick={toggle}
                        className='w-full font-bold text-center text-slate-50 bg-sky-700/80
                        hover:text-slate-200 hover:bg-sky-700/90 hover:shadow-none
                        active:text-slate-50 active:bg-sky-700/70 active:scale-95 active:shadow-none
                        border-none mx-4 py-2 rounded-lg shadow-md'
                    >
                        GO TO CART
                    </Link>
                </div>

                <div className='flex items-center justify-center pt-2 pb-4'>
                    <Link href="/order"
                        onClick={toggle}
                        className='w-full font-bold text-center text-slate-50 bg-sky-700/80
                        hover:text-slate-200 hover:bg-sky-700/90 hover:shadow-none
                        active:text-slate-50 active:bg-sky-700/70 active:scale-95 active:shadow-none
                        border-none mx-4 py-2 rounded-lg shadow-md'
                    >
                        CHECKOUT
                    </Link>
                </div>

            </div>

        </div>
    )
}
