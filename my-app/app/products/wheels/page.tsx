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
      
      <div className='xs:w-4/5 w-3/5 h-auto bg-slate-300 m-auto mb-10 pt-4 pb-10 rounded dark:shadow-in 
          shadow-inviolet'>
    
        <div className="w-[600px] m-auto py-2">
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
            Bones
          </h2>
        </div>

        <div className='md:flex md:flex-col lg:grid grid-cols-4 grid-row-3 gap-0 justify-items-center 
          md:w-[150px] lg:w-[600px] bg-slate-50 m-auto rounded-xl dark:shadow-lg 
          shadow-none transition transform ease duration-300 animate-slice-appear'>

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

      <div className='xs:w-4/5 w-3/5 h-auto bg-slate-300 m-auto mb-10 pt-4 pb-10 rounded dark:shadow-in 
          shadow-inviolet'>
    
        <div className="w-[600px] m-auto py-2">
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
            Slimballs
          </h2>
        </div>

        <div className='md:flex md:flex-col lg:grid grid-cols-4 grid-row-3 gap-0 justify-items-center 
          md:w-[150px] lg:w-[600px] bg-slate-50 m-auto rounded-xl dark:shadow-lg 
          shadow-none'>

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

      <div className='xs:w-4/5 w-3/5 h-auto bg-slate-300 m-auto mb-10 pt-4 pb-10 rounded dark:shadow-in 
          shadow-inviolet'>
    
        <div className="w-[600px] m-auto py-2">
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
            Spitfire
          </h2>
        </div>

        <div className='md:flex md:flex-col lg:grid grid-cols-4 grid-row-3 gap-0 justify-items-center 
          md:w-[150px] lg:w-[600px] bg-slate-50 m-auto rounded-xl dark:shadow-lg 
          shadow-none'>

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
