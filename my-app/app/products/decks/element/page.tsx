import React from 'react';
import { Metadata } from 'next';
import { genericQuery } from '@/app/lib/db';
import DecksCards from '@/app/ui/products/decks/decks-cards';

export const metadata: Metadata = {
  title: {
      absolute: "Element's Decks"
  },
  description: "list of Element's decks"
}

export default async function ElementDecks() {

  const request = await genericQuery("SELECT * FROM elementdecks", []);
  const data: string = JSON.stringify(request);
  
  if (!data) {
    throw new Error("Error: data not loaded for element's decks");
  }

  return (
    <div className='min-h-screen py-[75px]'>
      <h1 className='baker-blind-element-girl-title'>
        Element&apos;s Decks
      </h1>

      <DecksCards data={JSON.parse(data)} />

    </div>
  )
}
