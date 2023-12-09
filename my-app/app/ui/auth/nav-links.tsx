"use client";

import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LinksLoop() {
    const navLinks = [
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'Forgot password', href: '/forgot-password' }
    ]

    const pathname = usePathname();


    return (
        <div className='flex align-center justify-end p-2'>

        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return <Link
                    key={link.name} 
                    href={link.href} 
                    className={`text-lg ${isActive ? 'font-bold mr-4' : 'text-blue-400 mr-4'}`}
                >
                    {link.name}
                </Link>
            })
        }

        </div>
    )
}
