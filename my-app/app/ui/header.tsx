"use client";

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BiLogInCircle } from "react-icons/bi";
import ShoppingCart from "./shoppingcart";
import skateLogo from '@/public/img_logo/main-logo.png';
import ShopMenu from './shop-menu';

export default function Header() {

    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState<boolean>(false);

    useEffect(() => {
        setMounted(true);
        return () => console.log("Clean-up mounted (header)");
    }, []);

    return (
        <>
            <header className="fixed flex top-0 left-0 w-full h-[80px]
                text-indigo-500 dark:text-slate-50
                dark:bg-gradient-to-br dark:from-slate-900 dark:from-10% 
                dark:via-sky-500 dark:via-40% dark:to-slate-900 dark:to-90%
                bg-indigo-200 py-2 z-10"
            >

                <div className="relative flex items-center justify-center w-[70px] 
                    transform rotate-45 h-auto ml-4">
                    <Image
                        src={skateLogo}
                        width={70}
                        height={70}
                        alt="img logo"
                        className="object-cover"
                    />
                </div>
                
                <nav className='w-full flex items-center justify-end mr-5'>
                    <ul className='flex font-bold'>
                      
                        <Link href="/" className={`${pathname === '/' 
                            ? "text-lg m-auto ml-10 p-2 dark:text-cyan-200 text-violet-500"
                            : "text-lg m-auto ml-10 p-2 hover:text-indigo-500 hover:scale-105 dark:hover:text-slate-50"}`}
                        >Home</Link>

                        <ShopMenu />

                        <Link href="/about" className={`${pathname === '/about'
                            ? "text-lg m-auto ml-10 p-2 dark:text-cyan-200 text-violet-500"
                            : "text-lg m-auto ml-10 p-2 hover:text-indigo-500 hover:scale-105 dark:hover:text-slate-50"}`}
                        >Story</Link>

                        <Link href="/contact" className={`${pathname === '/contact'
                            ? "text-lg m-auto ml-10 p-2 dark:text-cyan-200 text-violet-500"
                            : "text-lg m-auto ml-10 p-2 hover:text-indigo-500 hover:scale-105 dark:hover:text-slate-50"}`}
                        >Contact</Link>


                        <Link href="/login" className={`${pathname === '/login'
                            ? "flex items-center justify-center text-lg m-auto ml-10 p-2 \
                                dark:text-cyan-200 text-violet-500"
                            : "flex items-center justify-center text-lg m-auto ml-10 p-2 \
                                hover:text-indigo-500 hover:scale-105 dark:hover:text-slate-50"}`}
                        >
                            <span><BiLogInCircle size={20} /></span><p className='ml-1'>Login</p>
                        </Link>
                    

                        <ShoppingCart />

                        {mounted === true ? (
                            <span 
                                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                className='flex flex-col items-center justify-center text-lg 
                                    bg-tansparent hover:scale-105 hover:text-indigo-500 
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


/*<Link href="/order/login" className={`${pathname === '/order/login'
    ? "flex items-center justify-center text-lg m-auto ml-10 p-2 \
        dark:text-cyan-200 text-violet-500"
    : "flex items-center justify-center text-lg m-auto ml-10 p-2 \
        hover:text-indigo-500 hover:scale-105 dark:hover:text-slate-50"}`}
>
        <span><RiLogoutCircleLine size={20} /></span>
        <p className='ml-1'>
            Logout
        </p>
    </Link>*/