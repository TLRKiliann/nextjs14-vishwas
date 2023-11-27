"use client";

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BsCpu } from "react-icons/bs";
import boxCpu from "@/public/img_cpu/box_cpu.jpg";
import cpuI9 from "@/public/img_cpu/cpu_i9.jpg";
import cpuI7 from "@/public/img_cpu/cpu_i7.jpg";

export default function Home() {
  
  const pathname = usePathname();
  /*
  console.log(pathname, "pathname");
  */

  const router = useRouter();

  const handleClick = () => {
    router.push('/docs');
  }

  return (
    <div className='relative flex text-blue-300 bg-black z-0'>
      
      <div className='fixed flex align-center justify-center w-full h-full m-auto -z-10'>
        <Image
          src={boxCpu}
          width={1192}
          height={671}
          alt="cpu img" 
          className='flex w-full h-auto m-auto object-cover'
        />
      </div>

      <main className="flex flex-col w-full min-h-screen">
  
        <div className='absolute mt-0 flex flex-col align-center justify-center w-full h-40 bg-cyan-50 
          border border-b-blue-200 shadow-xl z-10'>
          
          <div className='flex flex-col h-40'>
            <p className='text-xl text-blue-800 font-bold m-auto mb-0'>The</p>
            <h1 className='text-4xl font-bold 
              text-transparent bg-clip-text bg-gradient-to-br from-slate-600 from-10% 
              via-sky-600 via-40% to-indigo-800 to-90% m-auto my-0'>
              NextJS Tutorial
            </h1>
            <p className='text-lg text-blue-800 font-bold m-auto mt-0'>
              All features includes
            </p>
          </div>

          <div className='flex justify-around w-full text-lg text-blue-800 m-auto mb-1'>
            <Link href="/" className={`pathname === '/' ? text-cyan-600 : hover:text-cyan-600`}>Home</Link>
            <Link href="/products" className='hover:text-cyan-600'>Products</Link>
            <Link href="/about" className='hover:text-cyan-600'>About</Link>
            <Link href="/contact" className='hover:text-cyan-600'>Contact</Link>
            <Link href="/login" className='hover:text-cyan-600'>Login</Link>
          </div>

        </div>

        <div className='relative flex align-center justify-center h-12 bg-cyan-100 shadow-xl mt-40 z-0'>
          <h2 className='text-2xl text-blue-800 m-auto'>Welcome to our shop !</h2>
        </div>
        
        <div className='h-100 bg-cyan-100'>
          <div className='flex w-3/5 min-h-xs bg-slate-900/20 m-auto my-10 p-12 rounded-lg'>
            <Image
              src={boxCpu}
              width={1192}
              height={671}
              alt="forest img"
              className='flex w-auto h-auto m-auto object-cover rounded-lg'
            />
          </div>
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
              via-sky-500 via-50% to-emerald-500 to-90% my-4 px-10'
            >
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











        <div className='flex w-full'>

          <div className='w-[60px] h-auto bg-slate-900'>
          </div>

          <div className='flex align-center justify-around w-full m-auto shadow-in'>


            <div className='flex w-2/5 max-w-lg max-h-xs bg-slate-900/20 shadow-out
              m-auto my-10 p-12 hover:transition hover:-skew-y-6 rounded-lg'
            >
              <Image
                src={cpuI9}
                width={2157}
                height={1440}
                alt="forest img"
                className='flex w-auto h-auto m-auto border border-slate-600/40 object-cover 
                  transition duration-0 hover:duration-300 hover:ease-in-out hover:skew-y-12 rounded-lg'
              />
            </div>

            <div className='w-6/12 max-w-xl flex flex-col text-blue-300 m-auto
              transition ease-in-out rounded-lg
              hover:scale-105 hover:text-blue-200 hover:shadow-2xl'>

              <span className='h-10 border-none
                bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
                rounded-tl-lg rounded-tr-lg'>
              </span >

              <section className='w-full flex'>

                <article className='h-auto bg-slate-900'>

                  <h2 className='flex align-center text-2xl font-bold text-transparent bg-clip-text 
                    bg-gradient-to-br from-indigo-500 from-10% 
                  via-sky-500 via-50% to-emerald-500 to-90% py-4 pl-10'
                  >
                    CPU i9<BsCpu className="text-blue-400 mt-1 ml-4" />
                  </h2>

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

          </div>

          <div className='w-[60px] h-auto bg-slate-900'>
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

          <div className='w-6/12 max-w-xl flex flex-col text-blue-300 m-auto
            transition ease-in-out rounded-lg
            hover:scale-105 hover:text-blue-200 hover:shadow-2xl'>

            <span className='h-10 border-none
              bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
              rounded-tl-lg rounded-tr-lg'>
            </span >

            <section className='w-full flex'>

              <article className='h-auto bg-slate-900'>

                <h2 className='flex align-center text-2xl font-bold text-transparent bg-clip-text 
                  bg-gradient-to-br from-indigo-500 from-10% 
                via-sky-500 via-50% to-emerald-500 to-90% py-4 pl-10'
                >
                  CPU i7<BsCpu className="text-blue-400 mt-1 ml-4" />
                </h2>

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

          <div className='flex w-2/5 max-w-lg max-h-xs bg-slate-900/20 border border-slate-400/50 
            m-auto my-10 p-12 rounded-lg'
          >
            <Image
              src={cpuI7}
              width={2500}
              height={2500}
              alt="forest img"
              className='flex w-auto h-auto m-auto border border-slate-600/40 object-cover rounded-lg'
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
