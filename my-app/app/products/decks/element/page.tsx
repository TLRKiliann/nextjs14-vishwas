import type { Metadata } from 'next';
import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import { queryDecks } from '@/app/lib/db';
import DecksCards from '@/app/ui/products/decks/decks-cards';

export const metadata: Metadata = {
  title: {
      absolute: "Element's Decks"
  },
  description: "list of Element's decks"
}

export default async function ElementDecks() {

  const request: ProductsProps[] = await queryDecks("SELECT * FROM elementdecks", []);
  const data: string = JSON.stringify(request);
  
  if (!data) {
    throw new Error("Error: data not loaded for element's decks");
  }

  return (
    <div className='w-full min-h-screen bg-violet-100/20 dark:bg-slate-900 py-[75px]'>
      <h1 className='w-[400px] baker-blind-element-girl-title'>
        Element&apos;s Decks
      </h1>

      <DecksCards data={JSON.parse(data)} />

    </div>
  )
}
