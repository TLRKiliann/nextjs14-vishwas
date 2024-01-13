"use client";

import type { WheelsProps } from '@/app/lib/definitions';
import { formatCurrency } from '@/app/lib/utils';
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
        <div key={id} className='w-[200px] h-auto cursor-pointer border'>
            <Image src={img} width={435} height={580} alt="img wheelUnit"
                className='object-cover' />
            <div className='text-slate-600/80 bg-slate-50 p-2 border'>
                <h3 className='text-sm font-bold'>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </h3>
                <h4 className='text-sm font-bold'>{price}.-</h4>
                <p className='text-sm mt-2'>Stock: {stock - quantity}pcs</p>
                
                <div className='flex justify-center items-center pb-2'>
                    <span className={`text-md font-bold ${quantity === 0 ? "text-slate-500/80" : "text-red-500/80" }`}>
                        {quantity}&nbsp;
                    </span>
                    <p className='text-md font-normal text-slate-500/80'>
                        in cart
                    </p>
                </div>

                <form action={formAction} className="flex justify-between px-4 py-2 pt-4 bg-slate-100/80">

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
                    <p className='text-center text-orange-500'>{code.message}</p>
                ) : null}
            </div>
        </div>
    )
}
