"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/img_logo/processor.png';

export default function Header() {
    const pathname = usePathname();
    return (
        <>
            <header className="sticky flex top-0 left-0 w-full
              
                bg-gradient-to-r from-slate-900 from-10% via-sky-500 via-30% to-slate-900 to-90%
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
                            ? "text-lg m-auto ml-10 p-2 text-blue-400"
                            : "text-lg m-auto ml-10 p-2 hover:text-blue-400"}`}
                        >Home</Link>
                        
                        <Link href="/products" className={`${pathname === '/products'
                            ? "text-lg m-auto ml-10 p-2 text-blue-400"
                            : "text-lg m-auto ml-10 p-2 hover:text-blue-400"}`}
                        >Products</Link>

                        <Link href="/docs" className={`${pathname === '/docs'
                            ? "text-lg m-auto ml-10 p-2 text-blue-400"
                            : "text-lg m-auto ml-10 p-2 hover:text-blue-400"}`}
                        >Docs</Link>

                        <Link href="/login" className={`${pathname === '/login'
                            ? "text-lg m-auto ml-10 p-2 text-blue-400"
                            : "text-lg m-auto ml-10 p-2 hover:text-blue-400"}`}
                        >Login</Link>

                    </ul>
                </nav>
            </header>
        </>
    )
}