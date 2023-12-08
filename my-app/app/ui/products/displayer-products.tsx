"use client";

import React from 'react';
import { useState } from 'react';
import { ProductsProps } from "@/app/lib/definitions";
import CardProducts from "./card-products";
import LoadMore from './loadmore';

export default function DisplayerProducts({products}: {products: ProductsProps[]}) {

    const [load, setLoad] = useState<boolean>(false);

    const handleClick = () => {
        setLoad((load) => !load);
    };

    return (
        <div>
            <div className={`grid grid-cols-3 ${load === false ? "grid-rows-1" : "grid-row-2"} 
                justify-items-center gap-y-10 border-none bg-slate-200/20 
                dark:border-slate-900 dark:bg-cyan-50 rounded-2xl dark:shadow-in shadow-inviolet py-10`}>

                {load === false ? (
                    products.slice(0, 3).map((prod: ProductsProps) => (
                        <CardProducts
                            key={prod.id}
                            id={prod.id}
                            name={prod.name}
                            img={prod.img}
                            price={prod.price}
                            stock={prod.stock}
                        />
                    ))) : (
                        products.slice(0, 6).map((prod: ProductsProps) => (
                            <CardProducts
                                key={prod.id}
                                id={prod.id}
                                name={prod.name}
                                img={prod.img}
                                price={prod.price}
                                stock={prod.stock}
                            />
                        )
                    )
                )}
            </div>
                <LoadMore load={load} handleClick={handleClick}/>
        </div>
    )
}
