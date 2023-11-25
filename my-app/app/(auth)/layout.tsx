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
        <div className='min-h-screen'> 

            {navLinks.map((link) => {
                
                const isActive = pathname.startsWith(link.href)

                return <Link
                        key={link.name} 
                        href={link.href} 
                        className={isActive ? 'font-bold mr-4' : 'text-blue-400 mr-4'}
                    >
                        {link.name}
                    </Link>
                })
            }

            <SideNav />
            
            <InputUi />

            {children}
        </div>
    )
}

// Same template by route & same SideNav for all routes.
// In resume, ui could be display for several routes with preserved state !
// (and each route corresponding for each template, that's different)