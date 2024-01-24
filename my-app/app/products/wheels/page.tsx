import type { Metadata } from 'next';
import type { ProductsProps } from '@/app/lib//definitions';
import React from 'react';
import { queryWheels } from '@/app/lib/db';
import WheelCard from '@/app/ui/products/wheels/wheel-card';

export const metadata: Metadata = {
  title: "Wheels",
  description: "access accepted"
};

export default async function AxisShop() {
  
  const request: ProductsProps[] = await queryWheels("SELECT * FROM bones", []);
  const data: string = JSON.stringify(request);

  const requestTwo: ProductsProps[] = await queryWheels("SELECT * FROM slimballs", []);
  const dataTwo: string = JSON.stringify(requestTwo);

  const requestThree: ProductsProps[] = await queryWheels("SELECT * FROM spitfire", []);
  const dataThree: string = JSON.stringify(requestThree);

  if (!data) {
    throw new Error("Error: server failed to catch data from bones !");
  } else if (!dataTwo) {
    throw new Error("Error: server failed to catch data from slimballs !");
  } else if (!dataThree) {
    throw new Error("Error: server failed to catch data from spitfire !");
  };

  return (
    <div className='min-h-screen bg-slate-100 dark:bg-slate-900 mt-20'>
      
      <div className='flex flex-col items-center w-4/5 h-auto m-auto bg-slate-50 dark:bg-slate-900 
        mb-10 pb-10 rounded dark:shadow-in shadow-inviolet'>
    
        <div className="w-full m-auto my-4">
          <h2 className='w-[600px] xl:w-full xl:pl-[70px] m-auto text-4xl text-transparent bg-clip-text 
            dark-title-h1 light-title-h1'>
            Bones
          </h2>
        </div>

        <div className='flex items-center justify-center rounded-xl xl:shadow-none 
          md:shadow-mdoutviolet md:dark:shadow-lg'>

          {JSON.parse(data).map((wheelUnit: ProductsProps) => (
            <WheelCard
              key={wheelUnit.id}
              id={wheelUnit.id}
              name={wheelUnit.name}
              price={wheelUnit.price}
              stock={wheelUnit.stock}
              img={wheelUnit.img}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center w-4/5 h-auto m-auto bg-slate-50 dark:bg-slate-900 
        mb-10 pb-10 rounded dark:shadow-in shadow-inviolet'>
    
        <div className="w-full m-auto my-4">
          <h2 className='w-[600px] xl:w-full xl:pl-[70px] m-auto text-4xl text-transparent bg-clip-text 
            dark-title-h1 light-title-h1'>
            Slimballs
          </h2>
        </div>

        <div className='flex items-center justify-center rounded-xl xl:shadow-none 
          md:shadow-mdoutviolet md:dark:shadow-lg'>

          {JSON.parse(dataTwo).map((wheelUnit: ProductsProps) => (
            <WheelCard
              key={wheelUnit.id}
              id={wheelUnit.id}
              name={wheelUnit.name}
              price={wheelUnit.price}
              stock={wheelUnit.stock}
              img={wheelUnit.img}
            />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center w-4/5 h-auto m-auto bg-slate-50 dark:bg-slate-900 
        mb-10 pb-10 rounded dark:shadow-in shadow-inviolet'>
    
        <div className="w-full m-auto my-4">
          <h2 className='w-[600px] xl:w-full xl:pl-[70px] m-auto text-4xl text-transparent bg-clip-text 
            dark-title-h1 light-title-h1'>
            Spitfire
          </h2>
        </div>

        <div className='flex items-center justify-center rounded-xl xl:shadow-none 
          md:shadow-mdoutviolet md:dark:shadow-lg'>

          {JSON.parse(dataThree).map((wheelUnit: ProductsProps) => (
            <WheelCard
              key={wheelUnit.id}
              id={wheelUnit.id}
              name={wheelUnit.name}
              price={wheelUnit.price}
              stock={wheelUnit.stock}
              img={wheelUnit.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
