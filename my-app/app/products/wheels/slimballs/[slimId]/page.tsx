import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import { queryWheels } from '@/app/lib/db';
import { notFound } from 'next/navigation';
import WheelCardUnit from '@/app/ui/products/wheels/wheel-card-unit';

type ParamsProps = {
  params: {
    slimId: string;
  }
};
export default async function DetailProductWheel({params}: ParamsProps) {

  if (parseInt(params.slimId) > 44) {
    notFound();
  };

  if (parseInt(params.slimId) !== Number(params.slimId)) {
    throw new Error("Error: product id is not a number !");
  };

  const request: ProductsProps[] = await queryWheels("SELECT * FROM slimballs", []);
  const data: string = JSON.stringify(request);

  if (!data) {
    throw new Error("Error: product id is not a number !");
  };

  return (
    <div className='absolute flex items-center justify-center w-full bg-slate-100 dark:bg-slate-900 
      pb-20'> 
      {JSON.parse(data).map((d: ProductsProps) => {
        if (d.id === parseInt(params.slimId)) {
          return (
            <div key={d.id} className='flex'>
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
