"use client";

import type { ConfirmationProps } from '@/app/lib/definitions';
import { useFormState, useFormStatus } from 'react-dom';
import { confirmationPayment } from '@/app/lib/actions';
import React from 'react'

export default function ValidatePayment({data}: {data: ConfirmationProps[]}) {

    const { pending } = useFormStatus();
    const [code, formData] = useFormState(confirmationPayment, undefined);
    
    return (
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
            <input type="number" id="total" name="total" value={data[0].filterTotal} hidden readOnly />

            <button type="submit" id="submit" name="submit" value="btnConfirmation" disabled={pending}
                className="w-[240px] text-lg font-bold bg-blue-700 m-auto py-2 rounded-lg border">
                {pending ? "Pending..." : "Validate Payment"}
            </button>

            {code?.message ? (
                <p className="w-full text-center border">
                    {code.message}
                </p>
            ) : null}

        </form>
    )
}


