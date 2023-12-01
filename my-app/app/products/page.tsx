"use client";

import Link from 'next/link';
import Image from 'next/image';
import { products } from "@/app/lib/datas";
import menuDropdown from "@/app/ui/products/dropdown";
//import cpuI9 from "@/public/img_cpu/i9_cpu.jpg";

export default function ListProducts() {

    const dropDownMenu = menuDropdown(products);
    // 2 params ne fonctionnent pas dans une même URL !!!
    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            
            <div className="flex align-center justify-between">

                <h1 className='text-4xl font-bold 
                    text-transparent bg-clip-text 
                    bg-gradient-to-br from-indigo-500 from-10% 
                    via-sky-500 via-50% to-emerald-500 to-90%
                    p-2'
                >
                    Products
                </h1>
            
                <div>{dropDownMenu}</div>

            </div>


            <div className='px-20 pb-10'>

                <div className='grid grid-cols-3 grid-rows-2 justify-items-center 
                    gap-y-10 border border-slate-100 bg-slate-200/50 dark:border-slate-900 
                    dark:bg-cyan-50 rounded-2xl shadow-in p-10'>

                    {products.map((prod) => (
                        <div key={prod.id} className='flex flex-col m-auto h-auto
                            font-bold text-slate-100
                            dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
                            dark:via-sky-500 dark:via-50% dark:to-slate-900 dark:to-90%
                            bg-gradient-to-r from-blue-400 from-10% 
                            via-slate-50 via-50% to-indigo-400 to-90%
                            transform transition hover:scale-[1.025] hover:shadow-lg
                            translate-y-0 animate-up-start rounded-lg'
                        >

                            <div className='px-3 py-2 pt-3'>
                                <div className='md:w-[200px] xl:w-[300px] h-auto rounded-lg shadow-in'
                                >
                                    <Image
                                        src={prod.img}
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
                                    <h3 className='text-xl m-auto transform'>
                                        {prod.name}
                                    </h3>
                                    <p className='text-md mx-auto my-1'>
                                        {prod.price}.- CHF
                                    </p>
                                    <p className='text-sm mx-auto mb-1'>
                                        Stock: {prod.stock}
                                    </p>
                                    <p className='text-sm mx-auto mb-2'>
                                        Count: 0 {/* comment faire */}
                                    </p>
                                    <Link 
                                        href={`/products/${prod.id}`} 
                                        className='text-xs mx-auto text-blue-500 hover:text-blue-400 pb-1'>
                                        View details
                                    </Link>
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
                    ))}
                </div>
            </div>
         </div>
    )
}
