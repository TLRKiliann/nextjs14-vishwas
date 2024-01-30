import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import ScrollIndicator from '@/app//ui/scroll-indicator';
import Partners from '@/app/ui/about/partners-bloc';
import story from '@/public/img_bg/bg-bowl-title.jpg';
import separator from '@/public/img_logo/separator.png';

export const metadata: Metadata = {
  title: "About Us",
  description: "access accepted"
}

export default function About() {
  return (
    <div className="min-h-screen py-[70px]">

      <ScrollIndicator />

      <div className='fixed -z-10'>
        <Image
          src={story}
          width={1920}
          height={1080}
          alt="our story img"
          className='object-cover opacity-50'
        />
      </div>

      <section className='md:w-4/5 xl:w-3/5 m-auto bg-slate-100/80'>
        <article>
          <h1 className='w-4/5 text-6xl font-bold text-transparent bg-clip-text dark-bg-gradient-story light-title-h1 
            text-center m-auto pt-[60px] pb-10 transition transform translate-y-0 animate-right-start'
          >
            Our story
          </h1>
          <h2 className='text-lg font-bold italic text-transparent bg-clip-text dark-bg-gradient-story 
            light-title-h1 mt-2 mb-4 px-20'
          >
            A Luxurious Experience
          </h2>
          <p className='text-slate-600 
            text-justify
            px-20 pb-5'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className='text-slate-600 
            text-justify
            px-20'
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>


        <div className='flex items-center justify-center w-full mb-[0px]'>
          <Image src={separator} width={948} height={263} alt="separator img" 
            className="w-[400px] h-auto object-cover" />
        </div>


        <article>
          <h2 className='text-lg font-bold italic text-transparent bg-clip-text dark-bg-gradient-story
            light-title-h1 mt-10 mb-4 px-20'
          >
            Great products for high performances !
          </h2>
          <p className='text-slate-600 
            text-justify
            px-20 pb-5'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className='text-slate-600 
            text-justify
            px-20'
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>


        <div className='flex items-center justify-center w-full mb-[0px]'>
          <Image src={separator} width={948} height={263} alt="separator img" 
            className="w-[400px] h-auto object-cover" />
        </div>


        <article>
          <h2 className='text-lg font-bold italic text-transparent bg-clip-text dark-bg-gradient-story 
            light-title-h1 mt-10 mb-4 px-20'
          >
            Discovery our shop as an adventure
          </h2>
          <p className='text-slate-600 
            text-justify
            px-20 pb-5'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className='text-slate-600 
            text-justify
            px-20 pb-5'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className='text-slate-600 
            text-justify
            px-20'
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <div className='flex items-center justify-center w-full mb-[0px]'>
          <Image src={separator} width={948} height={263} alt="separator img" 
            className="w-[400px] h-auto object-cover" />
        </div>

        <article>
          <h2 className='text-lg font-bold italic text-transparent bg-clip-text dark-bg-gradient-story 
            light-title-h1 mt-10 mb-4 px-20'
          >
            All our partners put their trust in us
          </h2>
          <p className='text-slate-600 
            text-justify          
            px-20 pb-8'
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <hr className='mx-40 border border-indigo-600/40 dark:border-blue-800/30' />

        <Partners />

      </section>

    </div>
  )
}
