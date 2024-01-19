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
            className='flex flex-col md:w-[500px] xl:w-[500px] md:h-[500px] xl:h-[500px] text-md font-bold dark:bg-slate-100 transform 
                transition translate-y-0 animate-up-start pt-[70px] rounded-xl shadow-outviolet dark:shadow-lg'
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
                className='text-lg text-slate-600 bg-violet-100 hover:bg-violet-200 active:bg-white 
                dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-500 focus:outline-none 
                placeholder:text-violet-300 dark:placeholder:text-blue-300 focus:ring focus:ring-violet-400/70 
                dark:focus:ring-sky-500 mx-4 pl-2 py-1 rounded-lg'
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
                className='text-lg text-slate-600 bg-violet-100 hover:bg-violet-200 active:bg-white 
                dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-500 focus:outline-none 
                focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500 mx-4 
                placeholder:text-violet-300 dark:placeholder:text-blue-300 pl-2 py-1 rounded-lg'
            />
            <LoginButton />
            <div className="flex h-8 items-center text-slate-900"
                aria-live="polite"
                aria-atomic="true"
            >
                {errorMessage && (
                    <>
                        <PiWarningDuotone className="h-5 w-5 text-red-500" />
                        <p aria-live="polite" className="text-sm text-red-500">
                            Invalid credentials {errorMessage}
                        </p>
                    </>
                )}
            </div>
            <div className='flex align-center justify-between text-sm font-normal text-slate-600 mx-4'>
                <Link href="/register" className='hover:text-orange-300'>
                    Register
                </Link>
                <Link href="/forgot-password" className='hover:text-orange-300'>
                    Forgot password
                </Link>
            </div>
        </form>
    )
}

function LoginButton() {
    
    const { pending } = useFormStatus();

    return (
        <BtnValidate 
            className='flex items-center justify-center bg-slate-100 hover:bg-transparent
                hover:scale-[0.95] hover:shadow-md active:bg-violet-200 
                active:shadow-inviolet dark:active:bg-sky-700 dark:active:shadow-in transition-all ease-in-out 
                mx-4 mt-8 rounded-xl shadow-lg'
            disabled={pending}
        >
            <p className='text-lg font-extrabold text-transparent bg-clip-text dark-title-h1 light-title-h1'>
                Log in
            </p>
            <GrValidate className="h-5 w-5 text-green-400 ml-2" />
        </BtnValidate>
    );
}
