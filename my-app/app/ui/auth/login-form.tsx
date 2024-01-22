"use client";

import React from 'react'
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { BtnValidate } from './btn-validate';
import { PiWarningDuotone } from "react-icons/pi";
import { GrValidate } from "react-icons/gr";

export default function LoginForm() {

    const [errorMessage, dispatch] = useFormState(authenticate, undefined)
    console.log(errorMessage, "code");

    return (
        <form action={dispatch} autoComplete='off'
            className='flex flex-col md:w-[400px] xl:w-[500px] h-auto text-md bg-slate-100 
                dark:bg-slate-100 shadow-outviolet p-5 rounded-lg dark:shadow-inlightbox transform transition translate-y-0 
                animate-up-start'
        >

            <label htmlFor="email"
                className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mt-2 mb-1'>
                Email
            </label>

            <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className='text-lg text-gray-500 bg-violet-100 hover:bg-violet-200 active:bg-white 
                dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-500 focus:outline-none 
                placeholder:text-sm placeholder:text-slate-500 focus:ring 
                focus:ring-violet-400/70 dark:focus:ring-sky-500 mx-4 pl-2 py-1 rounded-lg'
            />

            <label htmlFor="password"
                className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mt-3 mb-1'>
                Password
            </label>

            <input
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                placeholder="Enter password of 12 caracters"  
                className='text-lg text-gray-500 bg-violet-100 hover:bg-violet-200 active:bg-white 
                dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-500 focus:outline-none 
                placeholder:text-sm placeholder:text-slate-500 focus:ring 
                focus:ring-violet-400/70 dark:focus:ring-sky-500 mx-4 pl-2 py-1 rounded-lg'
            />
            <LoginButton />
            <div className="flex h-8 items-center text-slate-900"
                aria-live="polite"
                aria-atomic="true"
            >
                {errorMessage && (
                    <div className='flex items-center justify-center w-full'>
                        <PiWarningDuotone className="h-5 w-5 text-red-500" />
                        <p aria-live="polite" className="text-sm text-center text-red-500 ml-2">
                            Invalid credentials {errorMessage}
                        </p>
                    </div>
                )}
            </div>
            <div className='flex align-center justify-between text-sm font-normal text-gray-500 mx-4'>
                <Link href="/register" 
                    className='text-violet-300 dark:text-blue-400 hover:text-slate-500 dark:hover:text-slate-500'>
                    Register
                </Link>
                <Link href="/forgot-password"
                    className='text-violet-300 dark:text-blue-400 hover:text-slate-500 dark:hover:text-slate-500'>
                    Forgot ?
                </Link>
            </div>
        </form>
    )
}

function LoginButton() {
    
    const { pending } = useFormStatus();

    return (
        <BtnValidate
            className='flex items-center justify-center bg-white dark:bg-slate-50 hover:bg-violet-100 
                dark:hover:bg-blue-100 hover:scale-[0.95] hover:shadow-none active:bg-violet-200 
                dark:active:bg-blue-500 active:drop-shadow-inviolet dark:active:drop-shadow-inbtn mx-4 mt-8 rounded-xl 
                shadow drop-shadow-inviolet transition-all ease'
            disabled={pending}
        >
            <p className='text-lg font-extrabold text-transparent bg-clip-text dark-title-h1 light-title-h1'>
                Log in
            </p>
            <GrValidate className="h-5 w-5 text-green-400 ml-2" />
        </BtnValidate>
    );
}
