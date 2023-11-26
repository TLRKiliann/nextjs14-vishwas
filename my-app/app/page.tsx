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
    <div className='relative text-blue-300 flex bg-black z-0'>
      
      <div className='fixed flex align-center justify-center w-full h-auto -z-10'>
        <Image
          src={forestImg}
          width={1920}
          height={1080}
          alt="cpu img" 
          className='flex w-auto h-auto m-auto object-cover'
        />
      </div>

      <main className="flex flex-col w-full min-h-screen">
  
        <div className='flex flex-col align-center justify-center w-full h-40 bg-slate-100'>
          
          <div className='text-4xl font-bold text-blue-800 m-auto border border-blue-600'>
            NextJS Tutorial
          </div>

          <div className='flex justify-around w-full text-sm font-bold text-blue-800 m-auto mb-3 
            border border-orange-600'>
            <Link href="" className='hover:text-green-500'>Poducts</Link>
            <Link href="" className='hover:text-green-500'>Info</Link>
            <Link href="" className='hover:text-green-500'>About</Link>
            <Link href="" className='hover:text-green-500'>Contact</Link>
            <Link href="" className='hover:text-green-500'>Login</Link>
          </div>

        </div>

        <div>
          <h1 className='text-3xl font-extrabold
              text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 from-10% 
              via-sky-500 via-40% to-emerald-500 to-90% p-4'
          >
            Home Page
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

          <div className='w-full bg-slate-900 border-b border-blue-400/20'>
            <h2 className='text-3xl font-extrabold
              text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 from-10% 
              via-sky-500 via-50% to-emerald-500 to-90% my-4 px-10'>
              First Title
            </h2>
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

        <div className='w-full h-20 bg-slate-900'>
        </div>

        <div className='flex align-center justify-around w-full m-auto'>

          <div className='w-[60px] bg-slate-900'>
          </div>

          <div className='flex w-2/5 max-w-lg max-h-xs bg-slate-900/20 border border-red-600/50 m-auto my-10 p-12
            hover:transition hover:-skew-y-6'>
            <Image
              src={forestImg}
              width={1920}
              height={1080}
              alt="forest img"
              className='flex w-auto h-auto m-auto border border-red-600/40 object-cover 
                transition duration-0 hover:duration-300 hover:ease-in-out hover:skew-y-12'
            />
          </div>

          <div className='w-6/12 max-w-xl flex flex-col text-blue-300 m-auto my-10
            transition ease-in-out 
            hover:scale-105 hover:text-blue-200 hover:shadow-2xl'>

            <span className='h-10 border-none
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-tl-lg rounded-tr-lg'>
            </span >

            <section className='w-full flex'>

              <article className='h-auto bg-slate-900'>
                <h2 className='text-2xl font-bold py-4 pl-10'>Title 1</h2>
                <p className='text-justify px-10 pb-5'>
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
              rounded-bl-lg rounded-br-lg'>
            </span >

          </div>

          <div className='w-[60px] bg-slate-900'>
          </div>

        </div>


        <div className='w-full bg-slate-900 p-3'>
          <h2 className='w-[800px] text-2xl font-bold opacity-90 mx-auto mt-3 px-4 pb-4'>
            Title intermediate
          </h2>
          <p className='w-[800px] text-justify mx-auto px-4 mb-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>


        <div className='flex align-center justify-around w-full m-auto'>

          <div className='w-[60px] bg-slate-900'>
          </div>

          <div className='w-6/12 max-w-xl flex flex-col text-blue-300 m-auto my-10
            transition ease-in-out
            hover:scale-105 hover:text-blue-200 hover:shadow-2xl'>

            <span className='h-10 border-none
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-tl-lg rounded-tr-lg'>
            </span >

            <section className='w-full flex'>

              <article className='h-auto bg-slate-900'>
                <h2 className='text-2xl font-bold py-4 pl-10'>Title 2</h2>
                <p className='text-justify px-10 pb-5'>
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
              rounded-bl-lg rounded-br-lg'>
            </span >

          </div>

          <div className='flex w-2/5 max-w-lg max-h-xs bg-slate-900/20 border border-red-600/50 m-auto my-10 p-12'>
            <Image
              src={forestImg}
              width={1920}
              height={1080}
              alt="forest img"
              className='flex w-auto h-auto m-auto border border-red-600/40 object-cover'
            />
          </div>

          <div className='w-[60px] bg-slate-900'>
          </div>

        </div>

        <div className='flex flex-col w-full bg-slate-900 p-3'>
            <h2 className='w-[800px] text-2xl mx-auto p-4'>
              Last title
            </h2>
            <p className='w-[800px] text-blue-300 text-justify mx-auto mb-4 px-4 rounded-lg'>
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
