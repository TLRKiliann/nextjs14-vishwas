import React from 'react';
import Image from 'next/image';
import { useShoppingCart } from '@/app/context/cart-context'; 

type CartItemProps = {
    id: number;
    quantity: number;
}

type ItemProps = {
    id: number;
    img: string
    deckname: string;
    price: number;
    stock: number;
    quantity: number;
}

export default function CartItem({id, deckname, img, price, stock, quantity}: ItemProps) {

    const { removeFromCart } = useShoppingCart();

    return (
        <div key={id} className='flex items-center justify-around my-2'>

        <div className='border border-slate-900 m-auto ml-4'>
            <Image src={img} width={100} height={100} alt="no img" />
        </div>

        <div className='flex-1 items-center m-auto mr-4 border border-slate-900 ml-4'>
            <p className='text-xl font-bold text-slate-600 border 
                border-slate-900 mb-2'>
                {deckname.toUpperCase()} 
            </p>
            <p className='text-lg text-slate-600 border border-slate-900 mb-2'>
                Price: {price.toFixed(2)}.- CHF
            </p>

            <p className='text-lg text-slate-600 border border-slate-900 mb-2'>
                Quantity: {quantity}
            </p>

            <div className='flex items-center justify-between'>
                <p className='text-md text-slate-600 border border-slate-900'>
                    stock: {stock}
                </p>
                <span className='flex items-center justify-between
                    border border-slate-900'>


                    <button
                        onClick={() => removeFromCart(id)}
                        className='w-8 h-8 mx-4 text-slate-200 font-bold 
                            bg-red-500 border-none hover:text-slate-300 
                            hover:bg-red-600 active:text-slate-50 
                            active:bg-red-400 rounded-full'>
                            Remove
                    </button>

                </span>
            </div>
        </div>

    </div>
    )
}
