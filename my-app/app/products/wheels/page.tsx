import React from 'react';
import Image from 'next/image';
import deckFlip from "@/public/img_decks/deck-h.png";
import { bones } from '@/app/lib/wheels';
import { slimballs } from '@/app/lib/wheels';
import { spitfire } from '@/app/lib/wheels';
import type { ImgWheelsProps } from '@/app/lib//definitions';

export default function AxisShop() {
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
      
      <div className='w-full h-auto border'>
  
        <div className="w-[600px] m-auto py-2">
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
            Bones
          </h2>
        </div>
  
        <div className='grid grid-cols-4 grid-row-3 gap-0 justify-items-center w-[600px] m-auto border'>
          {bones.map((img: ImgWheelsProps) => (
            <div key={img.id} className='w-[150px] h-auto border'>
              <Image src={img.imageWheel} width={435} height={580} alt="truck img" className='object-cover' />
            </div>
          ))}
          </div>

      </div>

      <div className='w-full h-auto border'>
  
        <div className="w-[600px] m-auto py-2">
          <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
            Slimballs
          </h2>
        </div>
  
        <div className='grid grid-cols-4 grid-row-3 gap-0 justify-items-center w-[600px] m-auto border'>
          {slimballs.map((img: ImgWheelsProps) => (
            <div key={img.id} className='w-[150px] h-auto border'>
              <Image src={img.imageWheel} width={435} height={580} alt="truck img" className='object-cover' />
            </div>
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
          {spitfire.map((img: ImgWheelsProps) => (
            <div key={img.id} className='w-[150px] h-auto border'>
              <Image src={img.imageWheel} width={435} height={580} alt="truck img" className='object-cover' />
            </div>
          ))}
          </div>

      </div>

    </div>
  )
}
