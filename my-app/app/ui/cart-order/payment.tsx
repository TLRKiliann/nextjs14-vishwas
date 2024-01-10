"use client";

import React, { useState } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import { paymentRequest } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function Payment() {

    const [checking, setchecking] = useState<boolean>(false);
    
    const handleCheck = (): void => {
        setchecking((old) => !old);
        console.log("checked");
    };

    const { pending } = useFormStatus();
    const [status, formData] = useFormState(paymentRequest, undefined);
  

    const { removeFromCart } = useShoppingCart();
    

    const handleDeleteAllItem = (): void => {
        //removeFromCart(id);
        // empty cart ???
        console.log("payment done");
    };

    return (
        <>
            <form action={formData} className='flex flex-col px-8'>
        
                <input type="text" id="username" name="username" placeholder="Card number" required
                    className='text-lg w-full bg-slate-700 rounded focus:outline 
                        focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
                
                <input type="text" id="date" name="date" placeholder="Expiration date" required
                    className='text-lg w-full bg-slate-700 rounded focus:outline 
                        focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
                    
                <input type="number" id="securitycode" name="securitycode" placeholder="Security code" required
                    className='text-lg w-full bg-slate-700 rounded focus:outline 
                        focus:outline-blue-600 focus:border focus:border-blue-600 mt-3 px-2 py-2' />
                    
                
                <div className="flex items-center justify-start py-6">
                    <input type="checkbox" id="checkcard" name="checkcard" 
                        checked={checking} onChange={handleCheck}
                        className='text-lg bg-slate-700 mr-3'
                    />
                    <p>Use shipping address as billing address</p>
                </div>


                <button type="submit" id="submit" name="submit" value="payment" 
                    onClick={handleDeleteAllItem}
                    disabled={pending}
                    className='w-ful text-xl font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-500 
                        mb-6 py-2 rounded'
                >
                    {pending ? "Pending..." : "Payment"}
                </button>

            </form>

            {status?.message ? (
                <p>{status.message}</p>
            ) : null}
        </>
    )
}
