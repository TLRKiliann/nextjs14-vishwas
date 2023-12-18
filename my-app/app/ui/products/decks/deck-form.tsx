"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { mysqlServerAction } from '@/app/lib/actions';
import { DecksProps } from '@/app/lib/definitions';

export default function DeckForm({id, deckname, img, price, stock}: DecksProps) {

    const [count, setCount] = useState<number>(0);

    const {pending} = useFormStatus();
    const [state, formAction] = useFormState(mysqlServerAction, undefined);

    const handleSub = () => {
        setCount(count => count - 1)
    };

    const handleAdd = () => {
        setCount(count => count + 1)
    };

    return (
        <div key={id} className='flex justify-center w-full h-auto text-md'>

            <form action={formAction} className='flex flex-col bg-slate-100
                transform transition translate-y-0 animate-up-start rounded-lg shadow-md'
            >
                {/* secondary-dark-bg-gradient secondary-light-bg-gradient */}
                <Image
                    src={img}
                    width={200}
                    height={200}
                    alt="img product" 
                    className='m-auto rounded-tr-lg rounded-tl-lg'
                />
                <p className='text-lg text-gray-500 font-bold pt-2 pl-2'>{deckname}</p>
                <p className='text-sm text-slate-600 px-2'>{price.toFixed(2)}.- CHF</p>
                <p className='text-sm text-slate-600 px-2'>{stock} pcs</p>

                <input type="number" id={id.toString()} name={id.toString()} hidden />
                <input type="text" id={deckname} name={deckname} hidden />
                <input type="text" id={img} name={img} hidden />
                <input type="number" id={price.toString()} name={price.toString()} hidden />
                <input type="number" id={count.toString()} name={count.toString()} hidden />

                <div>
                    <button type="button" onClick={handleSub}>
                        Sub
                    </button>
                    <button type="button" onClick={handleAdd}>
                        Add
                    </button>
                </div>

                <div className='w-full flex justify-end'>
                    <button type="submit" className='text-sm text-slate-100 bg-slate-600 
                        m-2 px-3 py-1 rounded' value="order"
                    >
                        {pending ? "pending..." : "Add to Cart" }
                    </button>
                </div>
                {state?.message ? (
                    <p>{state.message}</p>
                ) : null}
            </form>
        </div>
    )
}
