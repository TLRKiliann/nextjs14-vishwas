import type { Metadata } from 'next';
import type { CartProps } from '@/app/lib/definitions';
import React from 'react';
import Link from 'next/link';
import { queryCartOrder } from '@/app/lib/db';
import CartItems from '@/app/ui/cart/cart-items';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Cart",
    description: "access accepted"
};

export default async function Cart() {

    const request: CartProps[] = await queryCartOrder("SELECT * FROM cartorder", []);
    const order: string = JSON.stringify(request);

    if (!order) {
        throw new Error("Error: server failed to catch data from cartorder !");
    };

    let totalPrice: number[] = JSON.parse(order).map((p: CartProps): number => {
      if (p.count === 0) {
        return 0;
      } else {
        const total: number = p.count * p.price
        return total;
      }
    });
    
    const filterTotal: number = totalPrice.reduce((a: number, b: number) => a += b, 0);

    return (
        <div className='w-full min-h-screen bg-slate-100 dark:bg-slate-900 py-[75px]'>

            <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
                Cart
            </h1>

            <CartItems order={JSON.parse(order)} />

            <div className='flex justify-center'>

                <div className='flex items-center justify-between w-3/5 bg-slate-300 px-4 py-2 rounded 
                    shadow-md'>
                    <h2 className='text-lg font-bold text-slate-600'>
                        Total :
                    </h2>

                    <p className='text-lg font-bold text-slate-600'>
                        {Number(filterTotal).toFixed(2)}.-
                    </p>
                </div>

            </div>

            <div className='flex items-center justify-center w-full pt-4 pb-4'>
                <Link href="/order"
                    className='w-3/5 font-bold text-center text-slate-50 hover:text-slate-200 
                    hover:shadow-none active:text-slate-50 color-btn active:shadow-none border-none mx-4 py-2 rounded-lg 
                    shadow-lg'
                >
                    CHECKOUT
                </Link>
            </div>

        </div>
    )
}