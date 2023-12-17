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
    }

    const transClass = isOpen ? "flex" : "hidden";

    return (
        <div className='flex align-center m-auto'>

            <span
                className={`${pathname === '/products'
                ? "text-lg ml-10 p-2 dark:text-cyan-300 text-fuchsia-600"
                : "text-lg ml-10 p-2 hover:text-slate-50 hover:scale-105"}`}
                onClick={toggle}
            >
                Shop
            </span>

            <div className={`absolute text-md font-normal top-12 z-20 w-[140px]] h-[auto] 
                flex flex-col bg-slate-700 mt-8 ml-2 rounded-br-lg rounded-bl-lg ${transClass}`}
            >
                <Link
                    className="flex align-center justify-left hover:bg-sky-700 hover:text-slate-200 
                        px-3 pt-2 pb-1"
                    href={`/products`}
                    onClick={toggle}
                >
                    <span><FaProductHunt className="mt-[3px] mr-2" size={18} /></span>
                    <p>Products</p>
                </Link>

                <hr className='border-t-sky-800 border-b-sky-800 px-14 m-auto' />
                
                <Link
                    className="flex align-center justify-left hover:bg-sky-700 hover:text-slate-200 
                        px-3 pt-2 pb-1"
                    href={`/products/decks`}
                    onClick={toggle}
                >
                    <span><MdSkateboarding className="mt-[3px] mr-2" size={18} /></span>
                    <p>Decks</p>
                </Link>
                
                <hr className='border-t-sky-800 border-b-sky-800 px-14 m-auto' />
                
                <Link
                    className="flex align-center justify-left hover:bg-sky-700 hover:text-slate-200 
                        px-3 pt-2 pb-1"
                    href={`/products/trucks`}
                    onClick={toggle}
                >
                    <span><CgMaximizeAlt className="mt-[3px] mr-2" size={18} /></span>
                    <p>Trucks</p>
                </Link>

                <hr className='border-t-sky-800 border-b-sky-800 px-14 m-auto' />

                <Link
                    className="flex align-center justify-left hover:bg-sky-700 hover:text-slate-200 
                        px-3 pt-2 pb-2"
                    href={`/products/wheels`}
                    onClick={toggle}
                >
                    <span><GiBoomerangSun className="mt-[3px] mr-2" size={18} /></span>
                    <p>Wheels</p>
                </Link>

            </div>

            {isOpen === true ? (
                <div 
                    className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/40"
                    onClick={toggle}>
                </div>
            ) : null}

        </div>
    )
}
