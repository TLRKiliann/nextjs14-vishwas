import React from 'react';
import Link from 'next/link';
import CartItems from '@/app/ui/cart/cart-items';

export default function Cart() {

    return (
        <div className='w-full min-h-screen dark:bg-slate-100 py-[75px]'>

            <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
                Cart
            </h1>

            <CartItems />

            <div className="w-full">

                <div className='flex items-center justify-center pt-2 pb-4'>
                    <Link href="/order"
                        className='w-full font-bold text-center text-slate-50 bg-sky-700/80
                        hover:text-slate-200 hover:bg-sky-700/90 hover:shadow-none
                        active:text-green-300 active:bg-sky-700/70 active:scale-95 active:shadow-none
                        border-none mx-4 py-2 rounded-lg shadow-md'
                    >
                        CHECKOUT
                    </Link>
                </div>

            </div>

        </div>
    )
}