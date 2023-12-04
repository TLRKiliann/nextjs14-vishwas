"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Links() {
    const pathname = usePathname();
    return (
        <div className='flex justify-around w-full text-lg text-blue-800 m-auto mb-1'>

            <Link href="/" className={`${pathname === '/' 
            ? "text-cyan-600" 
            : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >Home</Link>
            
            <Link href="/products" className={`${pathname === '/products' 
            ? "text-cyan-600" 
            : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >Products</Link>

            <Link href="/about" className={`${pathname === '/about' 
            ? "text-cyan-600" 
            : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >About</Link>

            <Link href="/contact" className={`${pathname === '/contact' 
            ? "text-cyan-600" 
            : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >Contact</Link>

            <Link href="/login" className={`${pathname === '/products' 
            ? "text-cyan-600" 
            : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >Login</Link>

        </div>
    )
}