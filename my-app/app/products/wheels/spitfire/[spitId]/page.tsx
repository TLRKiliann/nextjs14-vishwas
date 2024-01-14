import React from 'react';
import { genericQuery } from '@/app/lib/db';
import type { WheelsProps } from '@/app/lib/definitions';
import { notFound } from 'next/navigation';
import WheelCardUnit from '@/app/ui/products/wheels/wheel-card-unit';

type ParamsProps = {
  params: {
      spitId: string;
  }
};
export default async function DetailProductWheel({params}: ParamsProps) {

  if (parseInt(params.spitId) > 12) {
    notFound();
  };

  if (parseInt(params.spitId) !== Number(params.spitId)) {
      throw new Error("Error: product id is not a number !");
  };

  const request: unknown = await genericQuery("SELECT * FROM spitfire", []);
  const data: string = JSON.stringify(request);

  if (!data) {
    throw new Error("Error: product id is not a number !");
  };

  return (
    <div className='flex items-center justify-center w-full bg-slate-100 dark:bg-slate-900 pr-[15%]'>
      
      {JSON.parse(data).map((d: WheelsProps) => {
        if (d.id === parseInt(params.spitId)) {
          return (
            <div className='flex'>
              <WheelCardUnit
                id={d.id}
                name={d.name}
                price={d.price}
                stock={d.stock}
                img={d.img}
              />
            </div>
          )
        }
      })}
    </div>
  )
}
