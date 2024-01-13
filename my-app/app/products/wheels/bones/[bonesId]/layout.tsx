import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';

type ParamsProps = {
  bonesId: string;
}

type Props = {
  params: {
    bonesId: string;
  }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Bones ${params.bonesId}`)
    }, 300)
  })
  return {
    title: `Wheel ${title}`
  }
}

export default async function DetailsProduct({children, params}: 
  {children: React.ReactNode, params: ParamsProps}
  ) {
  return (
    <div className='text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-900'>
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'
      >
        Bones wheel
      </h1>
      <div className='flex flex-col'>
        <Link href="/products/wheels" className='text-lg custom-link py-2 pl-4'>
          Back to wheels
        </Link>
        <Link href="/products" className='text-lg custom-link py-2 pl-4'>
          Back to products
        </Link>
      </div>
        {children}
    </div>
  )
}