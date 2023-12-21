"use client";

import React, { useState } from 'react'
import { CartProps } from '@/app/lib/definitions';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteCartItem } from '@/app/lib/actions';
import { REMOVE_FROM_CART, useCart } from '@/app/context/cart-context';

export default function DeleteForm({order}: {order: CartProps[]}) {

    const { state, dispatch } = useCart();

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(deleteCartItem, undefined);
    const initialCount: number = 0;
    const [count, setCount] = useState<number>(state.items.length);

    const handleDeleteCount = (id: number) => {
        if (count === 0) {
            console.log("Nothing has changed");
        } else {
            dispatch({ type: REMOVE_FROM_CART, payload: { id } });
            setCount((count) => count - 1);
        }
    }

    return (
        <div className='w-full flex flex-col items-center m-auto rounded'>
            {order.map((ord: CartProps) => {
                if (ord.count !== 0) {
                    return (
                        <form
                            key={ord.id}
                            action={formAction}
                            className='flex items-center justify-evenly w-3/5 h-10 bg-slate-700 m-auto mb-2 rounded'>
                            
                            <p className='text-center ml-2'>{ord.id}</p>
    
                            <div className='w-[130px] m-auto'>
                                <p className='text-center'>{ord.deckname}</p>
                            </div>

                            <p className='text-center m-auto'>{ord.totalprice.toFixed(2)}.-</p>
                            <p className='text-center m-auto'>{ord.count}</p>

                            <input type="number" id="id" name="id" value={ord.id} hidden readOnly />
                            <input type="string" id="deckname" name="deckname" value={ord.deckname} hidden readOnly />
                            <input type="number" id="totalprice" name="totalprice" 
                                value={ord.totalprice.toFixed(2)} hidden readOnly />
                            <input type="number" id="count" name="count" value={initialCount} hidden readOnly />

                            <button type="submit" id="submit" name="submit" value="deleteorder"
                                onClick={() => handleDeleteCount(ord.id)}
                                className='text-sm font-bold text-red-400/80 bg-slate-800 
                                hover:text-red-400 hover:bg-slate-900 active:text-slate-100 
                                active:bg-red-400 mr-2 px-4 py-2 rounded'>
                                {pending ? "pending..." : "Delete"}
                            </button>
                        </form>
                    )
                }
            })}
            {code?.message ? (
                <p className='text-orange-400'>{code.message}</p>
            ) : null}
        </div>
    )
}
