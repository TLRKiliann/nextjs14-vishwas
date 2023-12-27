"use client";

import React from 'react'
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { queryDecksCart } from '@/app/lib/actions';
import { DecksProps } from '@/app/lib/definitions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function DeckForm({id, deckname, img, price, stock}: DecksProps) {

    const { pending } = useFormStatus();
    const [ code, formAction ] = useFormState(queryDecksCart, undefined)

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        //removeFromCart
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    const handleAddToCart = (id: number, deckname: string, price: number, img: string, stock: number) => {
        increaseCartQuantity(id, deckname, price, img, stock);
    };
  
    const handleRemoveFromCart = (id: number, deckname: string, price: number, img: string, stock: number) => {
        decreaseCartQuantity(id, deckname, price, img, stock);
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
                <p className='text-sm text-slate-600 px-2'>
                    {quantity === 0 ? price.toFixed(2) : quantity}.- CHF</p>
                <p className='text-sm text-slate-600 px-2'>
                    {stock >= quantity 
                        ? "Stock: " + (stock - quantity) + "pcs"
                        : (
                            <span className='text-red-500'>
                                No more in stock
                            </span>
                        )
                    }    
                </p>

                <input type="number" id="id" name="id" value={id} hidden readOnly />
                <input type="text" id="deckname" name="deckname" value={deckname} hidden readOnly />
                <input type="number" id="price" name="price" value={price} hidden readOnly />
                <input type="number" id="count" name="count" value={quantity} hidden readOnly />

                <p className='text-sm text-slate-600 px-2'>Quantity: {quantity}</p>

                <div className='flex items-center justify-between my-2 border px-2'>
                    
                    <button
                        type="submit"
                        id="submit"
                        name="submit"
                        value="remove"
                        onClick={() => handleRemoveFromCart(id, deckname, price, img, stock)}
                        className='text-sm text-slate-100 bg-slate-500 px-3 py-1 rounded'>
                            { pending ? "pending..." : "Delete" }
                    </button>

                    {(quantity !== 0) || (stock >= 0) ? (
                        <button 
                            type="submit"
                            id="submit"
                            name="submit"
                            value="order"
                            onClick={() => handleAddToCart(id, deckname, price, img, stock)}
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
