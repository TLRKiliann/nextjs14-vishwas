import React from 'react';
import Image from 'next/image';
import { useShoppingCart } from '@/app/context/cart-context'; 

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
        <div key={id} className='flex items-center justify-around mt-0 mb-4'>

            <div className='m-auto ml-4'>
                <Image src={img} width={100} height={100} alt="no img" className='rounded-lg shadow-lg' />
            </div>

            <div className='flex-1 items-center m-auto mr-4 ml-4 pl-4 pr-2'>

                <p className='text-xl font-bold text-slate-600 mb-0'>
                    {deckname.toUpperCase()} 
                </p>

                <p className='text-lg text-slate-600 mb-0'>
                    Price: {price.toFixed(2)}.- CHF
                </p>

                <p className='text-md text-slate-600 mb-0'>
                    Quantity: x{quantity}
                </p>

                <div className='flex items-center justify-between'>

                    <p className='text-md text-slate-600'>
                        stock: {stock}
                    </p>

                    <button
                        onClick={() => removeFromCart(id)}
                        className='text-slate-200 font-bold bg-red-500 hover:bg-red-500/80 hover:shadow-none
                            active:text-slate-50 active:bg-red-400 px-2 py-1 rounded shadow-md'
                    >
                        Remove
                    </button>

                </div>

            </div>
        </div>
    )
}
