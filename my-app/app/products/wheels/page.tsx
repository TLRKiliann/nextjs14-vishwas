"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import deckFlip from "@/public/img_decks/deck-h.png";
import BonesWheel from '@/app/ui/products/wheels/bones';
import { slimballs } from '@/app/lib/wheels';
import { spitfire } from '@/app/lib/wheels';
import type { WheelsProps } from '@/app/lib//definitions';

export default function AxisShop() {
  
  const router = useRouter();

  let wheelPath = "bones";

  const handleSlim = (id: number) => {
    router.push(`/products/wheels/${wheelPath}/${id}`);
  };

  const handleSpitfire = (id: number) => {
    router.push(`/products/wheels/${wheelPath}/${id}`);
  }

  return (
    <div className='min-h-screen bg-slate-200 dark:bg-slate-900 py-[75px]'>

      <div className='flex items-center justify-center w-full h-auto overflow-hidden'>
        <Image
          src={deckFlip}
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
      
      <BonesWheel />

      <div className='w-full h-auto border'>
  
        <div className="w-[600px] m-auto py-2">
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
            Slimballs
          </h2>
        </div>
  
        <div className='grid grid-cols-4 grid-row-3 gap-0 justify-items-center w-[600px] m-auto border'>
          
          {slimballs.map((slim: WheelsProps) => (
            <span key={slim.id} onClick={() => handleSlim(slim.id)} className='w-[150px] h-auto border'>
              <Image src={slim.imageWheel} width={435} height={580} alt="truck img" className='object-cover' />
              <div className='text-slate-600/80 bg-slate-50 p-2 border'>
                <h3 className='text-md'>{slim.name}</h3>
                <h4 className='text-sm'>{slim.price}.-</h4>
                <p className='text-sm mt-2'>Stock: {slim.stock}pcs</p>
              </div>
            </span>
          
          ))}
          
          </div>

      </div>

      <div className='w-full h-auto border'>
  
        <div className="w-[600px] m-auto py-2">
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
            Spitfire
          </h2>
        </div>
  
        <div className='grid grid-cols-4 grid-row-3 gap-0 justify-items-center w-[600px] m-auto border'>
          
          {spitfire.map((spit: WheelsProps) => (
            <span key={spit.id} onClick={() => handleSpitfire(spit.id)} className='w-[150px] h-auto border'>
              <Image src={spit.imageWheel} width={435} height={580} alt="truck img" className='object-cover' />
              <div className='text-slate-600/80 bg-slate-50 p-2 border'>
                <h3 className='text-md'>{spit.name}</h3>
                <h4 className='text-sm'>{spit.price}.-</h4>
                <p className='text-sm mt-2'>Stock: {spit.stock}pcs</p>
              </div>
            </span>
          ))}

          </div>

      </div>

    </div>
  )
}
