"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { BiLogInCircle } from "react-icons/bi";
import ShoppingCart from "./shoppingcart";
import skateLogo from '@/public/img_logo/main-logo.png';
import ShopMenu from './shop-menu';

export default function Header() {

    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true)
    }, []);

    return (
        <>
            <header className="fixed flex top-0 left-0 w-full h-[80px]
                text-cyan-800 dark:text-slate-50
                dark:bg-gradient-to-br dark:from-slate-900 dark:from-10% 
                dark:via-sky-500 dark:via-40% dark:to-slate-900 dark:to-90%
                bg-gradient-to-br from-cyan-500 from-10% 
                via-slate-50 via-40% to-cyan-500 to-90%
                py-2 z-10"
            >

                <div className="relative flex items-center justify-center w-[70px] 
                    transform rotate-45 h-auto ml-4">
                    <Image
                        src={skateLogo}
                        width={70}
                        height={70}
                        alt="img logo"
                        className="flex w-auto h-auto m-auto object-cover"
                    />
                </div>
                
                <nav className='w-full flex items-center justify-end mr-5'>
                    <ul className='flex font-bold'>
                      
                        <Link href="/" className={`${pathname === '/' 
                            ? "text-lg m-auto ml-10 p-2 dark:text-cyan-300 text-cyan-600"
                            : "text-lg m-auto ml-10 p-2 hover:text-slate-50 hover:scale-105"}`}
                        >Home</Link>

                        <ShopMenu />

                        <Link href="/docs" className={`${pathname === '/docs'
                            ? "text-lg m-auto ml-10 p-2 dark:text-cyan-300 text-cyan-600"
                            : "text-lg m-auto ml-10 p-2 hover:text-slate-50 hover:scale-105"}`}
                        >Docs</Link>

                        <Link href="/login" className={`${pathname === '/login'
                            ? "flex items-center justify-center text-lg m-auto ml-10 p-2 \
                                dark:text-cyan-300 text-cyan-600"
                            : "flex items-center justify-center text-lg m-auto ml-10 p-2 \
                                hover:text-slate-50 hover:scale-105"}`}
                        >
                            <span><BiLogInCircle size={20} /></span><p className='ml-1'>Login</p>
                        </Link>

                        <ShoppingCart />

                        {mounted === true ? (
                            <span 
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className='flex flex-col items-center justify-center text-lg 
                                    bg-tansparent hover:scale-105 hover:text-slate-50 
                                    dark:text-slate-50 mr-4 ml-14 rounded-lg'
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

