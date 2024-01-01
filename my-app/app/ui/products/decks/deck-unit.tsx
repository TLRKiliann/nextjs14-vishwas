"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { queryDecksCart } from '@/app/lib/actions';
import { DecksProps } from '@/app/lib/definitions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function DeckUnit({id, deckname, img, price, stock}: DecksProps) {

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
        <div key={id} className='flex justify-start w-2/5 text-md'>

            <form action={formAction} className='w-[200px] flex flex-col bg-slate-100
                transform transition translate-y-0 animate-up-start rounded-tr-xl rounded-br-xl'
            >
                {/* secondary-dark-bg-gradient secondary-light-bg-gradient */}
                <div className='w-[200px] h-auto'>
                    <Image
                        src={img}
                        width={500}
                        height={500}
                        alt="img product" 
                        className='object-cover rounded-tr-lg rounded-tl-lg'
                    />
                </div>

                <h3 className='text-lg text-gray-500 font-bold pt-2 pl-2'>
                    {deckname.toUpperCase()}
                </h3>

                <p className='text-md text-slate-600/80 px-2 pt-0'>
                    {price.toFixed(2)}.- CHF
                </p>
                
                <p className='text-sm text-slate-600/80 px-2 pt-3'>
                    {stock >= quantity 
                        ? "Stock: " + (stock - quantity) + "pcs"
                        : (
                            <span className='text-red-500'>
                                No more in stock
                            </span>
                        )
                    }    
                </p>

                <p className='text-sm text-slate-600/80 px-2'>
                    Quantity: {quantity}
                </p>
                
                <details className="px-2 py-1 pt-6">
                    <summary className="text-xs text-slate-600/80 hover:cursor-pointer">
                        Video
                    </summary>
                    <Link href="#" className="text-sm text-blue-500 hover:text-blue-600 px-3">
                        https://www.{deckname}.link
                    </Link>
                </details>

                <input type="number" id="id" name="id" value={id} hidden readOnly />
                <input type="text" id="deckname" name="deckname" value={deckname} hidden readOnly />
                <input type="number" id="price" name="price" value={price} hidden readOnly />
                <input type="number" id="count" name="count" value={quantity} hidden readOnly />

                <div className='flex items-end w-full h-full'>

                    <div className='w-full flex items-center justify-between my-2 px-2'>
                        
                        <button
                            type="submit"
                            id="submit"
                            name="submit"
                            value="remove"
                            disabled={pending}
                            onClick={() => handleRemoveFromCart(id, deckname, price, img, stock)}
                            className='button-card'>
                                { pending ? "pending..." : "Sub" }
                        </button>

                        {(quantity !== 0) || (stock >= 0) ? (
                            <button 
                                type="submit"
                                id="submit"
                                name="submit"
                                value="order"
                                disabled={pending}
                                onClick={() => handleAddToCart(id, deckname, price, img, stock)}
                                className='button-card'>
                                { pending ? "pending..." : "Add" }
                            </button>
                            ) : null
                        }

                    </div>

                </div>

                {code?.message ? (
                        <p className='text-center text-orange-500'>{code.message}</p>
                    ) : null}

            </form>
        </div>
    )
}
