import React from 'react';
import Image from 'next/image';
import Partners from '@/app/ui/about/partners-bloc';
import story from '@/public/img_bg/wallpaper-about.jpg';

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

        <hr className='mx-40 border border-violet-600/40 dark:border-blue-800/30' />

        <Partners />

      </section>

    </div>
  )
}
