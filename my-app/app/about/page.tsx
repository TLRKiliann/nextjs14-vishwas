import React from 'react';
import Image from 'next/image';
import story from '@/public/img_bg/wallpaper-about.jpg';
import nextJs from '@/public/img_logo/next-logo.png';
import nextAuth from '@/public/img_logo/nextAuth-logo.png';

import reactLogo from '@/public/img_logo/react_logo.png';
import mySql from '@/public/img_logo/mysql-logo.png';
import tailWind from '@/public/img_logo/tailwind-logo.png';

export default function About() {
  return (
    <div className="min-h-screen">

      <div className='fixed -z-10'>
        <Image
          src={story}
          width={1920}
          height={1080}
          alt="our story img"
          className='object-cover'
        />
      </div>

      <section className='md:w-4/5 xl:w-3/5 m-auto bg-slate-100/80'>
        <article>
          <h1 className='text-3xl 
            text-transparent bg-clip-text 
            dark:bg-gradient-to-br dark:from-indigo-800 dark:from-10% 
            dark:via-blue-500 dark:via-50% dark:to-indigo-800 dark:to-90%
            bg-gradient-to-br from-violet-500 from-10% 
            via-purple-500 via-50% to-violet-200 to-90%
            text-center pt-10'
          >
            Our story
          </h1>
          <h2 className='text-lg font-bold italic
            text-transparent bg-clip-text 
            dark:bg-gradient-to-br dark:from-indigo-800 dark:from-10% 
            dark:via-blue-500 dark:via-50% dark:to-indigo-800 dark:to-90%
            bg-gradient-to-br from-violet-500 from-10% 
            via-purple-500 via-50% to-violet-200 to-90%
            text-center my-4'
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
            px-20 pb-8'
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <hr className='mx-40 border border-violet-600/40 dark:border-blue-800/30' />

        <article>
          <h2 className='text-lg font-bold italic
            text-transparent bg-clip-text 
            dark:bg-gradient-to-br dark:from-indigo-800 dark:from-10% 
            dark:via-blue-500 dark:via-50% dark:to-indigo-800 dark:to-90%
            bg-gradient-to-br from-violet-500 from-10% 
            via-purple-500 via-50% to-violet-200 to-90%
            text-center my-4'
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
            px-20 pb-8'
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <hr className='mx-40 border border-violet-600/40 dark:border-blue-800/30' />

        <article>
          <h2 className='text-lg font-bold italic
            text-transparent bg-clip-text 
            dark:bg-gradient-to-br dark:from-indigo-800 dark:from-10% 
            dark:via-blue-500 dark:via-50% dark:to-indigo-800 dark:to-90%
            bg-gradient-to-br from-violet-500 from-10% 
            via-purple-500 via-50% to-violet-200 to-90%
            text-center my-4'
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
            px-20 pb-8'
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>

        <hr className='mx-40 border border-violet-600/40 dark:border-blue-800/30' />

        <article>
          <h2 className='text-lg font-bold italic
            text-transparent bg-clip-text 
            dark:bg-gradient-to-br dark:from-indigo-800 dark:from-10% 
            dark:via-blue-500 dark:via-50% dark:to-indigo-800 dark:to-90%
            bg-gradient-to-br from-violet-500 from-10% 
            via-purple-500 via-50% to-violet-200 to-90%
            text-center my-4'
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

        <div className='bg-violet-500
          dark:bg-slate-900/90 '>
          
          <h2 className='text-2xl text-center py-4'>
            Our partners
          </h2>
          
          <div className="flex flex-col">

            <div className='flex align-center justify-evenly mt-10 mb-20'>

              <div className='text-center w-auto h-auto m-auto'>
                <Image src={nextJs} width={100} height={100} alt="img nextjs logo" className='object-cover' />
                <legend>NextJS</legend>
              </div>

              <div className='text-center w-[60px] h-auto m-auto'>
                <Image src={nextAuth} width={100} height={100} alt="img nextAuth logo" className='object-cover' />
                <legend>NextAuth</legend>
              </div>

              <div className='text-center w-[70px] h-auto m-auto'>
                <Image src={reactLogo} width={100} height={100} alt="img react logo" className='object-cover' />
                <legend>React</legend>
              </div>

            </div>

            <div className='flex justify-evenly mb-10'>
              
              <div className='text-center w-[100px] h-auto my-auto'>
                <Image src={mySql} width={100} height={100} alt="img mysql logo" className='object-cover' />
                <legend>MySQL</legend>
              </div>

              <div className='text-center w-[80px] h-auto my-auto'>
                <Image src={tailWind} width={100} height={100} alt="img tailwind logo" className='object-cover' />
                <legend>Tailwind</legend>
              </div>
              
            </div>

          </div>
        
        </div>

      </section>

    </div>
  )
}
