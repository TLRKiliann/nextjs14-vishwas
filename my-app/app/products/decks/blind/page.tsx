import React from 'react';
import { Metadata } from 'next';
import { genericQuery } from '@/app/lib/db';
import DecksCards from '@/app/ui/products/decks/decks-cards';

export const metadata: Metadata = {
  title: {
      absolute: "Blind's Decks"
  },
  description: "list of Blind's decks"
}

export default async function BlindDecks() {

  const request = await genericQuery("SELECT * FROM blinddecks", []);
  const data: string = JSON.stringify(request);
  
  if (!data) {
    throw new Error("Error: data not loaded for blind's decks");
  }

  return (
    <div className='min-h-screen py-[75px]'>
      <h1 className='baker-blind-element-girl-title'>
        Blind&apos;s Decks
      </h1>

      <DecksCards data={JSON.parse(data)} />

    </div>
  )
}
