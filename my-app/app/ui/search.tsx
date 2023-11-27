"use client";

import {useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({placeholder}: {placeholder: string}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const handleSearch = useDebouncedCallback((term) => {

        const params = new URLSearchParams(searchParams);
        params.set("page", "1");

        if (term) {
            params.set("page", "1");
        } else {
            params.delete("query")
        }

        replace(`${pathname}?${params.toString()}`);
    }, 300);

    return (
        <div className='flex align-center'>
            <label htmlFor="search" className="m-auto w-[140px] text-lg font-bold text-slate-100">
                Search : 
            </label>

            <input
                className="peer block w-full rounded-md border border-gray-200 py-[5px] pl-2 mr-4
                text-lg text-slate-800
                outline-2 placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
        </div>
    )
}