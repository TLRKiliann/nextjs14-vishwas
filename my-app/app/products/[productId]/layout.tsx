import React from 'react';
import Link from 'next/link';

type Props = {
  productId: string;
}

export default async function DetailsProduct({children, params}: 
  {children: React.ReactNode, params: Props}
  ) {
  return (
    <div className='min-h-screen bg-slate-100 text-slate-900 dark:text-slate-50 dark:bg-slate-900 py-[75px]'>
        <h1 className='text-4xl font-bold 
            text-transparent bg-clip-text
            dark:bg-gradient-to-br dark:from-indigo-500 dark:from-10% 
            dark:via-sky-500 dark:via-50% dark:to-emerald-500 dark:to-90%
            bg-gradient-to-br from-violet-500 from-10% 
            via-purple-500 via-50% to-violet-200 to-90%
            p-4'
        >
          Products
        </h1>
          {children}
        <li className='text-md font-bold text-sky-500 hover:text-sky-400 p-4'>
          <Link href="/cart">Display Cart</Link>
        </li>
        <li className='text-md font-bold text-sky-500 hover:text-sky-400 p-4'>
          <Link href={`/products/${params.productId}/reviews`}>All articles</Link>
        </li>
    </div>
  )
}
