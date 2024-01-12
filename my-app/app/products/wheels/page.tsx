import { Metadata } from 'next';
import React from 'react';
import { genericQuery } from '@/app/lib/db';
import Image from 'next/image';
import deckTitle from "@/public/img_decks/deck-h.png";
import WheelCard from '@/app/ui/products/wheels/wheel-card';

export const metadata: Metadata = {
  title: "Wheels",
  description: "access accepted"
};

export default async function AxisShop() {
  
  const request: unknown = await genericQuery("SELECT * FROM bones", []);
  const data: string = JSON.stringify(request);

  const requestTwo: unknown = await genericQuery("SELECT * FROM slimballs", []);
  const dataTwo: string = JSON.stringify(requestTwo);

  const requestThree: unknown = await genericQuery("SELECT * FROM spitfire", []);
  const dataThree: string = JSON.stringify(requestThree);

  if (!data) {
    throw new Error("Error: server failed to catch data from bones !");
  } else if (!dataTwo) {
    throw new Error("Error: server failed to catch data from slimballs !");
  } else if (!dataThree) {
    throw new Error("Error: server failed to catch data from spitfire !");
  }

  return (
    <div className='min-h-screen bg-slate-200 dark:bg-slate-900 py-[75px]'>

      <div className='flex items-center justify-center w-full h-auto overflow-hidden'>
        <Image
          src={deckTitle}
          width={550}
          height={200}
          alt="alt"
          className="object-cover w-[400px] h-auto opacity-90"
        />
        <h2 className='absolute text-5xl font-bold text-transparent bg-clip-text dark-title-h1 
          light-title-h1 mt-3'>
          Wheels
        </h2>
      </div>
      
      <WheelCard data={JSON.parse(data)} />

      <WheelCard data={JSON.parse(dataTwo)} />

      <WheelCard data={JSON.parse(dataThree)} />

    </div>
  )
}
