import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import deckImg from '@/public/img_decks/deck-h.png';

export default function NavigationMenu() {
    return (
        <div className='fixed top-[75px] right-0 w-[160px] text-lg text-slate-600 bg-slate-100 
            border border-slate-500/60 rounded-bl-md'>
            
            <div className='flex border'>
                <h2 className='absolute w-full text-xl font-bold text-center mt-[46px] z-10'>
                    Decks
                </h2>
                <div className='flex justify-center w-full'>
                    <Image src={deckImg} width={140} height={140} alt="img deck"
                        className="object-cover"
                    />
                </div>
            </div>

            <li className='my-2 ml-8 hover:text-sky-800'>
                <Link href="/products/decks/baker">
                    Baker
                </Link>
            </li>
            <hr className='border-t-slate-500/60' />
            <li className='my-2 ml-8 hover:text-sky-700'>
                <Link href="/products/decks/blind">
                    Blind
                </Link>
            </li>
            <hr className='border-t-slate-500/60' />
            <li className='my-2 ml-8 hover:text-sky-700'>
                <Link href="/products/decks/element">
                    Element
                </Link>
            </li>
            <hr className='border-t-slate-500/60' />
            <li className='my-2 ml-8 hover:text-sky-700'>
                <Link href="/products/decks/girl">
                    Girl
                </Link>
            </li>
        </div>
    )
}
