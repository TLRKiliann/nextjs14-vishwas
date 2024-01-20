"use client";

import type { ConfirmationProps } from '@/app/lib/definitions';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { confirmationPayment } from '@/app/lib/actions';

export default function ValidatePayment({data}: {data: ConfirmationProps[]}) {

    const { pending } = useFormStatus();
    const [code, formData] = useFormState(confirmationPayment, undefined);

    const total: number = data[0].filterTotal;
    
    return (
        <>
            <form action={formData} className='flex w-full my-20 border'>

                <input type="text" id="user" name="user" value={data[0].user} hidden readOnly />
                <input type="text" id="address" name="address" value={data[0].address} hidden readOnly />
                <input type="number" id="npa" name="npa" value={data[0].npa} hidden readOnly />
                <input type="number" id="phone" name="phone" value={data[0].phone} hidden readOnly />
                <input type="text" id="email" name="email" value={data[0].email} hidden readOnly />
                <input type="text" id="name" name="name" value={data[0].name} hidden readOnly />
                <input type="number" id="price" name="price" value={data[0].price} hidden readOnly />
                <input type="number" id="quantity" name="quantity" value={data[0].count} hidden readOnly />
                <input type="text" id="img" name="img" value={data[0].img} hidden readOnly />
                <input type="number" id="total" name="total" value={total} hidden readOnly />

                <button type="submit" id="submit" name="submit" value="btnConfirmation" disabled={pending}
                    className="w-full font-bold text-center text-slate-50 bg-sky-700/80
                    hover:text-slate-200 hover:bg-sky-700/90 hover:shadow-none
                    active:text-slate-50 active:bg-sky-700/70 active:scale-95 active:shadow-none
                    border-none mx-4 py-2 rounded-lg shadow-md">
                    {pending ? "Pending..." : "Validate Payment"}
                </button>

            </form>
            {code?.message ? (
                <p className="w-full text-center border">
                    {code.message}
                </p>
            ) : null}
        </>
    )
}

