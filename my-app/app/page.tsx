"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { BsCpu } from "react-icons/bs";
import boxCpu from "@/public/img_cpu/box_cpu.jpg";
import cpuI9 from "@/public/img_cpu/i9_cpu.jpg";
import cpuI7 from "@/public/img_cpu/cpu_i7.jpg";
import boxCpui7 from "@/public/img_carousel/box-corei7.png";
import boxCpui9 from "@/public/img_carousel/box-corei9.png";
import multiBox from "@/public/img_carousel/multi-box.png";
import ScrollIndicator from '@/app/ui/scroll-indicator';
import Carousel from '@/app/ui/carousel';

export default function Home() {
  
  const pathname = usePathname();

  const images = [
    boxCpui7,
    boxCpui9,
    multiBox
  ];

  return (
    <div className='relative flex text-blue-300 bg-black z-0'>
      <ScrollIndicator />


      <div className='fixed flex align-center justify-center w-full h-full 
        filter blur-sm contrast-200 m-auto -z-10'>
        <Image
          src={boxCpu}
          width={1192}
          height={671}
          alt="cpu img" 
          className='flex w-full h-auto m-auto object-cover'
        />
      </div>

      <main className="flex flex-col w-full min-h-screen">
  
        <div className="absolute mt-0 flex flex-col align-center justify-center w-full h-40 bg-cyan-50 
          border border-b-blue-200 shadow-xl z-10                
          animate-slice-appear"
        >
          
          <div className='flex flex-col h-40'>
            <p className='text-xl text-blue-800 font-bold 
              text-transparent bg-clip-text bg-gradient-to-br from-slate-600 from-10% 
              via-sky-600 via-40% to-indigo-800 to-90% drop-shadow-lg 
              m-auto mb-0'
              >
                The
            </p>
            <h1 className='text-4xl font-bold 
              text-transparent bg-clip-text bg-gradient-to-br from-slate-600 from-10% 
              via-sky-600 via-40% to-indigo-800 to-90% drop-shadow-lg 
              m-auto my-0'>
              NextJS Tutorial
            </h1>
            <p className='text-lg text-blue-800 font-bold 
              text-transparent bg-clip-text bg-gradient-to-br from-slate-600 from-10% 
              via-sky-600 via-40% to-indigo-800 to-90% drop-shadow-lg 
              m-auto mt-0'>
              All features includes
            </p>
          </div>

          <div className='flex justify-around w-full text-lg text-blue-800 m-auto mb-1'>
            <Link href="/" className={`${pathname === '/' 
              ? "text-cyan-600" 
              : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >
              Home
            </Link>
            
            <Link href="/products" className={`${pathname === '/products' 
              ? "text-cyan-600" 
              : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >
              Products
            </Link>

            <Link href="/about" className={`${pathname === '/about' 
              ? "text-cyan-600" 
              : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >
              About
            </Link>
            <Link href="/contact" className={`${pathname === '/contact' 
              ? "text-cyan-600" 
              : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >
              Contact
            </Link>
            <Link href="/login" className={`${pathname === '/products' 
              ? "text-cyan-600" 
              : "hover:text-blue-500 hover:scale-105 hover:drop-shadow-lg"}`}
            >
              Login
            </Link>
          </div>

        </div>

        <div className='relative flex align-center justify-center h-12 bg-cyan-100 shadow-xl mt-40 z-0'>
          <h2 className='text-2xl text-blue-800 m-auto'>Welcome to our shop !</h2>
        </div>
        







        <div className='w-full h-[480px] bg-cyan-100'>

          <Carousel loop>
            {images.map((src, i) => {
              return (
                // 👇 style each individual slide.
                // relative - needed since we use the fill prop from next/image component
                // h-64 - arbitrary height
                // flex-[0_0_100%]
                //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
                //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
                <div className="relative h-64 flex-[0_0_100%] md:px-[400px] xl:px[500px] mt-8 mb-20" key={i}>
                  {/* use object-cover + fill since we don't know the height and width of the parent */}
                  <Image src={src} 
                    width={1920} height={1080} fill={false} 
                    className="absolute  w-2/5 h-auto object-cover" 
                    alt="alt"
                  />
                </div>
              );
            })}
          </Carousel>

          { /*<div className='flex w-3/5 min-h-xs bg-slate-900/20 m-auto mt-10 p-12 rounded-lg'>
            <Image
              src={boxCpu}
              width={1192}
              height={671}
              alt="forest img"
              className='flex w-auto h-auto m-auto object-cover rounded-lg'
            />
          </div> */}

          <legend className='text-sm text-blue-800 text-center my-4'>
            Core i9 X-SERIES & Core i9 EXTREME
          </legend>
        
        </div>




        <div className='w-full h-10 bg-slate-900'>
        </div>


        <div className='w-full bg-slate-900 py-10'>
          
          <hr className='w-3/5 m-auto mb-10 border border-blue-600/40'/>

          <div className='flex flex-col align-center justify-center w-3/5 m-auto'>

            <h2 className='text-3xl font-extrabold
              text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 from-10% 
              via-sky-500 via-50% to-emerald-500 to-90% mb-4'
            >
              High performance for demanding customers
            </h2>

            <p className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </div>

          <hr className='w-3/5 m-auto mt-10 border border-blue-600/40'/>

        </div>


        <div className='w-full h-10 bg-slate-900'>
        </div>











        <div className='flex w-full'>

          <div className='w-[60px] h-auto bg-slate-900'>
          </div>

          <div className='flex align-center justify-around w-full m-auto shadow-in py-10'>


            <div className='flex w-[400px] h-auto
              m-auto rounded-lg'
            >
              <Image
                src={cpuI9}
                width={5475}
                height={3705}
                alt="forest img"
                className='flex w-auto h-auto m-auto object-cover shadow-out
                  transition duration-0 hover:duration-300 hover:ease-in-out hover:rotate-[360deg] rounded-lg'
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
                    Core CPU i9<BsCpu className="text-blue-400 mt-1 ml-4" />
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








        <div className='w-full h-10 bg-slate-900'>
        </div>


        <div className='w-full bg-slate-900 py-10'>
          
          <hr className='w-3/5 m-auto mb-10 border border-blue-600/40'/>

          <div className='flex flex-col align-center justify-center w-3/5 m-auto'>

            <h2 className='text-3xl font-extrabold
              text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 from-10% 
              via-sky-500 via-50% to-emerald-500 to-90% mb-4'
            >
              We can help you make the right choice
            </h2>

            <p className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </div>

          <hr className='w-3/5 m-auto mt-10 border border-blue-600/40'/>

        </div>


        <div className='w-full h-10 bg-slate-900'>
        </div>








        <div className='flex w-full'>

          <div className='w-[60px] h-auto bg-slate-900'>
          </div>

          <div className='flex align-center justify-around w-full m-auto shadow-in py-10'>

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
                    Core CPU i7<BsCpu className="text-blue-400 mt-1 ml-4" />
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

            <div className='flex w-[400px] h-auto
              m-auto rounded-lg'
            >
              <Image
                src={cpuI7}
                width={2500}
                height={2500}
                alt="forest img"
                className='flex w-auto h-auto m-auto object-cover shadow-out
                  transition duration-0 hover:duration-300 hover:ease-in-out hover:rotate-[360deg] rounded-lg'
              />
            </div>

          </div>

          <div className='w-[60px] h-auto bg-slate-900'>
          </div>

        </div>




        <div className='w-full h-10 bg-slate-900'>
        </div>


        <div className='w-full bg-slate-900 py-10'>
          
          <hr className='w-3/5 m-auto mb-10 border border-blue-600/40'/>

          <div className='flex flex-col align-center justify-center w-3/5 m-auto'>

            <h2 className='text-3xl font-extrabold
              text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 from-10% 
              via-sky-500 via-50% to-emerald-500 to-90% mb-4'
            >
              High performance for demanding customers
            </h2>

            <p className='text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>

          </div>

          <hr className='w-3/5 m-auto mt-10 border border-blue-600/40'/>

        </div>


        <div className='w-full h-10 bg-slate-900'>
        </div>

      </main>

    </div>
  )
}
