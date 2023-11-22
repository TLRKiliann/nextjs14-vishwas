"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import cpuBg from "@/public/img_bg/cpu_wallpaper.png"

export default function Home() {
  
  const router = useRouter();

  const handleClick = () => {
    router.push('/docs');
  }

  return (
    <div className='relative flex bg-black z-0'>
      
      <div className='fixed flex align-center justify-center w-full h-full border border-orange-400 -z-10'>
        <Image
          src={cpuBg}
          width={500}
          height={500}
          alt="cpu img" 
          className='flex w-auto h-auto opacity-50 m-auto object-cover'
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
        
        <aside className='flex flex-col w-[200px] bg-slate-800 ml-4'>
          
            <Link href="/products" 
              className='text-blue-400 hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
            >
              Products
            </Link>

            <hr className='border-t border-slate-600' />

            <Link href="/dashboard" 
              className='text-blue-400 hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
            >
              Dashboard
            </Link>

            <hr className='border-t border-slate-600' />

            <Link href="/forgot-password" 
              className='text-blue-400 hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
            >
              Forgot-password
            </Link>

            <hr className='border-t border-slate-600' />

            <Link href="/register" 
              className='text-blue-400 hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
            >
              Register
            </Link>

            <hr className='border-t border-slate-600' />

            <button onClick={handleClick}
              className='flex justify-start text-blue-400 
                hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
            >
              Docs
            </button>
        
        </aside>


        <div className='flex justify-between w-full border border-cyan-400 p-10'>

          <div className='w-5/12 flex align-center justify-center border border-orange-400'>
            <h2 className='border border-cyan-300'>title to space</h2>
          </div>

          <div className='w-6/12 flex flex-col shadow-lg shadow-indigo-500/50'>

            <span className='h-10 border-none
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-tl-lg rounded-tr-lg'>
            </span >

            <section className='w-full flex'>

              <article className='h-auto bg-slate-950 p-6'>
                <h2 className='text-2xl font-bold mt-0 mb-3'>Title</h2>
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

            <span className='h-10 border-none
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-bl-lg rounded-br-lg'
            >
            </span >

          </div>
        </div>

        <div className='flex justify-between w-full border border-cyan-400 p-10'>

          <div className='w-6/12 flex flex-col shadow-lg shadow-indigo-500/50'>

            <span className='h-10 border-none
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-tl-lg rounded-tr-lg'>
            </span >

            <section className='w-full flex'>

              <article className='h-auto bg-slate-950 p-6'>
                <h2 className='text-2xl font-bold mt-0 mb-3'>Title 2</h2>
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

            <span className='h-10 border-none
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-bl-lg rounded-br-lg'
            >
            </span >

          </div>

          <div className='w-5/12 flex flex-col justify-start border border-orange-300'>
            <h2 className='border border-cyan-300'>title to space</h2>
          </div>

        </div>

      </main>

    </div>
  )
}
