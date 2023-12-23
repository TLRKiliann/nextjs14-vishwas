import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import wall from "@/public/img_bg/pexels-allan-mas.jpg"
import bakerLogo from '@/public/img_logo/baker-logo.jpg';
import blindLogo from '@/public/img_logo/blind-logo.png';
import girlLogo from '@/public/img_logo/girl-logo.jpg';
import elementLogo from '@/public/img_logo/element-logo.jpg';

export const metadata: Metadata = {
  title: "decks",
  description: "access accepted"
}

export default function BoardShop() {
  return (
    <div className='min-h-screen py-[75px]'>

      <div className='-z-10'>
        <Image
          src={wall}
          width={1920}
          height={1080}
          alt="img bg"
          className='fixed opacity-10 object-cover'
        />
      </div>

      <h1 className='text-4xl font-bold text-transparent bg-clip-text
        dark-title-h1 light-title-h1 p-4'>
        Decks
      </h1>

      <div className='p-4'>

        <div className='bg-slate-100 dark:bg-gray-800 p-4 mb-2 rounded-lg'>

          <h2 className='text-2xl font-bold text-transparent bg-clip-text
            dark-title-h1 light-title-h1'>
            Baker
          </h2>

          <div className='flex items-center justify-between px-4'>

            <li className='ml-4 text-blue-500 hover:text-blue-600'>
              <Link href="/products/decks/baker">
                All Baker&apos;s Decks
              </Link>
            </li>
            
            <Image src={bakerLogo} width={50} height={20} alt="baker logo" className='rounded-full' />

          </div>

        </div>

        <div className='bg-slate-100 dark:bg-gray-800 p-4 mb-2 rounded-lg'>
          
          <h2 className='text-2xl font-bold text-transparent bg-clip-text
            dark-title-h1 light-title-h1'>
            Blind
          </h2>

          <div className='flex items-center justify-between px-4'>
            <li className='ml-4 text-blue-600 hover:text-blue-800'>
              <Link href="/products/decks/blind">
                All Blind&apos;s Decks
              </Link>
            </li>

            <Image src={blindLogo} width={50} height={50} alt="baker logo" className='rounded-full' />

          </div>

        </div>

        <div className='bg-slate-100 dark:bg-gray-800 p-4 mb-2 rounded-lg'>
          
          <h2 className='text-2xl font-bold text-transparent bg-clip-text
            dark-title-h1 light-title-h1'>
            Girl
          </h2>

          <div className='flex items-center justify-between px-4'>
            <li className='ml-4 text-blue-600 hover:text-blue-800'>
              <Link href="/products/decks/girl">
                All Girl&apos;s Decks
              </Link>
            </li>

            <Image src={girlLogo} width={50} height={50} alt="baker logo" className='rounded-full' />

          </div>

        </div>

        <div className='bg-slate-100 dark:bg-gray-800 p-4 rounded-lg'>
          
          <h2 className='text-2xl font-bold text-transparent bg-clip-text
            dark-title-h1 light-title-h1'>
            Element
          </h2>

          <div className='flex items-center justify-between px-4'>
            <li className='ml-4 text-blue-600 hover:text-blue-800'>
              <Link href="/products/decks/element">
                All Element&apos;s Decks
              </Link>
            </li>

            <Image src={elementLogo} width={50} height={50} alt="baker logo" className='rounded-full' />

          </div>

        </div>

      </div>

    </div>
  )
}
