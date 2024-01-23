import type { Metadata } from 'next';
import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import { queryDecks } from '@/app/lib/db';
import DecksCards from '@/app/ui/products/decks/decks-cards';

export const metadata: Metadata = {
  title: {
      absolute: "Blind's Decks"
  },
  description: "list of Blind's decks"
};

export default async function BlindDecks() {

  const request: ProductsProps[] = await queryDecks("SELECT * FROM blinddecks", []);
  const data: string = JSON.stringify(request);
  
  if (!data) {
    throw new Error("Error: data not loaded for blind's decks");
  };

  return (
    <div className='w-full min-h-screen bg-violet-100/20 dark:bg-slate-900 py-[75px]'>
      <h1 className='w-[320px] baker-blind-element-girl-title'>
        Blind&apos;s Decks
      </h1>

      <DecksCards data={JSON.parse(data)} />

    </div>
  )
};
