"use client";

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function AuthLayout({children}: {children: React.ReactNode}) {

    const navLinks = [
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'Forgot password', href: '/forgot-password' }
    ]

    const pathname = usePathname()

    const [input, setInput] = useState<string>("");

    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} 
                className='text-black'
            />
            
            {navLinks.map((link) => {
                const isActive = pathname.startsWith(link.href)
                
                return <Link key={link.name} href={link.href} 
                    className={isActive ? 'font-bold mr-4' : 'text-blue-400 mr-4'}>
                    {link.name}
                </Link>
                })
            }
            {children}
        </>
    )
}
