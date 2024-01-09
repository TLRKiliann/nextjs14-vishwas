"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import deckImg from '@/public/img_decks/deck-h.png';

export default function NavigationMenu() {
    
    const [closeMenu, setCloseMenu] = useState<boolean>(false);

    const handleCloseMenu = (): void => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className='fixed top-[70px] right-[20px] w-[200px] h-auto text-lg bg-none'>

            <div onClick={handleCloseMenu} className='flex items-center text-amber-900 cursor-pointer 
                active:text-amber-500 transform hover:scale-105 active:scale-95'>
                <h2 className='absolute w-full text-2xl font-bold text-center mt-2 z-10'>
                    Decks
                </h2>
                <div className='flex items-center justify-center w-200 h-auto'>
                    <Image src={deckImg} width={550} height={200} alt="img deck"
                        className="object-cover"
                    />
                </div>
            </div>

            {closeMenu ? (
                <div className='font-bold dark:text-amber-900 bg-orange-200 transition transform 
                    duration-300 ease-in-out rounded-lg'>
                    <li className='mt-1 ml-8 py-2 hover:text-amber-700 active:text-amber-500'>
                        <Link href="/products/decks/baker">
                            Baker
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='ml-8 py-2 hover:text-amber-700 active:text-amber-500'>
                        <Link href="/products/decks/blind">
                            Blind
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='ml-8 py-2 hover:text-amber-700 active:text-amber-500'>
                        <Link href="/products/decks/element">
                            Element
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='ml-8 py-2 hover:text-amber-700 active:text-amber-500'>
                        <Link href="/products/decks/girl">
                            Girl
                        </Link>
                    </li>
                </div>
            ) : null}
        </div>
    )
}
