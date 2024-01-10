"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { shippingRequest } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function Shipping() {

    const router = useRouter();

    const { removeFromCart } = useShoppingCart();

    const { pending } = useFormStatus();
    const [code, formAction] = useFormState(shippingRequest, undefined);

    const handleDeleteAllItem = () => {
        //removeFromCar
        // empty cart ???
        router.push("/"); 
    };

    return (
        <form action={formAction} className='flex flex-col px-8'>
        
            <input type="email" id="email" name="email" placeholder="Email" required
                className='text-lg w-full bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
                
            <input type="text" id="user" name="user" placeholder="Username" required
                className='text-lg w-full bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
                
            <div className='flex items-center justify-between'>
            <input type="text" id="address" name="address" placeholder="Address" required
                className='text-lg w-3/5 bg-slate-700 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600 mr-2 my-3 px-2 py-2' />
            
            <input type="number" id="npa" name="npa" placeholder="Postal Code" required
                className='text-lg w-2/5 bg-slate-700 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600 ml-2 my-3 px-2 py-2' />
            </div>

            <input type="number" id="phone" name="phone" placeholder="Phone" required
                className='text-lg w-full bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
                
            <input type="password" id="passwd" name='passwd' placeholder="Password" 
                className='text-lg w-full bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 my-3 mb-6 px-2 py-2' />

            <button type="submit" id="submit" name="submit" value="shipping" 
                onClick={handleDeleteAllItem}
                disabled={pending}
                className='w-ful text-xl font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-500 
                mb-6 py-2 rounded'
            >
                {pending ? "Pending..." : "Order"}
            </button>
            
            {code?.message ? (
                <p>{code.message}</p>
            ) : null}
        </form>
    )
}
