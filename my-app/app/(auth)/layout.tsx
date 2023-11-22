"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function AuthLayout({children}: {children: React.ReactNode}) {

    const navLinks = [
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'Forgot password', href: '/forgot-password' }
    ]

    const pathname = usePathname()

    return (
        <>
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
