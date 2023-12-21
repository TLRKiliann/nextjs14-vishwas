"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { queryDecksCart } from '@/app/lib/actions';
import { DecksProps } from '@/app/lib/definitions';
import { ADD_TO_CART, REMOVE_FROM_CART, useCart } from '@/app/context/cart-context';

export default function DeckForm({id, deckname, img, price, stock}: DecksProps) {

    const { state, dispatch } = useCart();

    const [count, setCount] = useState<number>(state.items.length);
    const [totalPrice] = useState<number>(price);
    let newCount: number = count;

    const [stockItem] = useState(stock);

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(queryDecksCart, undefined);

    const handleSub = () => {
        console.log(id)
        if (count === 0) {
            console.log("Nothing has changed");
        }
        else {
            dispatch({ type: REMOVE_FROM_CART, payload: { id } });
            setCount((count) => count - 1);
        }
    };

    const handleAdd = () => {
        if (stock < count) {
            "Error: No more in stock";
        } else {
            dispatch({ type: ADD_TO_CART, payload: { id, deckname, price, img, stock } });
            setCount(count => count + 1)
        }
    };

    const total: string = (totalPrice * newCount).toFixed(2);
    //console.log(typeof total, "total");

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

                <input type="number" id="id" name="id" value={id} hidden readOnly />
                <input type="text" id="deckname" name="deckname" value={deckname} hidden readOnly />
                <input type="string" id="total" name="total" value={total} hidden readOnly />
                <input type="number" id="count" name="count" value={count} hidden readOnly />

                <p className='text-sm text-slate-600 px-2'>Count: {count}</p>

                <div className='flex items-center justify-between my-2 border px-2'>
                    
                    <button
                        type="submit"
                        id="submit"
                        name="submit"
                        value="remove"
                        onClick={handleSub}
                        className='text-sm text-slate-100 bg-slate-500 px-3 py-1 rounded'>
                            { pending ? "pending..." : "Delete" }
                    </button>

                    {(count !== 0) || (stockItem >= 0) ? (
                        <button 
                            type="submit"
                            id="submit"
                            name="submit"
                            value="order"
                            onClick={handleAdd}
                            className='text-sm text-slate-100 bg-slate-500 px-3 py-1 rounded'>
                            { pending ? "pending..." : "Add" }
                        </button>
                        ) : null
                    }

                </div>
                {code?.message ? (
                    <p className='text-center text-orange-500'>{code.message}</p>
                ) : null}
            </form>
        </div>
    )
}
