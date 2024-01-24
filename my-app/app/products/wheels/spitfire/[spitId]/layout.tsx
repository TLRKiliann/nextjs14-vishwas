import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import AccessWheels from '@/app/ui/products/wheels/access-wheels';

type Props = {
  params: {
    spitId: string;
  }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  let numberWheel = parseInt(params.spitId);
  let converterNum: string;
  switch (numberWheel) {
    case 45:
      converterNum = "One";
      break;
    case 46:
      converterNum = "Two";
      break;
    case 47:
      converterNum = "Three";
      break;
    case 48:
      converterNum = "Four";
      break;
  }
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Spitfire ${converterNum}`)
    }, 300)
  })
  return {
    title: `${title}`
  }
}

export default async function DetailsProduct({children}: {children: React.ReactNode}) {
  return (
    <div className='text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-900'>

      <div className='absolute w-1/5 top-[180px] ml-4 px-4 z-20'>
        <li className='custom-li list-disc'>
            <Link href="/products/wheels" className='custom-link'>
                Main page of wheels
            </Link>
        </li>
      </div>

      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Spitfire
      </h1>

      <div className='flex'>
        <div className='absolute flex flex-col w-[300px] z-20'>
          <AccessWheels />
        </div>
          {children}
      </div>
    </div>
  )
}