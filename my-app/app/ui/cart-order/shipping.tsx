"use client";

import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { shippingRequest } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const dynamic = "force-dynamic";

export default function Shipping({filterTotal}: {filterTotal: number}) {

    const { pending } = useFormStatus();
    const [code, formAction] = useFormState(shippingRequest, undefined);

    const { removeAllFromCart } = useShoppingCart();
    
    const validateToastShipping = () => toast.success("Added to cart !", {
        autoClose: 2000,
        position: 'bottom-center'
    });
    
    const resetCall = (): void => {
        if (typeof window !== "undefined") {
            const timer = setTimeout(() => {
                document.getElementById("resetShipping")?.click();
            }, 1000)
        }
    };

    const handleDeleteAllItem = (): void => {
        removeAllFromCart();
        validateToastShipping();
        resetCall();
        console.log("shipping done");
    };

    return (
        <form action={formAction} className='flex flex-col px-8'>
        
            <input type="email" id="email" name="email" placeholder="Email" required
                className='text-lg w-full bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600
                    dark:placeholder:text-slate-400
                    my-3 px-2 py-2' />
                
            <input type="text" id="user" name="user" placeholder="Username" required
                className='text-lg w-full bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600
                    dark:placeholder:text-slate-400
                    my-3 px-2 py-2' />
                
            <div className='flex items-center justify-between'>
                <input type="text" id="address" name="address" placeholder="Address" required
                    className='text-lg w-3/5 bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600
                    dark:placeholder:text-slate-400
                    my-3 mr-2 px-2 py-2' />
                
                <input type="number" id="npa" name="npa" placeholder="Postal Code" required
                    className='text-lg w-2/5 bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600
                    dark:placeholder:text-slate-400
                    my-3 ml-2 px-2 py-2' />
            </div>

            <input type="string" id="phone" name="phone" placeholder="Phone" required
                className='text-lg w-full bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600
                    dark:placeholder:text-slate-400
                    my-3 px-2 py-2' />
                
            <input type="password" id="passwd" name='passwd' placeholder="Password" 
                className='text-lg w-full bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                    focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600
                    dark:placeholder:text-slate-400
                    my-3 mb-6 px-2 py-2' />

            <input type="number" id="filterTotal" name="filterTotal" value={Number(filterTotal).toFixed(2)} 
                hidden readOnly />

            <input type="reset" id="resetShipping" hidden />

            <button type="submit" id="submit" name="submit" value="shipping" 
                onClick={handleDeleteAllItem}
                disabled={pending}
                className='w-ful text-xl font-bold text-slate-50 bg-blue-600 hover:bg-blue-700 
                active:bg-blue-500 mb-6 py-2 rounded'
            >
                {pending ? "Pending..." : "Order"}
            </button>
            
            {code?.message ? (
                <p className='text-center text-green-400'>{code.message}</p>
            ) : null}

        </form>
    )
}
