"use client";

import React from 'react';
import Image from 'next/image';

type ItemProps = {
    id: number;
    img: string
    deckname: string;
    price: number;
    stock: number;
    quantity: number;
}

export default function CartItem({id, deckname, img, price, stock, quantity}: ItemProps) {

    return (
        <div key={id} className='flex items-center justify-around mt-0 mb-4'>

            <div className='m-auto ml-4'>
                <Image src={img} width={100} height={100} alt="no img" className='rounded-lg drop-shadow-lg' />
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

                <p className='text-md text-slate-600'>
                    stock: {stock - quantity}
                </p>
                
            </div>
            
        </div>
    )
}
