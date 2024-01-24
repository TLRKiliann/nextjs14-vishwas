import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import AccessWheels from '@/app/ui/products/wheels/access-wheels';

type Props = {
  params: {
    bonesId: string;
  }
};

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  let numberWheel = parseInt(params.bonesId);
  let converterNum: string;
  switch (numberWheel) {
    case 37:
      converterNum = "One";
      break;
    case 38:
      converterNum = "Two";
      break;
    case 39:
      converterNum = "Three";
      break;
    case 40:
      converterNum = "Four";
      break;
  }
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Bones ${converterNum}`)
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
        Bones
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