"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { ProductsProps } from "@/app/lib/definitions";
import DisplayProducts from "./display-products";
import LoadMore from './loadmore';

export default function LessMoreProducts(products: ProductsProps[]) {

    const [newProducts, setNewProducts] = useState<ProductsProps[]>([]);
    const [load, setLoad] = useState<boolean>(false);

    const handleClick = () => {
        setLoad((load) => !load);
    };

    console.log(newProducts, "newProd (1)")

    useEffect(() => {
        const fn = () => {
            console.log("into the fn")
            setNewProducts(products)
        }
        fn;
        return () => console.log("Clear effect")
    }, [])

    console.log(newProducts, "newProducts (2)")

    return (
        <div>
            <div className={`grid grid-cols-3 ${load === false ? "grid-rows-1" : "grid-row-2"} 
                justify-items-center gap-y-10 border border-slate-100 bg-slate-200/50 
                dark:border-slate-900 dark:bg-cyan-50 rounded-2xl shadow-in py-10`}>

                {load === false ? (
                    newProducts.slice(0, 3).map((prod) => (
                        <DisplayProducts
                            key={prod.id}
                            id={prod.id}
                            name={prod.name}
                            price={prod.price}
                            img={prod.img}
                            stock={prod.stock}
                        />
                    ))) : (
                        newProducts.slice(0, 6).map((prod) => (
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
