"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { queryDecksCart } from '@/app/lib/actions';
import { DecksProps } from '@/app/lib/definitions';

export default function DeckForm({id, deckname, img, price, stock}: DecksProps) {

    const [count, setCount] = useState<number>(0);
    const [totalPrice] = useState<number>(price);
    let newCount: number = count;

    const [stockItem] = useState(stock);

    const {pending} = useFormStatus();
    const [state, formAction] = useFormState(queryDecksCart, undefined);

    const handleSub = () => {
        console.log(id)
        if (count === 0) {
            console.log("Nothing has changed");
        }
        else {
            setCount((count) => count - 1);
        }
    };

    const handleAdd = () => {
        if (stock < count) {
            "Error: No more in stock";
        } else {
            setCount(count => count + 1)
        }
    };

    const total: string = (totalPrice * newCount).toFixed(2);
    console.log(typeof total, "total");

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
                <p className='text-sm text-slate-600 px-2'>
                    {count === 0 ? price.toFixed(2) : total}.- CHF</p>
                <p className='text-sm text-slate-600 px-2'>
                    {stock >= count 
                        ? "Stock: " + (stock - count) + "pcs"
                        : (
                            <span className='text-red-500'>
                                No more in stock
                            </span>
                        )
                    }    
                </p>

                <input type="number" id="id" name="id" value={id} readOnly />
                <input type="text" id="deckname" name="deckname" value={deckname} readOnly />
                <input type="string" id="total" name="total"
                    value={total} readOnly />
                <input type="number" id="count" name="count" 
                    value={count} readOnly />

                <p className='text-sm text-slate-600 px-2'>Count: {count}</p>

                <div className='flex items-center justify-between my-2 border px-2'>
                    <button type="button" onClick={handleSub} className='text-sm text-slate-100 
                        bg-slate-500 px-3 py-1 rounded'>
                        Sub
                    </button>
                    <button type="button" onClick={handleAdd} className='text-sm text-slate-100 
                        bg-slate-500 px-3 py-1 rounded'>
                        Add
                    </button>
                </div>

                {(count !== 0) || (stockItem >= 0) ? (
                    <div className='w-full flex justify-end pr-2 pb-2'>
                        <button type="submit" id="submit" name="submit" 
                            className='text-sm text-slate-100 bg-slate-500 px-3 py-1 rounded' 
                            value="order"
                        >
                            {pending ? "pending..." : "Add to Cart" }
                        </button>
                    </div>
                ) : null}
                {state?.message ? (
                    <p>{state.message}</p>
                ) : null}
            </form>
        </div>
    )
}