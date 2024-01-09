import React from 'react'
import CartDisplay from '@/app/ui/cart/cart-display';
import { CartProps } from '@/app/lib/definitions';

export default async function CartItems({order}: {order: CartProps[]}) {
    return (
        <div className='flex flex-col items-center justify-center'>

            {order.length !== 0 ? order.map((item: CartProps) => (
                <CartDisplay key={item.id} {...item} />
                )) : (
                <p className='text-center text-slate-600'>
                    Add product to cart
                </p>
            )}

        </div>
    )
}
