import React from 'react';
import { genericQuery } from '@/app/lib/db';
import type { WheelsProps } from '@/app/lib/definitions';
import { notFound } from 'next/navigation';
import WheelCardUnit from '@/app/ui/products/wheels/wheel-card-unit';

type ParamsProps = {
  params: {
      slimId: string;
  }
};
export default async function DetailProductWheel({params}: ParamsProps) {

  if (parseInt(params.slimId) > 8) {
    notFound();
  };

  if (parseInt(params.slimId) !== Number(params.slimId)) {
      throw new Error("Error: product id is not a number !");
  };

  const request: unknown = await genericQuery("SELECT * FROM slimballs", []);
  const data: string = JSON.stringify(request);

  if (!data) {
    throw new Error("Error: product id is not a number !");
  };

  return (
    <div className='flex bg-slate-100 dark:bg-slate-900 mt-4'>
      
      {JSON.parse(data).map((d: WheelsProps) => {
        if (d.id === parseInt(params.slimId)) {
          return (
            <div key={d.id} className='flex items-center justify-center w-full h-auto mb-10'>
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
