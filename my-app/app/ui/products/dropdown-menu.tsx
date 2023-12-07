"use client";

import React from 'react'
// import { products } from "@/app/lib/datas";
import { ProductsProps } from "@/app/lib/definitions";
import DropDownComp from "./dropdown";

export default function DropDownMenu({products}: {products: ProductsProps[]}) {

    const dropDownMenu = DropDownComp(products);

    return (
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
    )
}
