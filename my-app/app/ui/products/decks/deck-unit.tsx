"use client";

import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import { toast } from 'react-toastify';
import Link from 'next/link';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { queryDecksCart } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';
import RemoveAllByIdDeck from './btn-remove-allByIdDeck';

export default function DeckUnit({id, name, img, price, stock}: ProductsProps) {

    const { pending } = useFormStatus();
    const [ code, formAction ] = useFormState(queryDecksCart, undefined)

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity
    } = useShoppingCart();

    const increment = () => toast.success("Added to cart !", {
        autoClose: 2000,
        position: 'bottom-center'
    });

    const decrement = () => toast.warning("Deleted from cart !", {
        autoClose: 2000,
        position: 'bottom-center'
    });

    const notifyRemoveAll = () => toast.error("All of this product removed !", {
        autoClose: 2000,
        position: 'bottom-center'
    });

    const quantity: number = getItemQuantity(id);
    const defineName = name.split(" ");

    const handleAddToCart = (id: number, name: string, price: number, img: string, stock: number): void => {
        increaseCartQuantity(id, name, price, img, stock);
        increment();
    };
  
    const handleRemoveFromCart = (id: number, name: string, price: number, img: string, stock: number): void => {
        decreaseCartQuantity(id, name, price, img, stock);
        decrement();
    };
    
    return (
        <div key={id} className='flex flex-col items-center justify-center w-full h-auto text-md
            transform transition translate-y-0 animate-up-start'>

            <Image
                src={img}
                width={500}
                height={500}
                alt="img product" 
                className='w-full h-auto object-cover rounded-tr-lg'
            />

            <div className='flex flex-col w-full h-auto bg-slate-100 px-4 py-2 xl:p-4'>

                <form action={formAction}>

                    <h3 className='text-lg text-gray-500 font-bold'>
                        {name.toUpperCase()}
                    </h3>

                    <p className='text-md text-slate-600/80 pt-0'>
                        {Number(price).toFixed(2)}.- CHF
                    </p>
                    
                    <p className='text-sm text-slate-600/80 pt-3'>
                        {stock - quantity === 0 ? <span className='warning-stock'>No more in stock</span> : 
                            "Stock: " + (stock - quantity) + "pcs"
                        }    
                    </p>

                    <p className='text-sm text-slate-600/80'>
                        Quantity: {quantity}
                    </p>
                    
                    <details className="py-1 pt-2">
                        <summary className="text-xs text-slate-600/80 hover:cursor-pointer">
                            Video
                        </summary>
                        <Link href={`/products/decks/${defineName[0]}/${id}/reviews/${id}`} className="text-sm text-blue-500 hover:text-blue-600 px-3">
                            Go to video
                        </Link>
                    </details>

                    <input type="number" id="id" name="id" value={id} hidden readOnly />
                    <input type="text" id="name" name="name" value={name} hidden readOnly />
                    <input type="number" id="price" name="price" value={price} hidden readOnly />
                    <input type="number" id="count" name="count" value={quantity} hidden readOnly />
                    <input type="number" id="stock" name="stock" value={stock} hidden readOnly />
                    <input type="text" id="img" name="img" value={img} hidden readOnly />

                    <div className='w-full h-full'>

                        <div className='w-full flex items-center justify-between my-2'>
                            
                            <button
                                type="submit"
                                id="submit"
                                name="submit"
                                value="decrease"
                                disabled={pending}
                                onClick={() => handleRemoveFromCart(id, name, price, img, stock)}
                                className='button-card'>
                                    { pending ? "pending..." : "Sub" }
                            </button>

                            {stock - quantity > 0 ? (
                                <button 
                                    type="submit"
                                    id="submit"
                                    name="submit"
                                    value="order"
                                    disabled={pending}
                                    onClick={() => handleAddToCart(id, name, price, img, stock)}
                                    className='button-card'>
                                    { pending ? "pending..." : "Add" }
                                </button>
                                ) : null
                            }

                        </div>
                        {(code?.message === "Inserted to cart !") && (quantity !== 0) ? (
                            <p className='message-cart-green my-2'>{code.message}</p>
                        ) : (code?.message === "Deleted from cart") && (quantity !== 0) ? (
                            <p className='message-cart my-2'>{code.message}</p>
                        ) : null }
                    </div>

                </form>

                <RemoveAllByIdDeck id={id} notifyRemoveAll={notifyRemoveAll} />

            </div>

        </div>
    )
}
