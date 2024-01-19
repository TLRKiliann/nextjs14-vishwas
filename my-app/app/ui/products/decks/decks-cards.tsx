"use client";

import type { ProductsProps } from "@/app/lib/definitions";
import React, { useState } from 'react'
import Card from './card';
import LoadMore from './loadmore';

export default function DecksCards({data}: {data: ProductsProps[]}) {

    const [load, setLoad] = useState<boolean>(false);

    const handleClick = (): void => {
        setLoad((load) => !load);
    };

    if (!data) {
        throw new Error("Error: server failed !")
    };

    return (
        <div className='w-full h-full bg-white dark:bg-slate-900 mt-20 px-4 pt-0 pb-4'>
            <div className={`grid md:grid-cols-4 ${load === false ? "grid-rows-1" : "grid-row-3"}
                justify-items-center gap-y-10 dark:border-slate-900 bg-white 
                dark:bg-slate-50 rounded-2xl shadow-inviolet dark:shadow-in p-10`}
            >
                {load === false ? (
                    data.slice(0, 4).map((d: ProductsProps) => (
                        <Card
                            key={d.id}
                            id={d.id}
                            name={d.name}
                            img={d.img}
                            price={d.price}
                            stock={d.stock}
                        />
                    ))) : (
                        data.slice(0, 9).map((d: ProductsProps) => (
                            <Card 
                                key={d.id}
                                id={d.id}
                                name={d.name}
                                img={d.img}
                                price={d.price}
                                stock={d.stock}
                            />
                        )
                    )
                )}

            </div>

            <LoadMore load={load} handleClick={handleClick}/>

        </div>
    )
}
