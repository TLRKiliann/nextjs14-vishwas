import type { CartProps } from '@/app/lib/definitions';
import React from 'react'
import CartDisplay from '@/app/ui/cart/cart-display';

export default async function CartItems({order}: {order: CartProps[]}) {
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
                <p className='text-lg text-center text-slate-500 dark:text-sky-600 mb-2'>
                    Add product to cart
                </p>
            )}

        </div>
    )
}
