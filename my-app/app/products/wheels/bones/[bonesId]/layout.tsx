import type { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import MenuWheelsSpitSlimBones from '@/app/ui/products/wheels/menu-splitslimbones';

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
    <div className='bg-slate-900 text-slate-900 
      dark:text-slate-50 dark:bg-slate-900'>
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'
      >
        Bones wheel
      </h1>
      <Link href="/products/wheels" className='text-lg custom-link p-4'>
        Back to wheels
      </Link>

        {children}
    </div>
  )
}