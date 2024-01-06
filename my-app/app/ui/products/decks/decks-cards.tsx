"use client";

import React, { useState } from 'react'
import { DecksProps } from "@/app/lib/definitions";
import Card from './card';
import LoadMore from '../loadmore';

export default function DecksCards({data}: {data: DecksProps[]}) {

    const [load, setLoad] = useState<boolean>(false);

    const handleClick = () => {
        setLoad((load) => !load);
    };

    if (!data) {
        throw new Error("Error: server failed !")
    };

    return (
        <div className='w-full h-full bg-slate-900 px-4 pt-0 pb-4'>
        {/* {load === false ? "grid-rows-1" : "grid-row-3"} */}
            <div className={`grid md:grid-cols-4 ${load === false ? "grid-rows-1" : "grid-row-3"}
                justify-items-center gap-y-10 dark:border-slate-900 bg-white 
                dark:bg-slate-50 rounded-2xl shadow-in p-10`}
            >
                {load === false ? (
                    data.slice(0, 4).map((d: DecksProps) => (
                        <Card
                            key={d.id}
                            id={d.id}
                            deckname={d.deckname}
                            img={d.img}
                            price={d.price}
                            stock={d.stock}
                        />
                    ))) : (
                        data.slice(0, 9).map((d: DecksProps) => (
                            <Card 
                                key={d.id}
                                id={d.id}
                                deckname={d.deckname}
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
