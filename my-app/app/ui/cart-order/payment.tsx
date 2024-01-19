"use client";

import React, { useState } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import { paymentRequest } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export const dynamic = "force-dynamic";

export default function Payment({filterTotal}: {filterTotal: number}) {

    const [checking, setchecking] = useState<boolean>(false);

    const { pending } = useFormStatus();
    const [status, formData] = useFormState(paymentRequest, undefined);

    const { removeAllFromCart } = useShoppingCart();

    const handleCheck = (): void => {
        setchecking((old) => !old);
        console.log("checked");
    };

    const resetCall = (): void => {
        if (typeof window !== "undefined") {
            const timer = setTimeout(() => {
                document.getElementById("resetPayment")?.click();
            }, 1000)
        }
    };

    const handleDeleteAllItem = (): void => {
        removeAllFromCart();
        resetCall();
        console.log("payment done");
    };

    return (
        <form id="payment-form" action={formData} className='flex flex-col px-8'>
    
            <input type="text" id="user" name="user" placeholder="Card number" required
                className='text-lg w-full bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600
                dark:placeholder:text-slate-400
                my-3 px-2 py-2' />
            
            <input type="text" id="date" name="date" placeholder="Expiration date" required
                className='text-lg w-full bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600 
                dark:placeholder:text-slate-400
                my-3 px-2 py-2' />
                
            <input type="number" id="securitycode" name="securitycode" placeholder="Security code" required
                className='text-lg w-full bg-slate-200 dark:bg-slate-700 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600 placeholder:text-slate-600
                dark:placeholder:text-slate-400 mt-3 px-2 py-2' />
                
            <div className="flex items-center justify-start py-6">
                <input type="checkbox" id="checkcard" name="checkcard" checked={checking} onChange={handleCheck}
                    className='text-lg placeholder:text-slate-600 dark:placeholder:text-slate-400 
                    bg-slate-200 dark:bg-slate-700 mr-3'
                />
                <p className='text-slate-700 dark:text-slate-300'>
                    Use shipping address as billing address
                </p>
            </div>

            <input type="number" id="filterTotal" name="filterTotal" value={Number(filterTotal).toFixed(2)} 
                hidden readOnly />
            
            <input type="reset" id="resetPayment" hidden />
            
            <button type="submit" id="submit" name="submit" value="payment"
                onClick={handleDeleteAllItem}
                disabled={pending}
                className='w-ful text-xl font-bold text-slate-50 bg-blue-600 hover:bg-blue-700 
                    active:bg-blue-500 mb-6 py-2 rounded'
            >
                {pending ? "Pending..." : "Payment"}
            </button>

            {status?.message ? (
                <p className='text-center text-green-400'>{status.message}</p> 
            ) : null}

        </form>
    )
}
