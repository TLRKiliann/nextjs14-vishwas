"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import deckImg from '@/public/img_decks/deck-h.png';

export default function NavigationWheels() {
    
    const [closeMenu, setCloseMenu] = useState<boolean>(false);

    const handleCloseMenuWheels = (): void => {
        setCloseMenu(!closeMenu);
    };

    return (
        <div className='fixed top-[140px] right-[20px] w-[200px] h-auto text-lg bg-none z-0'>

            <div onClick={handleCloseMenuWheels} className='flex items-center text-amber-900 cursor-pointer 
                active:text-amber-500 transform hover:scale-105 active:scale-95'>
                <h2 className='absolute w-full text-2xl font-bold text-center text-transparent 
                    bg-clip-text dark-title-h1 light-title-h1 mt-2'>
                    Wheels
                </h2>
                <div className='flex items-center justify-center w-200 h-auto'>
                    <Image src={deckImg} width={550} height={200} alt="img deck"
                        className="object-cover"
                    />
                </div>
            </div>

            {closeMenu ? (
                <div className='font-bold dark:text-amber-900 bg-orange-200 pl-6 transition transform 
                    duration-300 ease-in-out rounded-lg'>
                    <li className='custom-li'>
                        <Link href="/products/wheels/bones/37" className="custom-link">
                            Bones One
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/bones/38" className="custom-link">
                            Bones Two
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/bones/39" className="custom-link">
                            Bones Three
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/bones/40" className="custom-link">
                            Bones Four
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/slimballs/41" className="custom-link">
                            Slimballs One
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/slimballs/42" className="custom-link">
                            Slimballs Two
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/slimballs/43" className="custom-link">
                            Slimballs Three
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/slimballs/44" className="custom-link">
                            Slimballs Four
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/spitfire/45" className="custom-link">
                            Spitfire One
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/spitfire/46" className="custom-link">
                            Spitfire Two
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/spitfire/47" className="custom-link">
                            Spitfire Three
                        </Link>
                    </li>
                    <hr className='border-t-amber-500/60' />
                    <li className='custom-li'>
                        <Link href="/products/wheels/spitfire/48" className="custom-link">
                            Spitfire Four
                        </Link>
                    </li>
                </div>
            ) : null}
        </div>
    )
}
