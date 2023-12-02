"use client";

import { useState } from 'react';
import { products } from "@/app/lib/datas";
import menuDropdown from "@/app/ui/products/dropdown";
import DisplayProducts from "@/app/ui/products/display-products";

export default function ListProducts() {

    const [load, setLoad] = useState<boolean>(false);
    
    const dropDownMenu = menuDropdown(products);

    const handleClick = () => {
        setLoad((load) => !load);
    }

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            
            <div className="flex align-center justify-between p-4">

                <h1 className='text-4xl font-bold 
                    text-transparent bg-clip-text 
                    bg-gradient-to-br from-indigo-500 from-10% 
                    via-sky-500 via-50% to-emerald-500 to-90%
                    mx-0 my-auto'
                >
                    Products
                </h1>
            
                <div className='my-auto mr-2'>{dropDownMenu}</div>

            </div>


            <div className='px-20 pt-2 pb-10'>

                <div className={`grid grid-cols-3 ${load === false ? "grid-rows-1" : "grid-row-2"} 
                    justify-items-center gap-y-10 border border-slate-100 bg-slate-200/50 
                    dark:border-slate-900 dark:bg-cyan-50 rounded-2xl shadow-in py-10`}>

                    {load === false ? (
                        products.slice(0, 3).map((prod) => (
                            <DisplayProducts
                                key={prod.id}
                                id={prod.id}
                                name={prod.name}
                                price={prod.price}
                                img={prod.img}
                                stock={prod.stock}
                            />
                        ))) : (
                        products.slice(0, 6).map((prod) => (
                            <DisplayProducts
                                key={prod.id}
                                id={prod.id}
                                name={prod.name}
                                price={prod.price}
                                img={prod.img}
                                stock={prod.stock}
                            />
                        ))
                    )}
                </div>

                {load === false ? (
                    <div className='flex align-center justify-center p-4'>
                        <button
                            type="button"
                            onClick={handleClick}
                            className='font-bold bg-blue-600 px-4 py-2 hover:bg-blue-700 
                                active:bg-blue-800 rounded-lg'
                        >
                            Load more
                        </button>
                    </div>
                ) : (
                    null
                )}
            </div>
         </div>
    )
}
