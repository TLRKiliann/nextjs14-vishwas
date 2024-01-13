"use client";

import type { WheelsProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { queryWheelsCart } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function WheelCardUnit({id, name, price, stock, img}: WheelsProps) {

    const { pending } = useFormStatus();
    const [code, formAction] = useFormState(queryWheelsCart, undefined)

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        //removeFromCart
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    const handleDelete = (id: number, name: string, price: number, img: string, stock: number) => {
        decreaseCartQuantity(id, name, price, img, stock);
    };

    const handleAdd = (id: number, name: string, price: number, img: string, stock: number) => {
        increaseCartQuantity(id, name, price, img, stock);
    };

    return (
        <div key={id} className='w-[300px] h-auto cursor-pointer'>
            <Image src={img} width={435} height={580} alt="img wheelUnit"
                className='object-cover rounded-tr-md rounded-tl-md' />
            <div className='text-slate-600/80 bg-slate-50 p-4 rounded-br-md rounded-bl-md'>
                <h3 className='text-lg font-bold'>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </h3>
                <h4 className='text-lg font-bold'>{price}.-</h4>
                <p className='text-sm mt-2'>Stock: {stock - quantity}pcs</p>
                
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

                    <button type="submit" id="submit" name="submit" value="addWheel"
                        onClick={() => handleAdd(id, name, price, img, stock)}
                        disabled={pending} className='button-card'>
                        {pending ? "Pending..." : "Add"}
                    </button>
                    
                </form>
                {code?.message ? (
                    <p className='message-cart'>
                        {code.message}
                    </p>
                ) : null}
            </div>
        </div>
    )
}
