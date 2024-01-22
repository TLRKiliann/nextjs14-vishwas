"use client";

import React, { useState } from 'react'
import { useShoppingCart } from '@/app/context/cart-context';
import { useFormState, useFormStatus } from 'react-dom';
import { resetById } from '@/app/lib/actions';

export const dynamic = "force-dynamic";

export default function RemoveAllByIdDeck({id}: {id: number}) {

    const { pending } = useFormStatus();
    const [state, formData] = useFormState(resetById, undefined);


    const [removeById, setRemoveById] = useState<boolean>(false);

    const { removeFromCart } = useShoppingCart();

    const handleRemove = (id: number): void => {
        setRemoveById(true);
        removeFromCart(id);
    };

    if (removeById === true) {
        const timer = setTimeout(() => {
            setRemoveById(false);
            console.log(timer)
        }, 2000);
    };

    return (
        <form action={formData} className='flex bg-slate-100 flex-col items-center w-full'>

            <input type="number" id="id" name="id" value={id} hidden readOnly />

            <button type="submit" id="submit" name="submit" value="removeAllById" 
                disabled={pending} onClick={() => handleRemove(id)} className='w-5/6 button-card'
            >
                {pending ? "Pending..." : "Remove"}
            </button>
            {state?.message && removeById === true ? (
                <p className='w-full message-cart mt-2'>{state.message}</p>
            ) : null}
        </form>
    )
}
