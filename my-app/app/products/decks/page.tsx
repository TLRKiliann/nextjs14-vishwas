import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import MenuDecks from '@/app/ui/products/decks/menu-decks';
import allanSkate from "@/public/img_bg/pexels-allan-mas.jpg";
import deckFlip from "@/public/img_decks/deck.png";

export const metadata: Metadata = {
  title: "Decks",
  description: "access accepted"
}

export default function BoardShop() {
  return (
    <div className='min-h-screen py-[75px] mb-[80px]'>
    
      <div className='fixed -z-20'>
        <Image
          src={allanSkate}
          width={1920}
          height={1080}
          alt="img bg"
          className='opacity-50 object-cover'
        />
      </div>

      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 pl-4 pt-4'>
        Decks
      </h1>

      <MenuDecks />
      
      <div className='absolute right-0 w-2/5 md:h-[500px] xl:h-[800px] overflow-hidden -z-10'>
        <div className='flex items-center justify-center w-full h-full animate-deck-flip'>
          <Image
            src={deckFlip}
            width={150}
            height={150}
            alt="alt"
            className="object-cover opacity-90"
          />
          <h2 className='absolute text-5xl font-bold text-transparent bg-clip-text dark-title-h1 
            light-title-h1 rotate-90 ml-2'>
            DECKS
          </h2>
        </div>
      </div>

    </div>
  )
}
