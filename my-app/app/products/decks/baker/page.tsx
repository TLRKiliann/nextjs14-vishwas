import React from 'react';
import BakerDecksCards from '@/app/ui/products/decks/baker-decks';

export default function BakerDecks() {
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
        Baker Decks
      </h1>

      <div>
        <BakerDecksCards />
      </div>

    </div>
  )
}
