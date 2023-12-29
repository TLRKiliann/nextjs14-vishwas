import React from 'react';
import { Metadata } from 'next';
import { genericQuery } from '@/app/lib/db';
import BakerDecksCards from '@/app/ui/products/decks/baker-decks';

export const metadata: Metadata = {
  title: {
      absolute: "Baker's Decks"
  },
  description: "list of Baker's decks"
}

export default async function BakerDecks() {

  const request = await genericQuery("SELECT * FROM bakerdecks", []);
  const data = JSON.stringify(request);
  
  if (!data) {
    throw new Error("Error: data not loaded for baker's decks");
  }

  return (
    <div className='min-h-screen py-[75px]'>
      <h1 className='text-4xl font-bold 
        text-transparent bg-clip-text
        dark:bg-gradient-to-br dark:from-indigo-500 dark:from-10% 
        dark:via-sky-500 dark:via-50% dark:to-emerald-500 dark:to-90%
        bg-gradient-to-br from-violet-500 from-10% 
        via-purple-500 via-50% to-violet-200 to-90%
        p-4'
      >
        Baker&apos;s Decks
      </h1>

      <BakerDecksCards bakerdecks={JSON.parse(data)} />

    </div>
  )
}
