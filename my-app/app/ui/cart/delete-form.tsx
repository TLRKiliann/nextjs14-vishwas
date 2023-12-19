import React from 'react'
import { CartProps } from '@/app/lib/definitions';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteCartItem } from '@/app/lib/actions';

export default function DeleteForm({order}: {order: CartProps[]}) {

    const {pending} = useFormStatus();
    const [state, formAction] = useFormState(deleteCartItem, undefined);

    return (
        <div className='w-full border'>
            {order.map((ord: CartProps) => (
                <form key={ord.id} action={formAction} className='bg-slate-700'>
                    <p className='text-center'>{ord.id}</p>
                    <p className='text-center'>{ord.deckname}</p>
                    <p className='text-center'>{ord.totalprice.toFixed(2)}</p>
                    <p className='text-center'>{ord.count}</p>
                    <button type="submit">{pending ? "pending..." : "Delete"}</button>
                    {state?.message ? (
                        <p>{state.message}</p>
                    ) : null}
                </form>
                ))
            }
        </div>
    )
}
