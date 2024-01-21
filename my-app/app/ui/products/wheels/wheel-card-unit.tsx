"use client";

import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { queryWheelsCart } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function WheelCardUnit({id, name, price, stock, img}: ProductsProps) {

    const { pending } = useFormStatus();
    const [code, formAction] = useFormState(queryWheelsCart, undefined);

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
    } = useShoppingCart();

    const quantity: number = getItemQuantity(id);

    const handleDelete = (id: number, name: string, price: number, img: string, stock: number): void => {
        decreaseCartQuantity(id, name, price, img, stock);
    };

    const handleAdd = (id: number, name: string, price: number, img: string, stock: number): void => {
        increaseCartQuantity(id, name, price, img, stock);
    };

    return (
        <div key={id} className='md:w-[200px] lg:w-[300px] h-auto transition transform translate-y-0 animate-up-start'>
            <Image src={img} width={435} height={580} alt="img wheelUnit"
                className='object-cover md:w-[200px] lg:w-[300px] h-auto rounded-tr-md rounded-tl-md' />
            <div className='text-slate-600/80 bg-slate-50 p-4 rounded-br-md rounded-bl-md'>
                <h3 className='text-lg font-bold'>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </h3>
                <div className='flex items-center justify-between text-sm font-bold'>
                    <p>Price:</p>
                    <p>{price}.-</p>
                </div>
                {stock - quantity === 0 ? (
                        <p className='warning-stock text-center'>No more in stock</p>
                    ) : (
                        <div className='flex items-center justify-between w-full text-sm'>
                            <p>Stock:</p> 
                            <p>{stock - quantity}pcs</p>
                        </div>
                    )
                }  
                
                <p className='text-center text-lg font-normal text-slate-500/80 m-auto pt-2'>
                    <span className={`font-bold ${quantity === 0 ? "text-slate-500/80" : "text-red-500/80" }`}>
                        {quantity}&nbsp;
                    </span>
                    in cart
                </p>

                <form action={formAction} className="flex justify-between py-2">

                    <input type="number" id="id" name="id" value={id} hidden readOnly />
                    <input type="text" id="name" name="name" value={name} hidden readOnly />
                    <input type="number" id="price" name="price" value={price} hidden readOnly />
                    <input type="number" id="count" name="count" value={quantity} hidden readOnly />
                    <input type="number" id="stock" name="stock" value={stock} hidden readOnly />
                    <input type="text" id="img" name="img" value={img} hidden readOnly />

                    <button type="submit" id="submit" name="submit" value="deleteWheel"
                        onClick={() => handleDelete(id, name, price, img, stock)}
                        disabled={pending} className='button-card'>
                        {pending ? "Pending..." : "Sub"}
                    </button>

                    {stock - quantity !== 0 ? (
                        <button type="submit" id="submit" name="submit" value="addWheel"
                            onClick={() => handleAdd(id, name, price, img, stock)}
                            disabled={pending} className='button-card'>
                            {pending ? "Pending..." : "Add"}
                        </button>
                    ) : null}
                    
                </form>
                {code?.message && quantity !== 0 ? (
                    <p className='message-cart'>
                        {code.message}
                    </p>
                ) : null}
            </div>
        </div>
    )
}
