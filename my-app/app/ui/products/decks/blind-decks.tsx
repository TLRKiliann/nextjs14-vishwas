"use client";

import React, { useState } from 'react'
import { DecksProps } from "@/app/lib/definitions";
import CardBlind from './card-blind';
import LoadMore from '../loadmore';

export default function BlindDecksCards({blinddecks}: {blinddecks: DecksProps[]}) {

    const [load, setLoad] = useState<boolean>(false);

    const handleClick = () => {
        setLoad((load) => !load);
    };
    return (
        <div className='w-full h-auto px-20 py-10'>

            {/* grid with loader */}
            <div className={`grid md:grid-cols-4 ${load === false ? "grid-rows-1" : "grid-row-2"} 
                justify-items-center gap-y-10 border-none
                dark:border-slate-900 bg-slate-50 dark:bg-slate-50
                rounded-2xl shadow-in p-10`}
            >
                {/* lg:grid-cols-4 xl:grid-cols-5 */}
                {load === false ? (
                    blinddecks.slice(0, 4).map((blinddeck: DecksProps) => (
                        <CardBlind
                            key={blinddeck.id}
                            id={blinddeck.id}
                            deckname={blinddeck.deckname}
                            img={blinddeck.img}
                            price={blinddeck.price}
                            stock={blinddeck.stock}
                        />


                    ))) : (
                        blinddecks.slice(0, 9).map((blinddeck: DecksProps) => (
                            <CardBlind 
                                key={blinddeck.id}
                                id={blinddeck.id}
                                deckname={blinddeck.deckname}
                                img={blinddeck.img}
                                price={blinddeck.price}
                                stock={blinddeck.stock}
                            />
                        )
                    )
                )}

            </div>

            <LoadMore load={load} handleClick={handleClick}/>

        </div>
    )
}
