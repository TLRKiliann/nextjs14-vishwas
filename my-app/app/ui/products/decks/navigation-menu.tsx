"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import deckImg from '@/public/img_decks/deck-h.png';

export default function NavigationMenu() {
    
    const [closeMenu, setCloseMenu] = useState<boolean>(false);

    const handleCloseMenuDecks = (): void => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className='fixed top-[75px] right-[20px] w-[200px] h-auto text-lg bg-none z-20'>

            <div onClick={handleCloseMenuDecks} className='flex items-center cursor-pointer 
                transform hover:scale-105 active:scale-95'>
                <h2 className='absolute w-full text-2xl font-bold text-center text-transparent 
                    bg-clip-text dark-title-h1 light-title-h1 mt-2'>
                    Decks
                </h2>
                <div className='flex items-center justify-center w-200 h-auto'>
                    <Image src={deckImg} width={550} height={200} alt="img deck"
                        className="object-cover"
                    />
                </div>
            </div>

            {closeMenu ? (
                <div className='font-bold dark:text-amber-900 bg-orange-200 pl-6 transition transform 
                    duration-300 ease-in-out rounded-lg z-30'>
                    <li className='custom-li py-1'>
                        <Link href="/products/decks/baker" className='custom-link'>
                            Baker
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li py-1'>
                        <Link href="/products/decks/blind" className='custom-link'>
                            Blind
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li py-1'>
                        <Link href="/products/decks/element" className='custom-link'>
                            Element
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li py-1'>
                        <Link href="/products/decks/girl" className='custom-link'>
                            Girl
                        </Link>
                    </li>
                </div>
            ) : null}
        </div>
    )
}
