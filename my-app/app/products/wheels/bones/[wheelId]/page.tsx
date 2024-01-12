import React from 'react'

type ParamsProps = {
  params: {
      wheelId: string;
  }
};
export default async function DetailProductWheel({params}: ParamsProps) {
  console.log(params.wheelId); 
  return (
    <div className='min-h-screen bg-slate-900 py-[75px]'>
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
            Affiche Wheels per ID {params.wheelId}
          </h2>
    </div>
  )
}
