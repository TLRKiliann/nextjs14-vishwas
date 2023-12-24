import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import MenuDecks from '@/app/ui/products/decks/menu-decks';
import allanSkate from "@/public/img_bg/pexels-allan-mas.jpg";
import deckFlip from "@/public/img_decks/deck.png";

export const metadata: Metadata = {
  title: "decks",
  description: "access accepted"
}

export default function BoardShop() {
  return (
    <div className='min-h-screen bg-transparent py-[75px]'>
    
      <div className='fixed -z-20'>
        <Image
          src={allanSkate}
          width={1920}
          height={1080}
          alt="img bg"
          className='opacity-10 object-cover'
        />
      </div>

      <MenuDecks />
      <div className='absolute w-full h-[600px] overflow-hidden -z-10 border'>
        <div className='flex items-center justify-center w-full h-full border'>
          {/* animate-deck-flip */}
          <Image
            src={deckFlip}
            width={300}
            height={300}
            alt="alt"
            className="object-cover opacity-1"
          />
        </div>
      </div>

    </div>
  )
}
