import React from 'react'
import Link from 'next/link';

export default function BoardShop() {
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
        Decks
      </h1>

      <div className='border'>

        <div className='border'>

          <h2>Baker</h2>

          <Link href="/products/decks/baker">
            All decks of Baker
          </Link>

        </div>

        <div className='border'>
          
          <h2>Blind</h2>

          <Link href="/products/decks/blind">
            All decks of Blind
          </Link>

        </div>

        <div className='border'>
          
          <h2>Girl</h2>

          <Link href="/products/decks/girl">
            All decks of Girl
          </Link>

        </div>

        <div className='border'>
          
          <h2>Element</h2>

          <Link href="/products/decks/element">
            All decks of Element
          </Link>

        </div>

      </div>

    </div>
  )
}
