"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import deckImg from '@/public/img_decks/deck-h.png';

export default function NavigationMenu() {
    
    const [closeMenu, setCloseMenu] = useState<boolean>(false);

    const handleCloseMenu = (): void => {
        setCloseMenu(!closeMenu)
    };

    return (
        <div className='fixed top-[80px] right-[10px] w-[160px] text-lg text-slate-600 bg-none'>

            <div onClick={handleCloseMenu} className='flex cursor-pointer hover:opacity-80 active:opacity-60'>
                <h2 className='absolute w-full text-xl font-bold text-center mt-3 z-10'>
                    Decks
                </h2>
                <div className='flex justify-center w-full'>
                    <Image src={deckImg} width={140} height={140} alt="img deck"
                        className="object-cover"
                    />
                </div>
            </div>

            {closeMenu ? (
                <div className='bg-slate-100 transform transition ease-in-out'>
                    <li className='mt-2 ml-8 py-2 hover:text-sky-800'>
                        <Link href="/products/decks/baker">
                            Baker
                        </Link>
                    </li>
                    <hr className='border-t-slate-500/60' />
                    <li className='ml-8 py-2 hover:text-sky-700'>
                        <Link href="/products/decks/blind">
                            Blind
                        </Link>
                    </li>
                    <hr className='border-t-slate-500/60' />
                    <li className='ml-8 py-2 hover:text-sky-700'>
                        <Link href="/products/decks/element">
                            Element
                        </Link>
                    </li>
                    <hr className='border-t-slate-500/60' />
                    <li className='ml-8 py-2 hover:text-sky-700'>
                        <Link href="/products/decks/girl">
                            Girl
                        </Link>
                    </li>
                </div>
            ) : null}
        </div>
    )
}
