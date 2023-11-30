"use client";

import Link from 'next/link';
import Image from 'next/image';
import { products } from "@/app/lib/datas";
import menuDropdown from "@/app/ui/dropdown";
import cpuI9 from "@/public/img_cpu/i9_cpu.jpg";

export default function ListProducts() {

    const dropDownMenu = menuDropdown(products);
    // 2 params ne fonctionnent pas dans une même URL !!!
    return (
        <div className="min-h-screen">
            
            <div className="flex align-center justify-between">

                <h1 className='text-4xl font-bold 
                    text-transparent bg-clip-text 
                    bg-gradient-to-br from-indigo-500 from-10% 
                    via-sky-500 via-50% to-emerald-500 to-90%
                    mx-2 my-auto'
                >
                    Products
                </h1>
            
                <div>{dropDownMenu}</div>

            </div>


            <div className="flex flex-col m-10">
                {products.map((prod) => (
                    <div key={prod.id}>
                        <p>
                            <Link 
                                href={`/products/${prod.id}`}
                                className="text-slate-200 hover:text-emerald-400"    
                            >
                                {prod.name}
                            </Link>
                        </p>
                        <p>
                            <Link 
                                href={`/products/${prod.id}/reviews`}
                                className="text-slate-200 hover:text-blue-400"
                            >    
                                reviews
                            </Link>
                        </p>
                    </div>
                ))}
            </div>


            <div className='border border-red-600 px-20'>

                <div className='grid grid-cols-3 grid-rows-2 justify-items-center 
                    gap-y-10 border-4 border-lime-400 bg-cyan-50 p-10'>


                    <div className='flex flex-col m-auto h-auto rounded-lg
                        transform transition hover:scale-105 hover:shadow-xl bg-slate-700'
                    >

                        <div className='px-3 py-2 pt-3'>
                            <div className='w-[200px] h-auto rounded-lg shadow-in'
                            >
                                <Image
                                    src={cpuI9}
                                    width={1920}
                                    height={1080}
                                    alt="img cpui9"
                                    className="object-fill rounded-lg shadow-in"
                                />

                            </div>
                        </div>

                        <div className='px-3 py-1 pt-2'>
                            <div className='flex flex-col align-center justify-center 
                                 bg-slate-700 shadow-in border-none m-auto rounded-lg py-2'
                            >
                                <p className='text-xl font-bold text-slate-100 mx-auto'>Core i9</p>
                                <p className='text-md font-bold text-slate-100 mx-auto my-1'>1'223.90.- CHF</p>
                                <p className='text-sm font-bold text-slate-100 mx-auto mb-1'>Stock: 22</p>
                                <p className='text-sm font-bold text-slate-100 mx-auto mb-2'>Count: 0</p>
                                <p className='text-xs font-bold mx-auto text-blue-500'>Details</p>
                            </div>

                        </div>

                        <div className='px-3 py-2 pb-3'>
                            <div className='flex justify-around bg-slate-600 
                                    m-auto rounded-lg shadow-in'
                            >
                                <button className='w-16
                                    text-lg font-extrabold
                                    bg-blue-500 border-none
                                    my-3 py-1 rounded-full shadow-btn 
                                    hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                                    active:bg-blue-600 active:shadow-inlight active:text-slate-300'
                                >
                                    -
                                </button>
                                <button className='w-16
                                    text-lg font-extrabold
                                    bg-blue-500 border-none
                                    my-3 py-1 rounded-full shadow-btn 
                                    hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                                    active:bg-blue-600 active:shadow-inlight active:text-slate-300'
                                >
                                    +
                                </button>
                            </div>
                        </div>

                    </div>







                    <div className='flex flex-col m-auto rounded-xl 
                        transition-all hover:scale-[1.025] hover:shadow-xl'
                    >

                        <div className='flex flex-col w-[200px] m-auto 
                            border-8 border-slate-700 rounded-tl-xl rounded-tr-xl'
                        >
                            <Image
                                src={cpuI9}
                                width={1920}
                                height={1080}
                                alt="img cpui9"
                                className="w-auto h-auto object-cover rounded-tl-xl"
                            />

                        </div>

                        <div className='flex flex-col w-[200px] bg-slate-700 
                            rounded-br-xl rounded-bl-xl'>
                            <div className='flex flex-col align-center justify-center 
                                w-5/6 h-5/6 bg-slate-50 border border-slate-500 mx-auto my-2 p-2 rounded-lg'
                            >
                                <p className='text-lg text-slate-700 font-bold mx-auto'>CPU Core i9</p>
                                <p className='text-md text-slate-900 mx-auto my-2'>Price: 23.- CHF</p>
                                <p className='text-md text-slate-900 mx-auto mb-2'>Stock: 22</p>
                                <p className='text-md mx-auto text-sky-700'>Details</p>
                            </div>

                            <div className='flex justify-around w-full h-auto bg-slate-50 
                                border-l-8 border-l-slate-700 border-r-8 border-r-slate-700 
                                mt-3 mb-2 py-1 rounded-bl-xl rounded-br-xl'
                            >
                                <button className='w-16
                                    text-lg font-extrabold
                                    bg-blue-500 border-none                                
                                    my-2 py-1 rounded-full shadow-btn 
                                    hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                                    active:bg-blue-600 active:shadow-inlight active:text-slate-300'
                                >
                                    -
                                </button>
                                <button className='w-16
                                    text-lg font-extrabold
                                    bg-blue-500 border-none                                
                                    my-2 py-1 rounded-full shadow-btn 
                                    hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                                    active:bg-blue-600 active:shadow-inlight active:text-slate-300'
                                >
                                    +
                                </button>
                            </div>

                        </div>
                    </div>







                </div>

            </div>

         </div>
    )
}
