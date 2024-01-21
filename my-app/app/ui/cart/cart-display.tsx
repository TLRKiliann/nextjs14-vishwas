"use client";

import type { CartProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteCartItem } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function Cart({id, name, price, count, stock, img}: CartProps) {
    
    const { removeFromCart } = useShoppingCart();

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(deleteCartItem, undefined);

    const handleDeleteItem = (id: number): void => {
        removeFromCart(id);
    };

    return (
        <div key={id} className='flex justify-start w-3/5 bg-slate-200 mx-4 mb-4 py-2 
            rounded shadow-md'>

            <div className='m-auto ml-3'>
                <Image src={img} width={120} height={120} alt="no img"
                    className='object-cover rounded-lg drop-shadow-fontlg' />
            </div>

            <div className='flex flex-col items-start w-2/5 ml-4'>

                <p className='text-xl font-bold text-slate-600 mb-0'>
                    {name.toUpperCase()} 
                </p>

                <p className='text-lg text-slate-600 mb-0'>
                    Price: {Number(price).toFixed(2)}.- CHF
                </p>

                <p className='text-md text-slate-600 mb-0'>
                    Quantity: x{count}
                </p>

                <p className='text-md text-slate-600'>
                    Stock: {stock}pcs
                </p>
            </div>

            <form action={formAction} className='flex items-end justify-end w-3/5 mr-3'>

                <input type="number" id="id" name="id" value={id} hidden readOnly />

                <button type="submit" id="submit" name="submit" value="deletecartorder"
                    onClick={() => handleDeleteItem(id)}
                    disabled={pending}
                    className='text-slate-50 font-bold bg-red-500 hover:bg-red-600 
                        hover:shadow-none active:text-slate-50 active:bg-orange-600 mb-0 px-4 py-1
                        rounded shadow-lg'
                >
                    {pending ? "Pending" : "Remove"}
                </button>
                {code?.message ? (
                    <p>{code.message}</p>
                ) : null}
            </form>

        </div>
    )
}

