"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { BiLogInCircle } from "react-icons/bi";
import CartComponent from './cart-component';
import logoImg from '@/public/img_logo/processor.png';

export default function Header() {

    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    return (
        <>
            <header className="sticky flex top-0 left-0 w-full
                dark:text-slate-50
                dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
                dark:via-sky-500 dark:via-30% dark:to-slate-900 dark:to-90%
                bg-gradient-to-r from-violet-400 from-10% 
                via-slate-50 via-30% to-violet-400 to-90%
                py-2 z-10"
            >

                <div className="relative flex align-center justify-center w-20 h-auto ml-4">
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
                            ? "text-lg m-auto ml-10 p-2 dark:text-cyan-300 text-purple-500"
                            : "text-lg m-auto ml-10 p-2 hover:text-slate-50 hover:scale-105"}`}
                        >Home</Link>
                        
                        <Link href="/products" className={`${pathname === '/products'
                            ? "text-lg m-auto ml-10 p-2 dark:text-cyan-300 text-fuchsia-600"
                            : "text-lg m-auto ml-10 p-2 hover:text-slate-50 hover:scale-105"}`}
                        >Shop</Link>

                        <Link href="/docs" className={`${pathname === '/docs'
                            ? "text-lg m-auto ml-10 p-2 dark:text-cyan-300 text-fuchsia-600"
                            : "text-lg m-auto ml-10 p-2 hover:text-slate-50 hover:scale-105"}`}
                        >Docs</Link>

                        <Link href="/login" className={`${pathname === '/login'
                            ? "flex align-center justify-center text-lg m-auto ml-10 p-2 dark:text-cyan-300 text-fuchsia-600"
                            : "flex align-center justify-center text-lg m-auto ml-10 p-2 hover:text-slate-50 hover:scale-105"}`}
                        ><span><BiLogInCircle size={24} /></span>Login</Link>

                        <CartComponent />

                        {mounted === true ? (
                            <span 
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className='flex flex-col align-center justify-center text-lg 
                                    dark:bg-slate-900 bg-violet-400
                                    hover:scale-105 hover:text-slate-50 dark:text-slate-50 
                                    mr-8 ml-12 rounded-lg'
                            >
                                {theme === 'light' 
                                    ? <FiMoon size={24} />
                                    : <FiSun size={24} />
                                }
                            </span>
                        ) : null}
                    </ul>
                </nav>
            </header>
        </>
    )
}

