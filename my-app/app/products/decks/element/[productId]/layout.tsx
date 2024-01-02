import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

type ParamsProps = {
  productId: string;
}

type Props = {
  params: {
    productId: string;
  }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Deck ${params.productId}`)
    }, 300)
  })
  return {
    title: `Element's ${title}`
  }
}

export default async function DetailsProduct({children, params}: 
  {children: React.ReactNode, params: ParamsProps}
  ) {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 
      dark:text-slate-50 dark:bg-slate-900 py-[75px]'>
      <h1 className='text-4xl font-bold text-transparent bg-clip-text
          dark-title-h1 light-title-h1 p-4'
      >
        Element&apos;s Decks
      </h1>
        {children}
      <li className='text-md font-bold text-sky-500 hover:text-sky-400 p-4'>
        <Link href="/order">Go to checkout</Link>
      </li>
      <li className='text-md font-bold text-sky-500 hover:text-sky-400 p-4'>
        <Link href={`/products/decks/element/${params.productId}/reviews`}>All articles</Link>
      </li>
    </div>
  )
}