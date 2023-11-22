"use client";

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import forestImg from "@/public/img_bg/red_forest.jpg"

export default function Home() {
  
  const router = useRouter();

  const handleClick = () => {
    router.push('/docs');
  }

  return (
    <div className='relative flex bg-black z-0'>
      
      <div className='fixed flex align-center justify-center w-full h-full border border-orange-400 -z-10'>
        <Image
          src={forestImg}
          width={1920}
          height={1080}
          alt="cpu img" 
          className='flex w-auto h-auto opacity-40 m-auto object-cover'
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
        
        <div className="w-full flex flex-row align-center">
          <aside className='flex flex-col w-[300px] bg-slate-800'>
            
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


          <div className='w-4/5 bg-black border border-blue-400'>
            <h2 className='text-2xl text-slate-50 opacity-90 my-4 px-10'>Title intermediate</h2>
            <p className='text-justify px-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>


        <div className='flex align-center justify-around w-full border border-cyan-400 py-5'>

          <div className='w-2/5 max-w-lg h-80 max-h-xs flex border border-orange-400 m-auto'>
            <Image
              src={forestImg}
              width={1920}
              height={1080}
              alt="forest img"
              className='flex w-auto h-auto m-auto object-cover'
            />
          </div>

          <div className='w-6/12 max-w-xl flex flex-col shadow-lg shadow-indigo-500/50 m-auto'>

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


        <div className='w-full h-40 bg-black'>
          <h2 className='text-2xl text-slate-50 opacity-90 my-4 px-20'>Title intermediate</h2>
          <p className='text-justify px-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>


        <div className='flex align-center justify-around w-full border border-cyan-400 py-5'>

          <div className='w-6/12 max-w-xl flex flex-col shadow-lg shadow-indigo-500/50 m-auto'>

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

          <div className='w-2/5 max-w-lg h-80 max-h-xs flex
            border border-orange-400 m-auto'>
            <Image
              src={forestImg}
              width={1920}
              height={1080}
              alt="forest img"
              className='flex w-auto h-auto m-auto object-cover'
            />
          </div>

        </div>

        <div className='w-full h-40 bg-black'>
          <h2 className='text-2xl text-slate-50 opacity-90 my-4 px-20'>Title intermediate</h2>
          <p className='text-justify px-20'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

      </main>

    </div>
  )
}
