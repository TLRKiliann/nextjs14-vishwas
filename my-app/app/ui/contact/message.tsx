"use client";

import React, { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { messageToSend } from '@/app/lib/actions';

export const dynamic = "force-dynamic";

export default function Message() {

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(messageToSend, undefined)

    const [username, setUserName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [textArea, setTextArea] = useState<string>("");

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let value_user: string = event.target.value;
        console.log(value_user);
        setUserName(value_user);
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let value_email: string = event.target.value;
        console.log(value_email);
        setEmail(value_email);
    }

    const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        let textValue: string = event.target.value;
        setTextArea(textValue);
    }

    const handleTimer = () => {
        if (typeof window !== "undefined") {
            const timer = setTimeout(() => {
                document.getElementById("resetForgot")?.click();
            }, 1000)
        }
    };

    return (
        <form action={formAction}
            className='relative flex flex-col w-2/5 h-fit text-lg text-indigo-500 dark:text-slate-600 
            bg-slate-50 mx-auto p-10 pb-6 rounded-xl drop-shadow-inviolet dark:drop-shadow-in'>

            <h3 className='text-2xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 pb-4'>
                Email
            </h3>
            
            <label htmlFor="username" className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 
                mt-2 mb-1'>
                Username
            </label>
            <input type="text" id="username" name="username" value={username}
                onChange={(event) => handleUser(event)}
                placeholder='Username' required
                className='text-lg text-gray-500 bg-violet-100 hover:bg-violet-200 active:bg-white 
                dark:bg-slate-200 dark:hover:bg-slate-300 focus:outline-none dark:focus:outline-none 
                placeholder:text-sm placeholder:text-slate-500 focus:ring 
                focus:ring-violet-400/70 dark:focus:ring-blue-500 pl-2 py-1 rounded-lg'
            />

            <label htmlFor="email" className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 
                mt-2 mb-1'>
                Email
            </label>
            <input type="email" id="email" name="email" value={email} 
                onChange={(event) => handleEmail(event)}
                placeholder="Email" required
                className='text-lg text-gray-500 bg-violet-100 hover:bg-violet-200 active:bg-white 
                dark:bg-slate-200 dark:hover:bg-slate-300 border-none focus:outline-none dark:focus:outline-none 
                placeholder:text-sm placeholder:text-slate-500 focus:ring border
                focus:ring-violet-400/70 dark:focus:ring-blue-500 pl-2 py-1 rounded-lg'
            />
            
            <label htmlFor="message" className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 
                mt-2 mb-1'>
                Enter your text
            </label>
            <textarea id="tetxtarea" name="tetxtarea" cols={20} rows={5}
                onChange={(event) => handleTextArea(event)}
                value={textArea}
                placeholder="Enter something here..."
                className='text-slate-500 bg-violet-100 dark:bg-slate-200 p-2 hover:bg-violet-200 
                    dark:hover:bg-slate-300 placeholder:text-sm placeholder:text-slate-500 rounded'>
            </textarea>
            
            <input type="reset" id="resetForgot" hidden />

            <button type="submit" id="submit" name="submit" value="sendmessage"
                onClick={handleTimer}
                disabled={pending} className='text-slate-50 color-btn mt-6 py-2 rounded-lg shadow-lg'
            >
                {pending ? "Pending..." : "Submit"}
            </button>
            {code?.message ? (
                <p className='text-center text-green-400 mt-2'>{code.message}</p>
            ) : null}

        </form>
    )
}
