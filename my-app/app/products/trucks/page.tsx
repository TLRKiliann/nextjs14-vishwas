import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import deckFlip from "@/public/img_decks/deck-h.png";
import imgTruck from '@/public/img_trucks/ace_1.jpg';
import TrucksCards from '@/app/ui/products/trucks/trucks-cards';

export const metadata: Metadata = {
  title: "Wheels",
  description: "access accepted"
};

export default function AxisShop() {

  // call db mysql

  return (
    <div className='min-h-screen bg-slate-200 dark:bg-slate-900 py-[75px]'>

      <div className='flex items-center justify-center w-full h-auto overflow-hidden'>
        <Image
          src={deckFlip}
          width={550}
          height={200}
          alt="deck-truck img"
          className="object-cover w-[400px] h-auto opacity-90"
        />
        <h2 className='absolute text-5xl font-bold text-transparent bg-clip-text dark-title-h1 
          light-title-h1 mt-3'>
          Trucks
        </h2>
      </div>

      <TrucksCards />

    </div>
  )
}
