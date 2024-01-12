import type { Metadata } from 'next';
import React from 'react';

type ParamsProps = {
  wheelId: string;
}

type Props = {
  params: {
    wheelId: string;
  }
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Wheel ${params.wheelId}`)
    }, 300)
  })
  return {
    title: `Num ${title}`
  }
}

export default async function DetailsProduct({children, params}: 
  {children: React.ReactNode, params: ParamsProps}
  ) {
  return (
    <div className='min-h-screen bg-slate-50 text-slate-900 
      dark:text-slate-50 dark:bg-slate-900 py-[75px]'>
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'
      >
        Affiche ProductID: {params.wheelId}
      </h1>
        {children}
    </div>
  )
}