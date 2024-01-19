import React from 'react';
import NavigationMenu from '@/app/ui/products/decks/navigation-menu';
import Image from 'next/image';
import deckTitle from "@/public/img_decks/deck-h.png";
import SearchUrl from '@/app/ui/products/search-url';

export default function LayoutBoardShop({children}: {children: React.ReactNode}) {
    return (
        <div className='bg-slate-100 dark:bg-slate-900 py-[75px]'>
            <div className='flex items-center justify-center w-full h-auto'>
                <Image
                    src={deckTitle}
                    width={550}
                    height={200}
                    alt="alt"
                    className="object-cover w-[400px] h-auto opacity-90"
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
            <NavigationMenu />
        </div>
    )
}