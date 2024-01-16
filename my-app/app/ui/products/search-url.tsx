"use client";

import { generateProductUrl } from '@/app/utils/urlGenerator';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search({placeholder}: {placeholder: string}) {
    
    const router = useRouter();
    const [inputText, setInputText] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event?.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const destructuredText = inputText?.split(" ");
        const generatedUrl = generateProductUrl(destructuredText[0], destructuredText[1]);
        if (generatedUrl === undefined) {
            setMessage("Not found...");
        } else {
            router.push(generatedUrl);
        }
    };

    return (
        <>
            <form id="truc" onSubmit={(e) => handleSubmit(e)} 
                className='flex items-center justify-center w-4/5 h-content m-auto'>

                <input
                    value={inputText}
                    onChange={handleSearch}
                    placeholder={placeholder}
                    className="w-2/5 text-lg text-slate-50 outline-2 bg-slate-200 dark:bg-slate-800 border 
                        border-slate-500/70 dark:border-slate-400/70 mx-4 py-1 pl-2 placeholder:text-slate-500 
                        dark:placeholder:text-slate-300 rounded-lg"
                />

                <button type="submit" className='w-[140px] font-bold text-slate-50 bg-violet-500 
                    dark:bg-blue-600 hover:bg-violet-600 dark:hover:bg-blue-700 active:bg-violet-400 
                    dark:active:bg-blue-500 cursor-pointer px-5 py-2 rounded-lg shadow-lg hover:shadow-none'>
                    Submit
                </button>

            </form>
            {message ? (
                <p className='text-lg text-red-500 bg-slate-800 mt-4 px-6 py-2 rounded-lg'>
                    {message}
                </p>
            ) : null}        
        </>

    )
}