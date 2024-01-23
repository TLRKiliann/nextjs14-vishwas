"use client";

import type { ProductsProps } from "@/app/lib/definitions";
import React, { useState } from 'react'
import Card from './card';
import LoadMore from './loadmore';

export const dynamic = "force-dynamic";

export default function DecksCards({data}: {data: ProductsProps[]}) {

    const [load, setLoad] = useState<boolean>(false);

    const handleClick = (): void => {
        setLoad((load) => !load);
    };

    if (!data) {
        throw new Error("Error: server failed !")
    };

    return (
        <div className='w-4/5 h-full bg-white dark:bg-slate-900 m-auto mb-10'>
            <div className={`grid md:grid-cols-4 xl:grid-cols-5 ${load === false ? "grid-rows-1" : "grid-row-3"}
                justify-items-center gap-x-4 md:gap-y-6 xl:gap-y-10 dark:border-slate-900 bg-white
                dark:bg-slate-50 md:p-4 xl:px-4 xl:py-10 rounded-2xl shadow-inviolet dark:shadow-in`}
            >
                {load === false ? (
                    data.slice(0, 5).map((d: ProductsProps) => (
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
