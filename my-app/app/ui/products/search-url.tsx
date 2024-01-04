"use client";

import { generateProductUrl } from '@/app/utils/urlGenerator';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Search({placeholder}: {placeholder: string}) {
    
    const router = useRouter();
    const [inputText, setInputText] = useState<string>("");

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(event?.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const destructuredText = inputText.split(" ");
        const generatedUrl = generateProductUrl(destructuredText[0], destructuredText[1]);
        router.push(generatedUrl);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex w-full px-[100px]'>

            <label htmlFor="search" className="flex w-[340px] text-xl font-bold text-slate-100 m-auto">
                Search your deck: 
            </label>

            <input
                value={inputText}
                onChange={handleSearch}
                placeholder={placeholder}
                className="w-full text-lg text-slate-50 outline-2 rounded-md border border-gray-200 
                    py-1 pl-2 m-auto mr-6 placeholder:text-slate-300"
            />

            <button type="submit" className='font-bold bg-slate-800 hover:bg-slate-700 active:bg-slate-600 
                cursor-pointer m-auto px-5 py-2 border rounded-lg'>
                Submit
            </button>

        </form>
    )
}