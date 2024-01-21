"use client";

import React from 'react'
import { useShoppingCart } from '@/app/context/cart-context';
import { useFormState, useFormStatus } from 'react-dom';
import { resetById } from '@/app/lib/actions';

export default function RemoveAllByIdDeck({id}: {id: number}) {

    const { pending } = useFormStatus();
    const [state, formData] = useFormState(resetById, undefined);

    const { removeFromCart } = useShoppingCart();

    const handleRemove = (id: number): void => {
        removeFromCart(id);
    };

    return (
        <form action={formData} className='flex bg-slate-100 flex-col items-center w-full'>

            <input type="number" id="id" name="id" value={id} hidden readOnly />

            <button type="submit" id="submit" name="submit" value="removeAllById" 
                disabled={pending} onClick={() => handleRemove(id)} className='w-5/6 button-card'
            >
                {pending ? "Pending..." : "Remove"}
            </button>
            {state?.message ? (
                <p className='w-full message-cart mt-2'>{state.message}</p>
            ) : null}
        </form>
    )
}
