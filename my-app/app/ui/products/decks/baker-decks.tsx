"use client";

import React, { useState } from 'react'
import { DecksProps } from "@/app/lib/definitions";
import CardBaker from './card-baker';
import LoadMore from '../loadmore';

export default function BakerDecksCards({bakerdecks}: {bakerdecks: DecksProps[]}) {

    const [load, setLoad] = useState<boolean>(false);

    const handleClick = () => {
        setLoad((load) => !load);
    };

    if (!bakerdecks) {
        throw new Error("Baker's decks not found !")
    }

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
                    bakerdecks.slice(0, 4).map((bakerdeck: DecksProps) => (
                        <CardBaker
                            key={bakerdeck.id}
                            id={bakerdeck.id}
                            deckname={bakerdeck.deckname}
                            img={bakerdeck.img}
                            price={bakerdeck.price}
                            stock={bakerdeck.stock}
                        />


                    ))) : (
                        bakerdecks.slice(0, 9).map((bakerdeck: DecksProps) => (
                            <CardBaker 
                                key={bakerdeck.id}
                                id={bakerdeck.id}
                                deckname={bakerdeck.deckname}
                                img={bakerdeck.img}
                                price={bakerdeck.price}
                                stock={bakerdeck.stock}
                            />
                        )
                    )
                )}

            </div>

            <LoadMore load={load} handleClick={handleClick}/>

        </div>
    )
}
