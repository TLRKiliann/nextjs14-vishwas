"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsCart3 } from "react-icons/bs";

export default function CartComponent() {
    const pathname = usePathname();
    return (
        <div className='flex w-full ml-10'>

            <Link href="/cart" className={`${pathname === '/cart'
                ? "flex align-center justify-center my-auto dark:text-blue-300 text-slate-900"
                : "flex align-center justify-center my-auto hover:text-slate-100 hover:scale-105"}`}
            >
                <BsCart3 size={22} />
            </Link>

        </div>
    )
}
