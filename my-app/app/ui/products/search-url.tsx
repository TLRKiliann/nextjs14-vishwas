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
            setMessage("Product not found...");
        } else {
            router.push(generatedUrl);
        }
    };

    return (
        <>
            <form id="truc" onSubmit={(e) => handleSubmit(e)} 
                className='flex items-center justify-between w-3/5 h-auto m-auto'>

                <input
                    value={inputText}
                    onChange={handleSearch}
                    placeholder={placeholder}
                    className="w-4/5 text-lg text-slate-600 dark:text-slate-50 outline-2 bg-slate-200 
                        dark:bg-slate-800 border-none mr-4 py-1 pl-4 placeholder:text-slate-500 
                        focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500 
                        dark:placeholder:text-slate-300 rounded-full shadow-inlightbox"
                />

                <button type="submit" className='w-1/5 font-bold text-slate-50 hover:text-slate-100 
                    bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 
                    dark:active:bg-blue-400 active:hover:bg-blue-400 cursor-pointer transition 
                    transform ease-out hover:scale-95 active:scale-90 py-2 rounded-lg shadow-inlightbox hover:shadow-none'>
                    Submit
                </button>

            </form>
            {message ? (
                <p className='w-[280px] text-center text-lg text-slate-100 dark:text-orange-500 bg-slate-900/50 mt-4 px-6 py-2 
                    rounded-lg'
                >
                    {message}
                </p>
            ) : null}        
        </>
    )
}