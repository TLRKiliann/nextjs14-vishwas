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
            className='relative flex flex-col w-2/5 h-fit text-lg font-bold text-indigo-500 dark:text-slate-600 
            bg-slate-50 mx-auto p-10 pb-6 rounded-xl drop-shadow-inviolet dark:drop-shadow-in'>

            <h3 className='text-2xl font-bold pb-4'>Email</h3>
            
            <label className="mt-2 mb-1" htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username}
                onChange={(event) => handleUser(event)}
                placeholder='Username' required
                className='text-slate-500 bg-slate-200 px-2 py-1 rounded' />

            <label className="mt-2 mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} 
                onChange={(event) => handleEmail(event)}
                placeholder="Email" required
                className='text-slate-500 bg-slate-200 px-2 py-1 rounded' />
            
            <label className="mt-2 mb-1" htmlFor="message">Enter your text</label>
            <textarea id="tetxtarea" name="tetxtarea" cols={20} rows={5}
                onChange={(event) => handleTextArea(event)}
                value={textArea}
                placeholder="Enter something here..."
                className='text-slate-500 bg-slate-200 p-2 rounded'>
            </textarea>
            
            <input type="reset" id="resetForgot" hidden />

            <button type="submit" id="submit" name="submit" value="sendmessage"
                onClick={handleTimer}
                disabled={pending} className='text-slate-50 bg-blue-500 mt-6 
                hover:bg-blue-600 active:hover:bg-blue-400 py-2 rounded-lg shadow-lg'
            >
                {pending ? "Pending..." : "Submit"}
            </button>
            {code?.message ? (
                <p className='text-center text-green-400 mt-2'>{code.message}</p>
            ) : null}

        </form>
    )
}
