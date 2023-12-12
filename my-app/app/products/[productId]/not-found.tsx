import React from 'react';
import Link from 'next/link';

export default function NotFount() {
  return (
    <div className='w-full py-[150px] flex flex-col align-center justify-center'>
      <div className='m-auto'>
        <h2 className='text-3xl font-bold mb-2'>
          Page not found...
        </h2>
        <Link 
          href="/products" 
          className='dark:text-sky-500 dark:hover:text-sky-600 dark:active:text-sky-400
            text-purple-500 hover:text-purple-600 active:text-purple-400'>
          Back to shop
        </Link>
      </div>
    </div>
  )
}