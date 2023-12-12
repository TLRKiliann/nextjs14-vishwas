"use client";

import React from 'react'
import Link from 'next/link';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/actions';
import { PiWarningDuotone } from "react-icons/pi";
import { GrValidate } from "react-icons/gr";
import { BtnValidate } from './BtnValidate';

export default function LoginForm() {

    //const [code, dispatch] = useFormState(authenticate, undefined);
    const [code, formAction] = useFormState(authenticate, undefined)

    return (
        <form 
            action={formAction}
            className='flex w-2/5 flex-col text-md font-bold 
                dark:bg-gradient-to-tr dark:from-slate-900 dark:from-10% 
                dark:via-sky-500 dark:via-50% dark:to-slate-900 dark:to-90%
                bg-gradient-to-tr from-violet-400 from-10% 
                via-slate-50 via-50% to-violet-400 to-90%
                transform transition translate-y-0 animate-up-start
                py-[20px] rounded-xl shadow-lg'
        >

            <label
                htmlFor="email"
                className='mx-20 my-2 text-violet-600 dark:text-slate-50'
            >
                Email
            </label>

            <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                required
                className='text-lg px-[7px] py-[2px]
                text-fuchsia-300/90 dark:text-cyan-400
                bg-slate-100 hover:bg-white active:bg-white
                dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-sky-800
                focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
                rounded-lg mx-20'
            />

            <label
                htmlFor="password"
                className='mx-20 my-2 text-violet-600 dark:text-slate-50'
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
                className='text-md mb-5 px-[7px] py-[3px] text-fuchsia-300/90 dark:text-cyan-400
                bg-slate-100 hover:bg-white active:bg-white dark:bg-slate-800 dark:hover:bg-slate-900 
                dark:active:bg-sky-800 focus:outline-none focus:ring focus:ring-violet-400/70 
                dark:focus:ring-sky-500 rounded-lg mx-20'
            />
            <LoginButton />
            <div
                className="flex h-8 items-end space-x-1"
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
            className='text-md font-bold m-auto text-violet-600 dark:text-slate-50
                dark:bg-transparent dark:hover:bg-transparent dark:hover:shadow-none dark:hover:scale-[0.98]
                dark:active:bg-sky-700 dark:active:shadow-in
                bg-transparent hover:bg-transparent hover:shadow-none hover:scale-[0.98]
                active:bg-violet-200 active:shadow-inviolet
                transition-all ease-in-out px-5 py-1 rounded-xl shadow-lg' 
            aria-disabled={pending}
        >
            Log in <GrValidate className="ml-auto h-5 w-5 text-green-400" />
        </BtnValidate>
    );
}
