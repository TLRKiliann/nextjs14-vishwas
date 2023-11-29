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

                <div className='grid grid-cols-2 grid-rows-2 justify-items-center 
                    gap-y-10 border-4 border-lime-400 bg-slate-50 p-10'>


                    <div className='flex w-[430px] m-auto rounded-xl 
                        transition-all hover:scale-[1.025] hover:shadow-xl'
                    >
                        <div className='flex flex-col w-[300px] m-auto 
                            border-4 border-slate-700 rounded-tl-xl rounded-bl-xl'
                        >
                            <Image
                                src={cpuI9}
                                width={1920}
                                height={1080}
                                alt="img cpui9"
                                className="w-auto h-auto object-cover rounded-tl-xl"
                            />
                            <div className='flex justify-around w-full h-auto 
                                bg-slate-300/50 border-t-4 border-t-slate-700 rounded-bl-lg'
                            >
                                <button className='w-16
                                    text-lg font-bold
                                    bg-sky-500 border-none                                
                                    my-2 py-1 rounded-full shadow-btn 
                                    hover:scale-[0.95] hover:bg-sky-400 hover:shadow-none
                                    active:bg-sky-300 active:shadow-in'
                                >
                                    -
                                </button>
                                <button className='w-16
                                    text-lg font-bold
                                    bg-sky-500 border-none                                
                                    my-2 py-1 rounded-full shadow-btn 
                                    hover:scale-[0.95] hover:bg-sky-400 hover:shadow-none
                                    active:bg-sky-300 active:shadow-in'
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col w-[300px] bg-slate-700 rounded-tr-xl rounded-br-xl'>
                            <div className='flex flex-col align-center justify-center 
                                w-5/6 h-5/6 border border-slate-500 m-auto rounded-lg'
                            >
                                <p className='text-lg text-sky-400 font-bold ml-5 mt-2 mb-3'>CPU Core i9</p>
                                <p className='text-md ml-5 my-2'>Price: 23.- CHF</p>
                                <p className='text-md m-2 ml-5 my-2'>Stock: 22</p>
                                <p className='text-md font-bold mx-auto mt-3 mb-2'>Total: 6.00.- CHF</p>
                            </div>

                        </div>
                    </div>




                    <div className='flex w-[430px] m-auto rounded-xl 
                        transition-all hover:scale-[1.025] hover:shadow-xl'
                    >
                        <div className='flex flex-col w-[300px] m-auto 
                            border-4 border-slate-800 rounded-tl-xl rounded-bl-xl'
                        >
                            <Image
                                src={cpuI9}
                                width={1920}
                                height={1080}
                                alt="img cpui9"
                                className="w-auto h-auto object-cover rounded-tl-xl"
                            />
                            <div className='flex justify-around w-full h-auto 
                                bg-slate-50 border-t-4 border-t-slate-800 rounded-bl-xl'
                            >
                                <button className='w-20
                                    text-lg font-bold
                                    bg-blue-500 border-none rounded-full shadow-out                                 
                                    my-2 py-1
                                    hover:bg-blue-600 active:bg-blue-800'
                                >
                                    -
                                </button>
                                <button className='w-20
                                    text-lg font-bold
                                    bg-blue-500 border-none rounded-full shadow-out                                    
                                    my-2 py-1
                                    hover:bg-blue-600 active:bg-blue-800'
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col w-[300px] bg-slate-800 rounded-tr-xl rounded-br-xl'>
                            <div className='flex flex-col align-center justify-center w-full m-auto'>
                                <p className='text-lg font-bold mx-7 my-3 '>CPU Core i9</p>
                                <p className='text-md mx-7 my-2'>Price: 23.- CHF</p>
                                <p className='text-md m-2 mx-7 my-2'>Stock: 22</p>
                                <p className='text-md font-bold mx-auto my-3'>Total: 36.00.- CHF</p>
                            </div>

                        </div>
                    </div>



                    <div className='flex w-[430px] m-auto rounded-xl 
                        transition-all hover:scale-[1.025] hover:shadow-xl'
                    >
                        <div className='flex flex-col w-[300px] m-auto 
                            border-4 border-slate-800 rounded-tl-xl rounded-bl-xl'
                        >
                            <Image
                                src={cpuI9}
                                width={1920}
                                height={1080}
                                alt="img cpui9"
                                className="w-auto h-auto object-cover rounded-tl-xl"
                            />
                            <div className='flex justify-around w-full h-auto 
                                bg-slate-50 border-t-4 border-t-slate-800 rounded-bl-xl'
                            >
                                <button className='w-20
                                    text-lg font-bold
                                    bg-blue-500 border-none rounded-full shadow-out                                 
                                    my-2 py-1
                                    hover:bg-blue-600 active:bg-blue-800'
                                >
                                    -
                                </button>
                                <button className='w-20
                                    text-lg font-bold
                                    bg-blue-500 border-none rounded-full shadow-out                                    
                                    my-2 py-1
                                    hover:bg-blue-600 active:bg-blue-800'
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col w-[300px] bg-slate-800 rounded-tr-xl rounded-br-xl'>
                            <div className='flex flex-col align-center justify-center w-full m-auto'>
                                <p className='text-lg font-bold mx-7 my-3 '>CPU Core i9</p>
                                <p className='text-md mx-7 my-2'>Price: 23.- CHF</p>
                                <p className='text-md m-2 mx-7 my-2'>Stock: 22</p>
                                <p className='text-md font-bold mx-auto my-3'>Total: 36.00.- CHF</p>
                            </div>

                        </div>
                    </div>



                    <div className='flex w-[430px] m-auto rounded-xl 
                        transition-all hover:scale-[1.025] hover:shadow-xl'
                    >
                        <div className='flex flex-col w-[300px] m-auto 
                            border-4 border-slate-800 rounded-tl-xl rounded-bl-xl'
                        >
                            <Image
                                src={cpuI9}
                                width={1920}
                                height={1080}
                                alt="img cpui9"
                                className="w-auto h-auto object-cover rounded-tl-xl"
                            />
                            <div className='flex justify-around w-full h-auto 
                                bg-slate-50 border-t-4 border-t-slate-800 rounded-bl-xl'
                            >
                                <button className='w-20
                                    text-lg font-bold
                                    bg-blue-500 border-none rounded-full shadow-out                                 
                                    my-2 py-1
                                    hover:bg-blue-600 active:bg-blue-800'
                                >
                                    -
                                </button>
                                <button className='w-20
                                    text-lg font-bold
                                    bg-blue-500 border-none rounded-full shadow-out                                    
                                    my-2 py-1
                                    hover:bg-blue-600 active:bg-blue-800'
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <div className='flex flex-col w-[300px] bg-slate-800 rounded-tr-xl rounded-br-xl'>
                            <div className='flex flex-col align-center justify-center w-full m-auto'>
                                <p className='text-lg font-bold mx-7 my-3 '>CPU Core i9</p>
                                <p className='text-md mx-7 my-2'>Price: 23.- CHF</p>
                                <p className='text-md m-2 mx-7 my-2'>Stock: 22</p>
                                <p className='text-md font-bold mx-auto my-3'>Total: 36.00.- CHF</p>
                            </div>

                        </div>
                    </div>




                </div>

            </div>

         </div>
    )
}
