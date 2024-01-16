"use client";

import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { useShoppingCart } from '@/app/context/cart-context';
import { queryTruckCart } from '@/app/lib/actions';
import BtnRemoveAll from './btntrucks-rm-all';

export default function TrucksCards({id, name, price, stock, img}: ProductsProps) {
    
    const { pending } = useFormStatus();
    const [code, formAction] = useFormState(queryTruckCart, undefined);

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    const handleDelete = (id: number, name: string, price: number, img: string, stock: number): void => {
        decreaseCartQuantity(id, name, price, img, stock);
    };

    const handleAdd = (id: number, name: string, price: number, img: string, stock: number): void => {
        increaseCartQuantity(id, name, price, img, stock);
    };

    return (
        <div key={id} className='w-[200px] h-auto border border-slate-300'>
            <Image src={img} width={435} height={580} alt="img truck" 
                className='object-cover' />

            <div className='text-slate-600 p-2'>
                <p className='text-sm font-bold'>{name}</p>
                <p className='text-sm'>{price}.-</p>
                <p className='text-sm'>Stock: {stock - quantity}pcs</p>
            </div>

            <p className='text-center text-lg font-normal text-slate-500/80 m-auto pt-2'>
                <span className={`font-bold ${quantity === 0 ? "text-slate-500/80" : "text-red-500/80" }`}>
                    {quantity}&nbsp;
                </span>
                in cart
            </p>

            <form action={formAction} className=''>

                <input type="number" id="id" name="id" value={id} hidden readOnly />
                <input type="text" id="name" name="name" value={name} hidden readOnly />
                <input type="number" id="price" name="price" value={price} hidden readOnly />
                <input type="number" id="count" name="count" value={quantity} hidden readOnly />
                <input type="number" id="stock" name="stock" value={stock} hidden readOnly />
                <input type="text" id="img" name="img" value={img} hidden readOnly />

                <div className='flex justify-between mx-2'>
                    <button type="submit" id="sumbit" name="submit" value="deleteTruck" 
                        onClick={() => handleDelete(id, name, price, img, stock)} 
                        disabled={pending}
                        className='button-card'
                    >
                        {pending ? "Pending..." : "-"}
                    </button>

                    <button type="submit" id="sumbit" name="submit" value="addTruck"
                        onClick={() => handleAdd(id, name, price, img, stock)} 
                        disabled={pending}
                        className='button-card'
                    >
                        {pending ? "Pending..." : "+"}
                    </button>

                </div>
                {code?.message ? (
                    <p className='message-cart'>{code.message}</p>
                ) : null }
            </form>

            <BtnRemoveAll id={id} />

        </div>
    )
}
