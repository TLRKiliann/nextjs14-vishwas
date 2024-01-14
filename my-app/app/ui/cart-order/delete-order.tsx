"use client";

import type { CartProps } from "@/app/lib/definitions";
import React from 'react'
import Image from 'next/image';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteOrder } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function DeleteOrder({order}: {order: CartProps[]}) {

    const { removeFromCart } = useShoppingCart();

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(deleteOrder, undefined);

    const handleDeleteCount = (id: number) => {
        removeFromCart(id);
    };

    return (
        <div className='w-full mt-[100px]'>
            {order.map((ord: CartProps) => {
                if (ord.count !== 0) {
                    return (
                        <form
                            key={ord.id}
                            action={formAction}
                            className='flex items-center justify-between w-full h-16 text-slate-600 
                            dark:text-slate-300 bg-slate-200 dark:bg-slate-700 my-2 rounded'>
                            
                            <div className='w-1/5 h-auto text-center ml-2'>
                                <Image src={ord.img} width={40} height={40} alt="img deleteorder" 
                                    className="object-cover w-[40px] h-[40px]" />
                            </div>
    
                            <div className='w-2/5 m-auto'>
                                <p className='text-center'>{ord.name}</p>
                            </div>

                            <p className='w-1/5 text-center m-auto'>{ord.price.toFixed(2)}.-</p>
                            <p className='w-1/5 text-center m-auto'>{ord.count}</p>
                            
                            <input type="number" id="id" name="id" value={ord.id} hidden readOnly />

                            <button type="submit" id="submit" name="submit" value="deleteorder"
                                onClick={() => handleDeleteCount(ord.id)}
                                disabled={pending}
                                className='text-slate-50 font-bold bg-red-500 hover:bg-red-500/80 
                                hover:shadow-none active:text-slate-50 active:bg-red-400 m-2 px-4 py-1
                                rounded shadow-lg'>
                                {pending ? "Pending..." : "Remove"}
                            </button>
                        </form>
                    )
                }
            })}
            {code?.message ? (
                <p className='text-center text-orange-400 mt-2'>{code.message}</p>
            ) : null}
        </div>
    )
}
