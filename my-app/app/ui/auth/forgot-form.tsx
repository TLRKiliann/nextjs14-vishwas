"use client";

import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { forgotPasswordServerAction } from '@/app/lib/actions';

export default function ForgetForm() {

    const { pending } = useFormStatus();
    const [state, formData] = useFormState(forgotPasswordServerAction, undefined);

    return (
        <form
            action={formData}
            className='flex flex-col w-2/5 text-md bg-slate-50 px-8 py-7 rounded-lg shadow-lg'
        >
            <label
                htmlFor="email"
                className='text-slate-600 font-bold'
            >
                Email :
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email here'
                required
                className='text-slate-900
                    bg-slate-100
                    hover:bg-slate-300/60

                    focus:outline-none focus:ring focus:ring-slate-500/50
                    rounded px-2 py-1 mt-2 mb-6 shadow-ingray'
            />
            <button
                type="submit"
                id="submit"
                name="submit"
                value="btnForgotPassword"
                className='text-sm font-bold text-slate-600 bg-slate-100
                    hover:bg-slate-200
                    hover:text-slate-500
                    hover:shadow-none
                    active:text-slate-400
                    active:bg-slate-100
                    px-5 py-2
                    rounded-lg shadow-lg'
            >
                {pending ? "Pending..." : "Submit"}
            </button>
            {state?.message ? (
                <p>{state.message}</p>
            ): null}
        </form>
    )
}
