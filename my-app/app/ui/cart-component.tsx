"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCart3 } from "react-icons/bs";

export default function CartComponent() {
    
    const pathname = usePathname();

    const num: number = 0;

    return (
        <div className='flex w-full ml-10'>

            <Link href="/cart" className={`${pathname === '/cart'
                ? "flex align-center justify-center my-auto dark:text-cyan-300 text-fuchsia-600"
                : "flex align-center justify-center my-auto hover:text-slate-100 hover:scale-105"}`}
            >
                <BsCart3 size={22} />
                <span className='relative  flex align-center justify-center mt-2 px-2 py-0'>
                    <p className={`border ${pathname === '/cart' 
                        ? "border-fuchsia-600 dark:border-cyan-300" 
                        : "hover:border-slate-100 dark:border-slate-100"}
                            absolute flex align-center justify-center px-1 w-6 min-w-6 py-1 mt-2 text-xs 
                            rounded-xl`}
                    >
                        {num}
                    </p>
                </span>
            </Link>

        </div>
    )
}
