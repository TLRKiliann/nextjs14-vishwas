"use client";

import React from 'react'
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { PiWarningDuotone } from "react-icons/pi";
import { GrValidate } from "react-icons/gr";
import { BtnValidate } from './BtnValidate';

export default function LoginForm() {

    const [code, formAction] = useFormState(authenticate, undefined)

    return (
        <form 
            action={formAction}
            className='flex w-2/5 flex-col text-md font-bold bg-indigo-200 dark:bg-slate-200
                transform transition translate-y-0 animate-up-start py-[20px] rounded-xl shadow-outviolet'
        >

            <label
                htmlFor="email"
                className='text-2xl text-violet-600 dark:text-slate-50 mx-4 mt-2 mb-1'
            >
                Email
            </label>

            <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className='text-lg text-violet-600 dark:text-cyan-400 bg-violet-100 hover:bg-violet-200 
                active:bg-white dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-sky-800
                focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
                mx-4 px-[7px] py-[5px] rounded-lg'
            />

            <label
                htmlFor="password"
                className='text-2xl text-violet-600 dark:text-slate-50 mx-4 mt-2 mb-1'
            >
                Password
            </label>

            <input
                type="password"
                id="password"
                name="password"
                required
                minLength={6}
                placeholder="Enter password of 12 caracters"  
                className='text-md text-violet-600 dark:text-cyan-400 bg-violet-100 
                hover:bg-violet-200 active:bg-white dark:bg-slate-800 dark:hover:bg-slate-900 
                dark:active:bg-sky-800 focus:outline-none focus:ring focus:ring-violet-400/70 
                dark:focus:ring-sky-500 rounded-lg mx-4 mb-5 px-[7px] py-[5px]'
            />
            <LoginButton />
            <div className="flex h-8 items-center"
                aria-live="polite"
                aria-atomic="true"
            >
                {code === 'CredentialSignin' && (
                    <>
                        <PiWarningDuotone className="h-5 w-5 text-red-500" />
                        <p aria-live="polite" className="text-sm text-red-500">
                            Invalid credentials
                        </p>
                    </>
                )}
            </div>
            <div className='flex align-center justify-between text-sm font-normal text-green-400 mx-10'>
                <Link href="/register" className='hover:text-orange-300'>Register</Link>
                <Link href="/forgot-password" className='hover:text-orange-300'>Forgot password</Link>
            </div>
        </form>
    )
}

function LoginButton() {
    
    const { pending } = useFormStatus();

    return (
        <BtnValidate 
            className='flex items-center justify-center bg-slate-100 hover:bg-transparent hover:shadow-none 
                hover:scale-[0.98] active:bg-violet-200 active:shadow-inviolet dark:active:bg-sky-700 
                dark:active:shadow-in transition-all ease-in-out mx-4 my-4 rounded-xl shadow-lg dark:shadow-lg'
            disabled={pending}
        >
            <p className='text-md text-violet-600 font-bold dark:text-slate-50'>
                Log in
            </p>
            <GrValidate className="h-5 w-5 text-green-400" />
        </BtnValidate>
    );
}
