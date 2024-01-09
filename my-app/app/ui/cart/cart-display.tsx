"use client";

import React from 'react';
// import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { useShoppingCart } from '@/app/context/cart-context';
import { deleteCartItem } from '@/app/lib/actions';
import { CartProps } from '@/app/lib/definitions';

// img a rajouter
export default function Cart({id, deckname, price, count}: CartProps) {
    
    const { removeFromCart } = useShoppingCart();

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(deleteCartItem, undefined);

    const handleDeleteItem = (id: number) => {
        removeFromCart(id);
    };

    return (
        <div key={id} className='flex items-center justify-around w-3/5 bg-slate-200 mx-4 mb-4 py-2 rounded 
            shadow-md'>

            {/*<div className='m-auto ml-4'>
                <Image src={img} width={100} height={100} alt="no img" className='rounded-lg drop-shadow-lg' />
            </div>*/}

            <div className='flex-1 items-center m-auto mr-4 ml-4 pl-4 pr-0'>

                <p className='text-xl font-bold text-slate-600 mb-0'>
                    {deckname.toUpperCase()} 
                </p>

                <p className='text-lg text-slate-600 mb-0'>
                    Price: {price.toFixed(2)}.- CHF
                </p>

                <p className='text-md text-slate-600 mb-0'>
                    Quantity: x{count}
                </p>

                <form action={formAction} className='flex items-center justify-between'>

                    <p className='text-md text-slate-600'>
                        Stock: {count}
                    </p>

                    <input type="number" id="id" name="id" value={id} hidden readOnly />

                    <button type="submit" id="submit" name="submit" value="deletecartorder"
                        onClick={() => handleDeleteItem(id)}
                        disabled={pending}
                        className='text-slate-50 font-bold bg-red-500 hover:bg-red-500/80 
                            hover:shadow-none active:text-slate-50 active:bg-red-400 mb-2 px-4 py-1
                            rounded shadow-lg'
                    >
                        {pending ? "Pending" : "Remove"}
                    </button>
                    {code?.message ? (
                        <p>{code.message}</p>
                    ) : null}
                </form>
                
            </div>
        </div>
    )
}

