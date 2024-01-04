"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Links() {
    const pathname = usePathname();
    return (
        <div className='flex items-center justify-around w-full h-9 text-lg text-indigo-500 dark:text-blue-800 
            bg-indigo-200 dark:bg-sky-200 mb-0'>

            <Link href="/" className={`${pathname === '/' 
            ? "text-indigo-400 dark:text-sky-600" 
            : "hover:text-indigo-600 dark:hover:text-blue-600 hover:scale-105 hover:drop-shadow dark:drop-shadow-lg"}`}
            >Home</Link>
            
            <Link href="/products" className={`${pathname === '/products' 
            ? "text-indigo-400 dark:text-sky-600" 
            : "hover:text-indigo-600 dark:hover:text-blue-600 hover:scale-105 hover:drop-shadow dark:drop-shadow-lg"}`}
            >Shop</Link>

            <Link href="/about" className={`${pathname === '/about' 
            ? "text-indigo-400 dark:text-sky-600" 
            : "hover:text-indigo-600 dark:hover:text-blue-600 hover:scale-105 hover:drop-shadow dark:drop-shadow-lg"}`}
            >Our story</Link>

            <Link href="/contact" className={`${pathname === '/contact' 
            ? "text-indigo-400 dark:text-sky-600" 
            : "hover:text-indigo-600 dark:hover:text-blue-600 hover:scale-105 hover:drop-shadow dark:drop-shadow-lg"}`}
            >Contact us</Link>

            <Link href="/notfound" className={`${pathname === '/notfound' 
            ? "text-indigo-400 dark:text-sky-600" 
            : "hover:text-indigo-600 dark:hover:text-blue-600 hover:scale-105 hover:drop-shadow dark:drop-shadow-lg"}`}
            >Notfound</Link>

        </div>
    )
}
