"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

import logoImg from '@/public/img_logo/processor.png';

export default function Header() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

    return (
        <>
            <header className="sticky flex top-0 left-0 w-full
                text-blue-900 dark:text-slate-50
                dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
                dark:via-sky-500 dark:via-30% dark:to-slate-900 dark:to-90%
                bg-gradient-to-r from-slate-100 from-10% 
                via-cyan-200 via-50% to-slate-100 to-90%
                py-2 z-10"
            >
                
                <div className="relative flex align-center justify-center w-20 h-auto ml-4"
                >
                    <Image
                        src={logoImg}
                        width={500}
                        height={500}
                        alt="img logo"
                        className="flex w-auto h-auto m-auto object-cover"
                    />
                </div>
                
                <nav className='w-full flex align-center justify-end mr-5'>
                    <ul className='flex font-bold'>
                      
                        <Link href="/" className={`${pathname === '/' 
                            ? "text-lg m-auto ml-10 p-2 dark:text-blue-200 text-blue-400"
                            : "text-lg m-auto ml-10 p-2 hover:text-blue-400 hover:scale-105"}`}
                        >Home</Link>
                        
                        <Link href="/products" className={`${pathname === '/products'
                            ? "text-lg m-auto ml-10 p-2 text-blue-200"
                            : "text-lg m-auto ml-10 p-2 hover:text-blue-400 hover:scale-105"}`}
                        >Products</Link>

                        <Link href="/docs" className={`${pathname === '/docs'
                            ? "text-lg m-auto ml-10 p-2 text-blue-200"
                            : "text-lg m-auto ml-10 p-2 hover:text-blue-400 hover:scale-105"}`}
                        >Docs</Link>

                        <Link href="/login" className={`${pathname === '/login'
                            ? "text-lg m-auto ml-10 p-2 text-blue-200"
                            : "text-lg m-auto ml-10 p-2 hover:text-blue-400 hover:scale-105"}`}
                        >Login</Link>

                        <select 
                            value={theme} 
                            onChange={e => setTheme(e.target.value)}
                            className='dark:bg-slate-900 bg-slate-100 text-blue-900 dark:text-slate-50 
                                my-2 ml-10 pl-2 rounded-lg'
                        >
                            <option value="system">System</option>
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                        </select>

                    </ul>
                </nav>
            </header>
        </>
    )
}