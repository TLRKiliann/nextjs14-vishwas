"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import cpuBg from "@/public/img_bg/cpu_wallpaper.png"

export default function Home() {
  
  const router = useRouter();

  return (
    <div className='relative flex bg-black-400'>
      
      <div className='fixed flex align-center justify-center w-full h-full border border-orange-400 z-[-1]'>
        <Image
          src={cpuBg}
          width={500}
          height={500}
          alt="cpu img" 
          className='flex w-2/5 h-2/5 opacity-50 m-auto object-cover'
        />
      </div>

      <main className="flex flex-col w-full min-h-screen">
  
        <div>
          <h1 className='text-3xl font-extrabold 
            text-transparent bg-clip-text 
            bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-4'
          >
            Main Page
          </h1>
        </div>
        
        <aside className='flex flex-col w-40 bg-slate-800'>
          
            <Link href="/products" 
              className='text-blue-400 hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
            >
              Products
            </Link>

            <hr className='border-t border-slate-600' />

            <button onClick={() => router.push("/docs")}
              className='flex justify-start text-blue-400 
                hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
            >
              Docs
            </button>
        
        </aside>

        <div className='flex flex-col w-full border border-cyan-400 p-10'>
          
          <div className='w-full flex justify-end border border-orange-600'>
            <span className='w-2/5 h-10 border border-blue-600
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-tl-lg rounded-tr-lg'
            >
            </span >
          </div>

          <section className='w-full flex justify-end border border-teal-600'>

            <article className='w-2/5 h-auto border border-blue-600 p-6'>
              <h2 className='text-2xl font-bold my-3'>Title</h2>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>

          </section>

          <div className='w-full flex justify-end border border-orange-600'>
            <span className='w-2/5 h-10 border border-blue-600
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-bl-lg rounded-br-lg'
            >
            </span >
          </div>

        </div>

        <div className='flex flex-col w-full border border-cyan-400 p-10'>
          
          <div className='w-full flex justify-start border border-orange-600'>
            <span className='w-2/5 h-10 border border-blue-600
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-tl-lg rounded-tr-lg'
            >
            </span >
          </div>

          <section className='w-full flex justify-start border border-teal-600'>

            <article className='w-2/5 h-auto border border-blue-600 p-6'>
              <h2 className='text-2xl font-bold my-3'>
                Title 2
              </h2>
              <p className='text-justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </article>

          </section>

          <div className='w-full flex justify-start border border-orange-600'>
            <span className='w-2/5 h-10 border border-blue-600
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-bl-lg rounded-br-lg'
            >
            </span >
          </div>

        </div>


      </main>

    </div>


  )
}
