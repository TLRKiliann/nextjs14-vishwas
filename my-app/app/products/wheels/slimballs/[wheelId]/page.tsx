import { notFound } from 'next/navigation';
import React from 'react'

type ParamsProps = {
  params: {
      wheelId: string;
  }
};
export default async function DetailProductWheel({params}: ParamsProps) {

  if (parseInt(params.wheelId) > 8 ) {
    notFound();
  };

  if (parseInt(params.wheelId) !== Number(params.wheelId)) {
      throw new Error("Error: product id is not a number");
  };

  return (
    <div className='min-h-screen bg-slate-900 py-[75px]'>
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
            Affiche Wheels per ID {params.wheelId}
          </h2>
    </div>
  )
}
