"use client";

import React from 'react';
import { useState } from 'react';
import { ProductsProps } from "@/app/lib/definitions";
import DisplayProducts from "./display-products";
import LoadMore from './loadmore';

export default function LessMoreProducts(products: ProductsProps[]) {

    const [load, setLoad] = useState<boolean>(false);

    const handleClick = () => {
        setLoad((load) => !load);
    };

    return (
        <div>
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

                <LoadMore load={load} handleClick={handleClick}/>

        </div>
    )
}
