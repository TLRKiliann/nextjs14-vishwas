import React from 'react'
import { useShoppingCart } from '@/app/context/cart-context';
import CartDisplay from '@/app/ui/cart/cart-display';

export default function CartItems() {
    
    const { cartItems } = useShoppingCart();

    return (
        <div className='m-auto'>

            {cartItems.length !== 0 ? cartItems.map((item) => (
                <CartDisplay key={item.id} {...item} />
                )) : (
                <p className='text-center text-slate-600'>
                    Add product to cart
                </p>
            )}
            
        </div>
    )
}
