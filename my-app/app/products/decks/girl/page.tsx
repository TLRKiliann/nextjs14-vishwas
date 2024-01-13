import { Metadata } from 'next';
import React from 'react';
import { genericQuery } from '@/app/lib/db';
import DecksCards from '@/app/ui/products/decks/decks-cards';

export const metadata: Metadata = {
  title: {
      absolute: "Girl's Decks"
  },
  description: "list of Girl's decks"
}

export default async function GirlDecks() {

  const request: unknown = await genericQuery("SELECT * FROM girldecks", []);
  const data: string = JSON.stringify(request);
  
  if (!data) {
    throw new Error("Error: data not loaded for girl's decks");
  }

  return (
    <div className='min-h-screen bg-slate-900 py-[75px]'>
      <h1 className='baker-blind-element-girl-title'>
        Girl&apos;s Decks
      </h1>

      <DecksCards data={JSON.parse(data)} />

    </div>
  )
}
