"use client";

import React, { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom';
import { messageToSend } from '@/app/lib/actions';

export default function Message() {

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(messageToSend, undefined)

    const [user, setUser] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [textArea, setTextArea] = useState<string>("");

    const handleUser = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let value_user = event.target.value;
        console.log(value_user);
        setUser(value_user);
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let value_email = event.target.value;
        console.log(value_email);
        setEmail(value_email);
    }

    const handleTextArea = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        let textValue = event.target.value;
        setTextArea(textValue);
    }

    return (
        <form action={formAction}
            className='flex flex-col w-2/5 h-fit text-lg font-bold text-indigo-500 dark:text-slate-600 
            bg-slate-50 mx-auto p-10 pb-6 rounded-xl shadow-lg dark:shadow-in'>

            <h3 className='text-2xl font-bold pb-4'>Email</h3>
            
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={user}
                onChange={(event) => handleUser(event)}
                placeholder='Username' required
                className='text-slate-500 bg-slate-200 px-2 py-1' />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} 
                onChange={(event) => handleEmail(event)}
                placeholder="Email" required
                className='text-slate-500 bg-slate-200 px-2 py-1' />
            
            <label htmlFor="message">Enter your text</label>
            <textarea name="message" id="message" cols={20} rows={5}
                onChange={(event) => handleTextArea(event)}
                value={textArea}
                className='text-slate-500 bg-slate-200 p-2'>
            </textarea>
            
            <button type="submit" id="submit" name="submit" value="sendmessage"
                disabled={pending} className='text-slate-50 bg-blue-500 mt-6 
                hover:bg-blue-600 active:hover:bg-blue-400 py-2 rounded-lg drop-shadow-lg'
            >
                {pending ? "Pending..." : "Submit"}
            </button>
            {code?.message ? (
                <p className='text-center text-green-400'>{code.message}</p>
            ) : null}

        </form>
    )
}
