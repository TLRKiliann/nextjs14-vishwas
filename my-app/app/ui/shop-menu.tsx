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
                                <Link href="/products/decks/baker/1" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker One
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/baker/2" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker Two
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/baker/3" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker Three
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/baker/4" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker Four
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/baker/5" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker Five
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/baker/6" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker Six
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/baker/7" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker Seven
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/baker/8" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker Eight
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/baker/9" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Baker Nine
                                    </p>
                                </Link>

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
                                <Link href="/products/decks/blind/10" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind One
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/blind/11" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind Two
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/blind/12" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind Three
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/blind/13" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind Four
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/blind/14" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind Five
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/blind/15" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind Six
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/blind/16" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind Seven
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/blind/17" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind Eight
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/blind/18" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Blind Nine
                                    </p>
                                </Link>

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
                                <Link href="/products/decks/element/19" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element One
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/element/20" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element Two
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/element/21" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element Three
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/element/22" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element Four
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/element/23" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element Five
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/element/24" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element Six
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/element/25" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element Seven
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/element/26" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element Eight
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/element/27" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Element Nine
                                    </p>
                                </Link>

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
                                <Link href="/products/decks/girl/28" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl One
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/girl/29" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl Two
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/girl/30" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl Three
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/girl/31" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl Four
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/girl/32" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl Five
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/girl/33" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl Six
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/girl/34" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl Seven
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/girl/35" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl Eight
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/decks/girl/36" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Girl Nine
                                    </p>
                                </Link>

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
                                <Link href="/products/wheels/bones/37" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Bones One
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/wheels/bones/38" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Bones Two
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />

                                <Link href="/products/wheels/bones/39" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Bones Three
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />


                                <Link href="/products/wheels/bones/40" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Bones Four
                                    </p>
                                </Link>

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
                                <Link href="/products/wheels/slimballs/41" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Slimballs One
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/wheels/slimballs/42" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Slimballs Two
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />

                                <Link href="/products/wheels/slimballs/43" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Slimballs Three
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />


                                <Link href="/products/wheels/slimballs/44" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Slimballs Four
                                    </p>
                                </Link>

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
                                <Link href="/products/wheels/spitfire/45" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Spitfire One
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />
                                <Link href="/products/wheels/spitfire/46" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Spitfire Two
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />

                                <Link href="/products/wheels/spitfire/47" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Spitfire Three
                                    </p>
                                </Link>
                                <hr className='w-4/5 border-t-slate-700 border-b-sky-800 m-auto' />


                                <Link href="/products/wheels/spitfire/48" onClick={toggle}>
                                    <p className='text-sm hover:bg-indigo-300 
                                        dark:hover:bg-sky-700 py-2 pl-4'>
                                        Spitfire Four
                                    </p>
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
