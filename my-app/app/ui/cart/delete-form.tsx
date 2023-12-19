"use client";

import React from 'react'
import { CartProps } from '@/app/lib/definitions';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteCartItem } from '@/app/lib/actions';

export default function DeleteForm({order}: {order: CartProps[]}) {

    const {pending} = useFormStatus();
    const [state, formAction] = useFormState(deleteCartItem, undefined);

    return (
        <div className='w-full flex flex-col items-center mt-20 rounded'>
            {order.map((ord: CartProps) => (
                <form key={ord.id} action={formAction}
                    className='flex items-center justify-between w-3/5 h-10 bg-slate-700 m-auto rounded'>
                    <input type="number" id="id" name="id" value={ord.id} hidden readOnly />
                    <p className='text-center ml-2'>{ord.id}</p>
                    <p className='text-center'>{ord.deckname}</p>
                    <p className='text-center'>{ord.totalprice.toFixed(2)}</p>
                    <p className='text-center'>{ord.count}</p>
                    <button type="submit" id="submit" name="submit" value="deleteorder"
                        className='bg-slate-900 mr-2 px-4 py-1 rounded'>
                        {pending ? "pending..." : "Delete"}
                    </button>
                </form>
                ))
            }
            {state?.message ? (
                <p className='text-orange-400'>{state.message}</p>
            ) : null}
        </div>
    )
}
