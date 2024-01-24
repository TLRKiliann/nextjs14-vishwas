import React from 'react';
import Link from 'next/link';
import NavigationMenu from '@/app/ui/products/decks/navigation-menu';
import Image from 'next/image';
import deckTitle from "@/public/img_decks/deck-h.png";
import SearchUrl from '@/app/ui/products/search-url';

export default function LayoutBoardShop({children}: {children: React.ReactNode}) {
    return (
        <div className='bg-slate-100 dark:bg-slate-900 py-[75px]'>
            <div className="absolute left-4 flex flex-col text-lg mt-8 pt-4 pl-4">
                <li className='custom-li'>
                    <Link href="/products" className="custom-link">
                        Go back to products
                    </Link>
                </li>
                <li className='custom-li'>
                    <Link href="/products/trucks" className='custom-link'>
                        Go to trucks
                    </Link>
                </li>
            </div>

            <div className='flex items-center justify-center w-full h-auto'>
                <Image
                    src={deckTitle}
                    width={550}
                    height={200}
                    alt="alt"
                    className="w-[400px] h-auto opacity-90 object-cover"
                />
                <h2 className='absolute text-5xl font-bold text-transparent bg-clip-text dark-title-h1 
                    light-title-h1 mt-3'>
                    Wheels
                </h2>
            </div>
            <div className="absolute flex flex-col items-center justify-center w-full mt-4">
                <SearchUrl placeholder="Search by product name..." />
            </div>
            {children}
            <div className='fixed'>
                <NavigationMenu />
            </div>
        </div>
    )
}