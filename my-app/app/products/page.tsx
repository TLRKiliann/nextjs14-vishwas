"use client";

import { products } from "@/app/lib/datas";
import menuDropdown from "@/app/ui/dropdown"
import Link from 'next/link'

export default function ListProducts() {

    const dropDownMenu = menuDropdown(products);
    // 2 params ne fonctionnent pas dans une même URL !!!
    return (
        <div className="h-screen">
            
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
        </div>
    )
}
