"use client";

import type { ConfirmationProps } from '@/app/lib/definitions';
import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { confirmationPayment } from '@/app/lib/actions';

export const dynamic = "force-dynamic";

export default function ValidatePayment({data}: {data: ConfirmationProps[]}) {

    const { pending } = useFormStatus();
    const [code, formData] = useFormState(confirmationPayment, undefined);

    //const dataConverter: ConfirmationProps = data[0];

    return (
        <>
            <form action={formData} className='flex items-center justify-center w-full my-20'>

                {data?.map((d: ConfirmationProps) => (
                    <div key={d?.id}>
                        <input type="number" id="id" name="id" value={d?.id} hidden readOnly />
                        <input type="text" id="user" name="user" value={d?.user} hidden readOnly />
                        <input type="text" id="address" name="address" value={d?.address} hidden readOnly />
                        <input type="number" id="npa" name="npa" value={d?.npa} hidden readOnly />
                        <input type="string" id="phone" name="phone" value={d?.phone} hidden readOnly />
                        <input type="text" id="email" name="email" value={d?.email} hidden readOnly />
                        <input type="text" id="name" name="name" value={d?.name} hidden readOnly />
                        <input type="number" id="price" name="price" value={d?.price} hidden readOnly />
                        <input type="number" id="count" name="count" value={d?.count} hidden readOnly />
                        <input type="text" id="img" name="img" value={d?.img} hidden readOnly />
                        <input type="number" id="filterTotal" name="filterTotal" value={d?.filterTotal} 
                            hidden readOnly />
                    </div>
                ))}

                <button type="submit" id="submit" name="submit" value="btnConfirmation" 
                    disabled={pending}
                    className="w-[200px] font-bold text-center text-slate-50 bg-sky-700/80
                    hover:text-slate-200 hover:bg-sky-700/90 hover:shadow-none
                    active:text-slate-50 active:bg-sky-700/70 active:scale-95 active:shadow-none
                    border-none mx-4 py-2 rounded-lg shadow-md">
                    {pending ? "Pending..." : "Validate Payment"}
                </button>

            </form>
            {code?.message ? (
                <p className="w-full text-center text-green-400">
                    {code.message}
                </p>
            ) : null}
        </>
    )
}


