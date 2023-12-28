"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaProductHunt } from "react-icons/fa6";
import { MdSkateboarding } from "react-icons/md";
import { CgMaximizeAlt } from "react-icons/cg";
import { GiBoomerangSun } from "react-icons/gi";

export default function ShopMenu() {

    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle = () => {
        setIsOpen((old) => !old);
    };

    const transClass: string = isOpen ? "flex" : "hidden";

    return (
        <div className='flex items-center m-auto'>

            <span
                className={`${pathname === "/products"
                ? "text-lg ml-10 p-2 dark:text-cyan-300 text-fuchsia-600"
                : "text-lg ml-10 p-2 hover:text-slate-50 hover:scale-105 hover:cursor-pointer"}`}
                onClick={toggle}
            >
                Shop
            </span>

            <div className={`absolute text-md font-normal top-12 z-20 w-[140px] h-[auto] 
                bg-slate-800 mt-8 ml-1 rounded-br-lg rounded-bl-lg ${transClass} flex-col`}
            >
                <Link 
                    href="/products"
                    onClick={toggle}
                    className="flex align-center justify-left hover:bg-sky-700 
                        hover:text-slate-200 px-3 pt-2 pb-1"
                >
                    <span><FaProductHunt className="mt-[3px] mr-4" size={18} /></span>
                    <p>Products</p>
                </Link>

                <hr className='border-t-slate-700 border-b-sky-800 px-14 m-auto' />
                
                <Link href="/products/decks"
                    onClick={toggle}
                    className="flex align-center justify-left hover:bg-sky-700 
                        hover:text-slate-200 px-3 pt-2 pb-1"
                >
                    <span><MdSkateboarding className="mt-[3px] mr-4" size={18} /></span>
                    <p>Decks</p>
                </Link>
                
                <hr className='border-t-slate-700 border-b-sky-800 px-14 m-auto' />
                
                <Link href="/products/trucks"
                    onClick={toggle}
                    className="flex align-center justify-left hover:bg-sky-700 
                        hover:text-slate-200 px-3 pt-2 pb-1"
                >
                    <span><CgMaximizeAlt className="mt-[3px] mr-4" size={18} /></span>
                    <p>Trucks</p>
                </Link>

                <hr className='border-t-slate-700 border-b-sky-800 px-14 m-auto' />

                <Link href="/products/wheels"
                    onClick={toggle}
                    className="flex align-center justify-left hover:bg-sky-700 
                        hover:text-slate-200 px-3 pt-2 pb-2"
                >
                    <span><GiBoomerangSun className="mt-[3px] mr-4" size={18} /></span>
                    <p>Wheels</p>
                </Link>

            </div>

        </div>
    )
}
