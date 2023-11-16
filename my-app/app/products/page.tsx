"use client";

import ProductsProps from "../lib/definitions";
import products from "../lib/datas";
import menuDropdown from "../ui/dropdown"
import Link from 'next/link'

export default function ListProducts() {

    const dropDownMenu = menuDropdown(products);
    // 2 params ne fonctionnent pas dans une même URL !!!
    return (
        <div className="h-screen">
            <div>{dropDownMenu}</div>
            <h1 className='m-4'>List of products</h1>

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
