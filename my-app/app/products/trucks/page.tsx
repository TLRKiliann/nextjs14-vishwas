import type { Metadata } from 'next';
import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';
import { queryTrucks } from '@/app/lib/db';
import TrucksCards from '@/app/ui/products/trucks/trucks-cards';
import deckFlip from "@/public/img_decks/deck-h.png";

export const metadata: Metadata = {
  title: "Wheels",
  description: "access accepted"
};

export default async function AxisShop() {

  const request: ProductsProps[] = await queryTrucks("SELECT * FROM trucks", []);
  const data: string = JSON.stringify(request);

  if (!data) {
    throw new Error("Error: server failed to return data from db.");
  }

  return (
    <div className='min-h-screen bg-slate-200 dark:bg-slate-900 py-[75px]'>

      <div className='flex items-center justify-center w-full h-auto overflow-hidden'>
        <Image
          src={deckFlip}
          width={550}
          height={200}
          alt="deck-truck img"
          className="object-cover w-[400px] h-auto opacity-90"
        />
        <h2 className='absolute text-5xl font-bold text-transparent bg-clip-text dark-title-h1 
          light-title-h1 mt-3'>
          Trucks
        </h2>
      </div>

      <div className='w-[800px] m-auto bg-slate-100 mt-10 border-2'>
        <div className='flex'>
          {JSON.parse(data).map((truck: ProductsProps) => (
            <TrucksCards 
              key={truck.id}
              id={truck.id}
              name={truck.name}
              price={truck.price}
              stock={truck.stock}
              img={truck.img}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
