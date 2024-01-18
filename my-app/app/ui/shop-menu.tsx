"use client";

import type { LinksShopMenuProps } from '@/app/lib/definitions';
import { 
    linksDecksBaker,
    linksDecksBlind,
    linksDecksElement,
    linksDecksGirl,
    wheelsBones,
    wheelsSlimballs,
    wheelsSpitfire
} from '@/app/lib/shop-menu-lists'; 
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
                className={`cursor-pointer ${pathname === "/products"
                ? "text-lg ml-10 p-2 dark:text-cyan-200 text-violet-500"
                : "text-lg ml-10 p-2 hover:text-indigo-500 hover:scale-105 dark:hover:text-slate-50"}`}
                onClick={toggle}
            >
                Shop
            </span>

            <div className={`absolute text-md font-normal top-12 z-20 w-[140px] h-[auto] 
                dark:text-slate-50 bg-indigo-200 dark:bg-slate-800 mt-8 ml-1 rounded-br-lg \
                rounded-bl-lg ${transClass} flex-col`}
            >
                <Link 
                    href="/products"
                    onClick={toggle}
                    className="flex align-center justify-left hover:bg-indigo-300 dark:hover:bg-sky-700
                        hover:text-slate-200 px-3 pt-2 pb-1"
                >
                    <span><FaProductHunt className="mt-[3px] mr-4" size={18} /></span>
                    <p>Products</p>

                </Link>

                <hr className='border-t-slate-700 border-b-sky-800 px-14 m-auto' />
                
                <div id="parent" className='relative hover-trigger hover:bg-indigo-300 dark:hover:bg-sky-700'>
                    <Link href="/products/decks"
                        onClick={toggle}
                        className="flex align-center justify-left hover:bg-indigo-300 dark:hover:bg-sky-700 
                            hover:text-slate-200 px-3 pt-2 pb-1"
                    >
                        <span><MdSkateboarding className="mt-[3px] mr-4" size={18} /></span>
                        <p>Decks</p>
                    </Link>
                    
                    <div className='absolute top-0 w-[140px] hover-target bg-indigo-200 dark:bg-slate-800
                        ml-[140px]'>
                        
                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/baker" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 
                                    dark:hover:bg-sky-700 py-2 pl-4'>
                                    Baker
                                </p>
                            </Link>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 
                                dark:bg-slate-800 ml-[140px]'>
                                
                                {linksDecksBaker.map((linkbaker: LinksShopMenuProps) => (
                                    <div key={linkbaker.id}>
                                        <Link href={`/products/decks/baker/${linkbaker.id}`} onClick={toggle}>
                                            <p className='text-sm hover:bg-indigo-300 
                                                dark:hover:bg-sky-700 py-2 pl-4'>
                                                {linkbaker.name}
                                            </p>
                                        </Link>
                                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                    </div>
                                ))}

                            </div>
                        </div>

                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/blind" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 
                                    dark:hover:bg-sky-700 py-2 pl-4'>
                                    Blind
                                </p>
                            </Link>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 
                                dark:bg-slate-800 ml-[140px]'>

                                {linksDecksBlind.map((linkblind: LinksShopMenuProps) => (
                                    <div key={linkblind.id}>
                                        <Link href={`/products/decks/baker/${linkblind.id}`} onClick={toggle}>
                                            <p className='text-sm hover:bg-indigo-300 
                                                dark:hover:bg-sky-700 py-2 pl-4'>
                                                {linkblind.name}
                                            </p>
                                        </Link>
                                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                    </div>
                                ))}

                            </div>
                        </div>

                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/element" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 
                                    dark:hover:bg-sky-700 py-2 pl-4'>
                                    Element
                                </p>
                            </Link>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 
                                dark:bg-slate-800 ml-[140px]'>

                                {linksDecksElement.map((linkelement: LinksShopMenuProps) => (
                                    <div key={linkelement.id}>
                                        <Link href={`/products/decks/baker/${linkelement.id}`} onClick={toggle}>
                                            <p className='text-sm hover:bg-indigo-300 
                                                dark:hover:bg-sky-700 py-2 pl-4'>
                                                {linkelement.name}
                                            </p>
                                        </Link>
                                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                    </div>
                                ))}

                            </div>
                        </div>

                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/girl" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 
                                    dark:hover:bg-sky-700 py-2 pl-4'>
                                    Girl
                                </p>
                            </Link>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 
                                dark:bg-slate-800 ml-[140px]'>

                                {linksDecksGirl.map((linkgirl: LinksShopMenuProps) => (
                                    <div key={linkgirl.id}>
                                        <Link href={`/products/decks/baker/${linkgirl.id}`} onClick={toggle}>
                                            <p className='text-sm hover:bg-indigo-300 
                                                dark:hover:bg-sky-700 py-2 pl-4'>
                                                {linkgirl.name}
                                            </p>
                                        </Link>
                                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                
                <hr className='border-t-slate-700 border-b-sky-800 px-14 m-auto' />
                
                <Link href="/products/trucks"
                    onClick={toggle}
                    className="flex align-center justify-left hover:bg-indigo-300 dark:hover:bg-sky-700 
                        hover:text-slate-200 px-3 pt-2 pb-1"
                >
                    <span><CgMaximizeAlt className="mt-[3px] mr-4" size={18} /></span>
                    <p>Trucks</p>
                </Link>

                <hr className='border-t-slate-700 border-b-sky-800 px-14 m-auto' />

                <div id="parent" className='relative hover-trigger hover:bg-indigo-300 dark:hover:bg-sky-700'>
                    <Link href="/products/wheels"
                        onClick={toggle}
                        className="flex align-center justify-left hover:bg-indigo-300 dark:hover:bg-sky-700 
                            hover:text-slate-200 px-3 pt-2 pb-1"
                    >
                        <span><GiBoomerangSun className="mt-[3px] mr-4" size={18} /></span>
                        <p>Wheels</p>
                    </Link>
                    
                    <div className='absolute top-0 w-[140px] hover-target bg-indigo-200 dark:bg-slate-800
                        ml-[140px]'>
                        
                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/wheels/bones" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 
                                    dark:hover:bg-sky-700 py-2 pl-4'>
                                    Bones
                                </p>
                            </Link>
                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 
                                dark:bg-slate-800 ml-[140px]'>
                                
                                {wheelsBones.map((wbone: LinksShopMenuProps) => (
                                    <div key={wbone.id}>
                                        <Link href={`/products/wheels/bones/${wbone.id}`} onClick={toggle}>
                                            <p className='text-sm hover:bg-indigo-300 
                                                dark:hover:bg-sky-700 py-2 pl-4'>
                                                {wbone.name}
                                            </p>
                                        </Link>
                                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/wheels/slimballs" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 
                                    dark:hover:bg-sky-700 py-2 pl-4'>
                                    Slimballs
                                </p>
                            </Link>
                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 
                                dark:bg-slate-800 ml-[140px]'>

                                {wheelsSlimballs.map((wslim: LinksShopMenuProps) => (
                                    <div key={wslim.id}>
                                        <Link href={`/products/wheels/bones/${wslim.id}`} onClick={toggle}>
                                            <p className='text-sm hover:bg-indigo-300 
                                                dark:hover:bg-sky-700 py-2 pl-4'>
                                                {wslim.name}
                                            </p>
                                        </Link>
                                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/wheels/spitfire" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 
                                    dark:hover:bg-sky-700 py-2 pl-4'>
                                    Spitfire
                                </p>
                            </Link>
                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 
                                dark:bg-slate-800 ml-[140px]'>
                                
                                {wheelsSpitfire.map((wfire: LinksShopMenuProps) => (
                                    <div key={wfire.id}>
                                        <Link href={`/products/wheels/bones/${wfire.id}`} onClick={toggle}>
                                            <p className='text-sm hover:bg-indigo-300 
                                                dark:hover:bg-sky-700 py-2 pl-4'>
                                                {wfire.name}
                                            </p>
                                        </Link>
                                        <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
