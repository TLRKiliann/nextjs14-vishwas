"use client";

import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import { toast } from 'react-toastify';
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

    const handleDelete = (id: number, name: string, price: number, img: string, stock: number): void => {
        decreaseCartQuantity(id, name, price, img, stock);
        decrement();
    };

    const handleAdd = (id: number, name: string, price: number, img: string, stock: number): void => {
        increaseCartQuantity(id, name, price, img, stock);
        increment();
    };

    return (
        <div key={id} className='w-[200px] h-auto bg-slate-100 border border-slate-300
        
        transform transition translate-y-0 animate-down-start last:translate-y-0 last:animate-up-start 
        first:translate-x-0 first:animate-right-start'
        
        >
            <Image src={img} width={435} height={580} alt="img truck" 
                className='object-cover' />

            <div className='text-slate-600 px-2 pt-2'>
                <p className='text-md font-bold'>{name}</p>
                <div className='flex items-center justify-between text-sm'>
                    <p>Price:</p>
                    <p className='text-sm'>{price}.-</p>
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
            </div>

            <p className='text-center text-lg font-normal text-slate-500/80 m-auto p-1'>
                <span className={`font-bold ${quantity === 0 ? "text-slate-500/80" : "text-red-500/80" }`}>
                    {quantity}&nbsp;
                </span>
                in cart
            </p>

            <form action={formAction}>

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

                    {stock - quantity !== 0 ? (
                        <button type="submit" id="sumbit" name="submit" value="addTruck"
                            onClick={() => handleAdd(id, name, price, img, stock)} 
                            disabled={pending}
                            className='button-card'
                            >
                            {pending ? "Pending..." : "+"}
                        </button>
                        ) : null
                    }

                </div>
                {(code?.message === "Inserted to cart !") && (quantity !== 0) ? (
                    <p className='message-cart-green mt-2'>{code.message}</p>
                ) : (code?.message === "Deleted from cart") && (quantity !== 0) ? (
                    <p className='message-cart mt-2'>{code.message}</p>
                ) : null }
            </form>

            <BtnRemoveAll id={id} notifyRemoveAll={notifyRemoveAll} />

        </div>
    )
}
