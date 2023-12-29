"use client";

import React from 'react'

export default function Message() {
    return (
        <form className='flex flex-col w-2/5 h-auto text-lg font-bold text-indigo-500 dark:text-slate-600 
            bg-slate-50 mx-auto mt- p-10 rounded-xl shadow-inviolet dark:shadow-in border'>

            <h3>Email</h3>
            
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value="" 
                className='bg-slate-200' />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value="" 
                className='bg-slate-200' />
            
            <label htmlFor="message">Enter your text</label>
            <textarea name="message" id="message" cols={20} rows={5}
                className='bg-slate-200'>
            </textarea>
            
            <button type="submit" id="submit" name="submit" value="sendmessage"
                className='text-slate-50 bg-blue-500 mt-4 py-2 rounded-lg border'>
                Submit
            </button>

        </form>
    )
}
