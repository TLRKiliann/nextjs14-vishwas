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
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Bones wheel
      </h1>

      <div className='flex'>
        <div className='flex flex-col w-[300px]'>
          <Link href="/products/wheels" className='text-lg custom-link py-2 pl-4'>
            Back to Wheels
          </Link>
          <Link href="/products" className='text-lg custom-link py-2 pl-4'>
            Back to Products
          </Link>
          <AccessWheels />
        </div>
          {children}
      </div>
    </div>
  )
}