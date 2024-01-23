import type { CartProps } from '@/app/lib/definitions';
import React from 'react'
import CartDisplay from '@/app/ui/cart/cart-display';
import Link from 'next/link';

export default function CartItems({order}: {order: CartProps[]}) {
    return (
        <div className='flex flex-col items-center justify-center'>

            {order.length !== 0 ? order.map((item: CartProps) => (
                <CartDisplay 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    price={item.price}
                    count={item.count}
                    stock={item.stock}
                    img={item.img}
                />
                )) : (
                <Link href="/products"
                     className='text-lg text-center text-violet-500 hover:text-violet-600 
                     active:text-violet-400 dark:text-sky-500 dark:hover:text-sky-400 
                     dark:active:text-sky-600 mb-2'>
                    Add product to cart
                </Link>
            )}

        </div>
    )
}
