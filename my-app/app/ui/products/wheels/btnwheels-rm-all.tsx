"use client";

import { useShoppingCart } from '@/app/context/cart-context';
import React, { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { resetById } from '@/app/lib/actions';

export default function BtnRemoveAll({id, notifyRemoveAll}: {id: number, notifyRemoveAll: () => void}) {

    const { pending } = useFormStatus();
    const [code, formData] = useFormState(resetById, undefined);
    
    const [removeById, setRemoveById] = useState<boolean>(false);

    const { removeFromCart } = useShoppingCart();

    const handleRemove = (id: number): void => {
        setRemoveById(true);
        removeFromCart(id);
        notifyRemoveAll();
    };

    if (removeById === true) {
        setTimeout(() => {
            setRemoveById(false);
        }, 2000);
    };

    return (
        <form action={formData} className='flex flex-col items-center'>

            <input type="number" id="id" name="id" value={id} hidden readOnly />

            <button type="submit" id="submit" name="submit" value="removeAllById" 
                disabled={pending} onClick={() => handleRemove(id)} className='button-card'
            >
                {pending ? "Pending..." : "Remove"}
            </button>
            {code?.message && (removeById === true) ? (
                <p className='w-full message-cart mt-2'>{code.message}</p>
            ) : null}
        </form>
    )
}
