"use client";

import { useShoppingCart } from '@/app/context/cart-context';
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { deleteWheels } from '@/app/lib/actions';

export default function BtnRemoveAll({id}: {id: number}) {

    const { pending } = useFormStatus();
    const [state, formData] = useFormState(deleteWheels, undefined);

    const { removeFromCart } = useShoppingCart();

    const handleRemove = (id: number): void => {
        removeFromCart(id);
    };

    return (
        <form action={formData} className='flex flex-col items-center'>

            <input type="number" id="id" name="id" value={id} hidden readOnly />

            <button type="submit" id="submit" name="submit" value="removeAllByIdWheel" 
                disabled={pending} onClick={() => handleRemove(id)} className='button-card'
            >
                {pending ? "Pending..." : "Remove"}
            </button>
            {state?.message ? (
                <p className='w-full message-cart mt-2'>{state.message}</p>
            ) : null}
        </form>
    )
}
