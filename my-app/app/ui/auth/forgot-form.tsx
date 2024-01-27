"use client";

import React from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { forgotPasswordServerAction } from '@/app/lib/actions';

export const dynamic = "force-dynamic";

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
            className='flex flex-col w-[400px] h-[200px] text-md bg-slate-50 p-6 rounded-lg 
                shadow-outviolet dark:shadow-inlightbox'
        >
            <label
                htmlFor="email"
                className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mb-1'>
                Email :
            </label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder='Enter your email'
                required
                className='text-lg text-violet-600 dark:text-slate-600 bg-violet-100 hover:bg-violet-200 
                active:bg-white dark:bg-slate-200 dark:hover:bg-slate-300
                focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-blue-500
                placeholder:text-sm placeholder:text-slate-500 mx-4 pl-2 py-1 rounded-lg'
            />
            
            <input type="reset" id="resetMessage" hidden />

            <button
                type="submit"
                id="submit"
                name="submit"
                value="btnForgotPassword"
                onClick={handleTimer}
                disabled={pending}
                className='flex items-center justify-center text-slate-500 bg-white dark:bg-slate-50 hover:bg-violet-100 
                dark:hover:bg-blue-100 hover:shadow-none active:text-slate-50 active:bg-violet-200 
                dark:active:bg-blue-500 active:shadow-inviolet dark:active:shadow-inbtn mx-4 mt-8 rounded-xl 
                shadow dark:hover:shadow-none transition transform duration-300 hover:scale-[0.95] py-2'
            >
                {pending ? "Pending..." : "Submit"}
            </button>
            {state?.message ? (
                <p className='text-center text-green-500 mt-2'>{state.message}</p>
            ): null}
        </form>
    )
}
