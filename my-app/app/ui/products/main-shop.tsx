"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import deckProfile from '@/public/img_decks/deck-h.png';
import deckHorizon from '@/public/img_decks/deck2-h.png';

type ShopProps = {
    link: string;
    children: React.ReactNode;
}

export default function MainShop({link, children}: ShopProps) {

    const [deckBool, setDeckBool] = useState<boolean>(false);

    const handleDecks = () => {
        setDeckBool((deckBool) => !deckBool)
    }

    return (
        <div className='flex'>

            {deckBool === false ? (
                <div className='flex flex-col items-center justify-center w-full h-[340px]'>

                    <Link
                        href={`${link}`}
                        onClick={handleDecks}  
                        className='relative transform ease-in-out duration-300 active:rotate-x-[180deg] z-0'
                    >

                        <h2 
                            className='absolute flex items-center justify-center w-full h-full 
                                text-5xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-t from-fuchsia-700 from-30% 
                                to-yellow-400 to-70% z-10'>{/* animate-scale-decks */}
                            {children}
                        </h2>

                        <Image
                            src={deckProfile}
                            width={400}
                            height={200}
                            alt="img deck-profile"
                            className="object-cover"
                        />
                    </Link>
                </div>
            ) : (
                <div className='flex items-center justify-center w-full h-[340px]'>
                    <Image
                        src={deckHorizon}
                        width={400}
                        height={200}
                        alt="img deck-horizon"
                        className="object-cover"
                    />
                </div>
            )}
        </div>
    )
}
