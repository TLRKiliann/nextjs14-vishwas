"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import SideNav from '@/app/ui/auth/sidenav';
import InputUi from '@/app/ui/auth/inputui';

export default function AuthLayout({children}: {children: React.ReactNode}) {

    const navLinks = [
        { name: 'Register', href: '/register' },
        { name: 'Login', href: '/login' },
        { name: 'Forgot password', href: '/forgot-password' }
    ]

    const pathname = usePathname();

    return (
        <div className='min-h-screen bg-slate-100 dark:bg-slate-900 '> 

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

            <SideNav />
            
            <InputUi />

            {children}
        </div>
    )
}

// Same template by route & same SideNav for all routes.
// In resume, ui could be display for several routes with preserved state !
// (and each route corresponding for each template, that's different)