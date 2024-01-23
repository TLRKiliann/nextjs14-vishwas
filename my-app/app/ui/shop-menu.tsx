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
import { RiTapeFill } from "react-icons/ri";

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
                    className="flex items-center justify-start hover:bg-indigo-300 dark:hover:bg-sky-700
                        hover:text-slate-200 active:bg-indigo-400 dark:active:bg-sky-500 px-3 py-2"
                >
                    <span><FaProductHunt className="mr-4" size={18} /></span>
                    <p>Products</p>

                </Link>

                <hr className='shopmenu-hr' />
                
                <div id="parent" className='relative hover-trigger hover:bg-indigo-300 dark:hover:bg-sky-700'>
                    <Link href="/products/decks"
                        onClick={toggle}
                        className="shopmenu-mainlink"
                    >
                        <span><MdSkateboarding className="mr-4" size={18} /></span>
                        <p>Decks</p>
                    </Link>
                    
                    <div className='absolute top-0 w-[140px] hover-target bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>
                        
                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/baker" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 dark:hover:bg-sky-700 active:bg-indigo-400 
                                dark:active:bg-sky-500 py-2 pl-4'>
                                    Baker
                                </p>
                            </Link>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>
                                
                                {linksDecksBaker.map((linkbaker: LinksShopMenuProps) => (
                                    <div key={linkbaker.id}>
                                        <Link href={`/products/decks/baker/${linkbaker.id}`} onClick={toggle}>
                                            <p className='shopmenu-sublinkmapped'>
                                                {linkbaker.name}
                                            </p>
                                        </Link>
                                        <hr className='shopmenu-hrmapped' />
                                    </div>
                                ))}

                            </div>
                        </div>

                        <hr className='shopmenu-hrmapped' />

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/blind" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 dark:hover:bg-sky-700 active:bg-indigo-400 
                                dark:active:bg-sky-500 py-2 pl-4'>
                                    Blind
                                </p>
                            </Link>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>

                                {linksDecksBlind.map((linkblind: LinksShopMenuProps) => (
                                    <div key={linkblind.id}>
                                        <Link href={`/products/decks/blind/${linkblind.id}`} onClick={toggle}>
                                            <p className='shopmenu-sublinkmapped'>
                                                {linkblind.name}
                                            </p>
                                        </Link>
                                        <hr className='shopmenu-hrmapped' />
                                    </div>
                                ))}

                            </div>
                        </div>

                        <hr className='shopmenu-hrmapped' />

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/element" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 dark:hover:bg-sky-700 active:bg-indigo-400 
                                dark:active:bg-sky-500 py-2 pl-4'>
                                    Element
                                </p>
                            </Link>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>

                                {linksDecksElement.map((linkelement: LinksShopMenuProps) => (
                                    <div key={linkelement.id}>
                                        <Link href={`/products/decks/element/${linkelement.id}`} onClick={toggle}>
                                            <p className='shopmenu-sublinkmapped'>
                                                {linkelement.name}
                                            </p>
                                        </Link>
                                        <hr className='shopmenu-hrmapped' />
                                    </div>
                                ))}

                            </div>
                        </div>

                        <hr className='shopmenu-hrmapped' />

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/girl" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 dark:hover:bg-sky-700 active:bg-indigo-400 
                                dark:active:bg-sky-500 py-2 pl-4'>
                                    Girl
                                </p>
                            </Link>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>

                                {linksDecksGirl.map((linkgirl: LinksShopMenuProps) => (
                                    <div key={linkgirl.id}>
                                        <Link href={`/products/decks/girl/${linkgirl.id}`} onClick={toggle}>
                                            <p className='shopmenu-sublinkmapped'>
                                                {linkgirl.name}
                                            </p>
                                        </Link>
                                        <hr className='shopmenu-hrmapped' />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                
                <hr className='shopmenu-hr' />
                
                <Link href="/products/trucks"
                    onClick={toggle}
                    className="flex items-center justify-start hover:bg-indigo-300 dark:hover:bg-sky-700 
                        hover:text-slate-200 active:bg-indigo-400 dark:active:bg-sky-500 px-3 py-2"
                >
                    <span><CgMaximizeAlt className="mr-4" size={18} /></span>
                    <p>Trucks</p>
                </Link>

                <hr className='shopmenu-hr' />

                <div id="parent" className='relative hover-trigger hover:bg-indigo-300 dark:hover:bg-sky-700'>
                    <Link href="/products/wheels"
                        onClick={toggle}
                        className="shopmenu-mainlink"
                    >
                        <span><GiBoomerangSun className="mr-4" size={18} /></span>
                        <p>Wheels</p>
                    </Link>
                    
                    <div className='absolute top-0 w-[140px] hover-target bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>
                        
                        <div className='relative hover-trigger2'>

                            <p className='text-sm hover:bg-indigo-300 dark:hover:bg-slate-800 py-2 pl-4'>
                                Bones
                            </p>
                            
                            <hr className='shopmenu-hrmapped' />

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>
                                
                                {wheelsBones.map((wbone: LinksShopMenuProps) => (
                                    <div key={wbone.id}>
                                        <Link href={`/products/wheels/bones/${wbone.id}`} onClick={toggle}>
                                            <p className='shopmenu-sublinkmapped'>
                                                {wbone.name}
                                            </p>
                                        </Link>
                                        <hr className='shopmenu-hrmapped' />
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className='relative hover-trigger2'>

                            <p className='text-sm hover:bg-indigo-300 dark:hover:bg-slate-800 py-2 pl-4'>
                                Slimballs
                            </p>

                            <hr className='shopmenu-hrmapped' />

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>

                                {wheelsSlimballs.map((wslim: LinksShopMenuProps) => (
                                    <div key={wslim.id}>
                                        <Link href={`/products/wheels/slimballs/${wslim.id}`} onClick={toggle}>
                                            <p className='shopmenu-sublinkmapped'>
                                                {wslim.name}
                                            </p>
                                        </Link>
                                        <hr className='shopmenu-hrmapped' />
                                    </div>
                                ))}

                            </div>

                        </div>

                        <div className='relative hover-trigger2'>

                            <p className='text-sm hover:bg-indigo-300 dark:hover:bg-slate-800 py-2 pl-4'>
                                Spitfire
                            </p>

                            <div className='absolute top-0 w-[140px] hover-target2 bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>
                                
                                {wheelsSpitfire.map((wfire: LinksShopMenuProps) => (
                                    <div key={wfire.id}>
                                        <Link href={`/products/wheels/spitfire/${wfire.id}`} onClick={toggle}>
                                            <p className='shopmenu-sublinkmapped'>
                                                {wfire.name}
                                            </p>
                                        </Link>
                                        <hr className='shopmenu-hrmapped' />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

                <hr className='shopmenu-hr' />
                
                <div id="parent" className='relative hover-trigger hover:bg-indigo-300 dark:hover:bg-sky-700
                    rounded-br-lg rounded-bl-lg'>
                    <Link href="/products/decks"
                        onClick={toggle}
                        className="shopmenu-mainlink"
                    >
                        <span><RiTapeFill className="mr-4" size={18} /></span>
                        <p>Video</p>
                    </Link>
                    
                    <div className='absolute top-0 w-[140px] hover-target bg-indigo-200 dark:bg-slate-800 ml-[140px] z-20'>
                        
                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/baker/1/reviews" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 dark:hover:bg-sky-700 active:bg-indigo-400 
                                dark:active:bg-sky-500 py-2 pl-4'>
                                    Baker video
                                </p>
                            </Link>
                        </div>

                        <hr className='shopmenu-hrmapped' />

                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/blind/10/reviews" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 dark:hover:bg-sky-700 active:bg-indigo-400 
                                dark:active:bg-sky-500 py-2 pl-4'>
                                    Blind video
                                </p>
                            </Link>
                        </div>
                    
                        <hr className='shopmenu-hrmapped' />
                            
                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/element/19/reviews" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 dark:hover:bg-sky-700 active:bg-indigo-400 
                                dark:active:bg-sky-500 py-2 pl-4'>
                                    Element video
                                </p>
                            </Link>

                        </div>
                    
                        <hr className='shopmenu-hrmapped' />
                    
                        <div className='relative hover-trigger2 hover:bg-indigo-300 dark:hover:bg-sky-700'>

                            <Link href="/products/decks/girl/28/reviews" onClick={toggle}>
                                <p className='text-sm hover:bg-indigo-300 dark:hover:bg-sky-700 active:bg-indigo-400 
                                dark:active:bg-sky-500 py-2 pl-4'>
                                    Girl video
                                </p>
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}