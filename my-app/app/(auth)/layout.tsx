"use client";

import React, {useState} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Template from './template'

export default function AuthLayout({children}: {children: React.ReactNode}) {

    const navLinks = [
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'Forgot password', href: '/forgot-password' }
    ]

    const layoutSwitch = true;

    const callerTemplate = Template(layoutSwitch);
    
    const pathname = usePathname();

    return (
        <>
            <p>{layoutSwitch === true ? "From layout.tsx:" : "From template.tsx"}</p>
            
            {callerTemplate}

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
