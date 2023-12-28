"use client";

import React from 'react'
import { CartItem } from "@/app/lib/definitions";

import { useFormState, useFormStatus } from 'react-dom';
import { deleteOrder } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function DeleteForm({cartItems}: {cartItems: CartItem[]}) {

    const { removeFromCart } = useShoppingCart();

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(deleteOrder, undefined);
    const initialCount: number = 0;

    const handleDeleteCount = (id: number) => {
        removeFromCart(id);
    }

    return (
        <div className='w-full flex flex-col items-center rounded mt-20'>
            {cartItems.map((ord: CartItem) => {
                if (ord.quantity !== 0) {
                    return (
                        <form
                            key={ord.id}
                            action={formAction}
                            className='flex items-center justify-evenly w-full h-10 bg-slate-700 
                                m-auto rounded'>
                            
                            <p className='text-center ml-2'>{ord.id}</p>
    
                            <div className='m-auto'>
                                <p className='text-center'>{ord.deckname}</p>
                            </div>

                            <p className='text-center m-auto'>{ord.price.toFixed(2)}.-</p>
                            <p className='text-center m-auto'>{ord.quantity}</p>

                            <input type="number" id="id" name="id" value={ord.id} hidden readOnly />
                            <input type="text" id="deckname" name="deckname" value={ord.deckname} hidden readOnly />
                            <input type="number" id="price" name="price" value={initialCount} hidden readOnly />
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
                <p className='text-orange-400 mt-2'>{code.message}</p>
            ) : null}
        </div>
    )
}
