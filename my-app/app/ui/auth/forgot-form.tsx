"use client";

import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { forgotPasswordServerAction } from '@/app/lib/actions';

export default function ForgetForm() {

    const { pending } = useFormStatus();
    const [state, formData] = useFormState(forgotPasswordServerAction, undefined);

    const handleTimer = () => {
        if (typeof window !== "undefined") {
            const timer = setTimeout(() => {
                document.getElementById("resetMessage")?.click();
            }, 1000)
        }
    };
    return (
        <form
            action={formData}
            autoComplete='off'
            className='flex flex-col w-2/5 text-md bg-slate-50 p-6 rounded-lg shadow-lg'
        >
            <label
                htmlFor="email"
                className='text-xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mb-1'>
                Email :
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email'
                required
                className='text-lg text-violet-600 dark:text-slate-600 bg-violet-100 hover:bg-violet-200 
                active:bg-white dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-800
                focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
                mx-4 pl-2 py-1 rounded-lg'
            />
            
            <input type="reset" id="resetMessage" hidden />

            <button
                type="submit"
                id="submit"
                name="submit"
                value="btnForgotPassword"
                onClick={handleTimer}
                disabled={pending}
                className='text-sm font-bold text-slate-600 bg-slate-100
                    hover:bg-slate-200
                    hover:text-slate-500
                    hover:shadow-none
                    active:text-slate-400
                    active:bg-slate-100
                    mx-4 mt-6 py-2
                    rounded-lg shadow-lg'
            >
                {pending ? "Pending..." : "Submit"}
            </button>
            {state?.message ? (
                <p className='text-center text-green-500 mt-2'>{state.message}</p>
            ): null}
        </form>
    )
}
