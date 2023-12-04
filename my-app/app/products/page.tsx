"use client";

import { products } from "@/app/lib/datas";
import DropDownMenu from '@/app/ui/products/dropdown-menu';
import lessMoreProducts from "@/app/ui/products/lessmore-products";

export default function ListProducts() {

    const productsFetched = lessMoreProducts(products);

    return (
        <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
            
            <DropDownMenu />

            <div className='px-20 pt-2 pb-10'>

                {productsFetched}

            </div>
         </div>
    )
}


