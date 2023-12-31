import React from 'react';
import { Metadata } from 'next';
import { genericQuery } from '@/app/lib/db';
import DecksCards from '@/app/ui/products/decks/decks-cards';

export const metadata: Metadata = {
  title: {
    absolute: "Baker's Decks"
  },
  description: "list of Baker's decks"
}

export default async function BakerDecks() {

  const request: unknown = await genericQuery("SELECT * FROM bakerdecks", []);
  const data: string = JSON.stringify(request);

  if (!data) {
    throw new Error("Error: data not loaded for baker's decks");
  }

  return (
    <div className='min-h-screen bg-slate-900 py-[75px]'>
      <h1 className='baker-blind-element-girl-title'>
        Baker&apos;s Decks
      </h1>

      <DecksCards data={JSON.parse(data)} />

    </div>
  )
}
