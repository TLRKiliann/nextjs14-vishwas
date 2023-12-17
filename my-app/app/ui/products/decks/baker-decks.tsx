"use client";

import React, { useState } from 'react';
import { DecksProps } from "@/app/lib/definitions";
import CardBaker from './card-baker';
import LoadMore from '../loadmore';


export default function BakerDecksCards({bakerdecks}: {bakerdecks: DecksProps[]}) {
    const [load, setLoad] = useState<boolean>(false);

    const handleClick = () => {
        setLoad((load) => !load);
    };
    return (
        <div className='w-full h-auto border p-10'>

            {/* grid with loader */}
            <div className={`grid md:grid-cols-3 ${load === false ? "grid-rows-1" : "grid-row-2"} 
                justify-items-center gap-y-10 border-none
                dark:border-slate-900 bg-slate-50 dark:bg-slate-50
                rounded-2xl shadow-inviolet dark:shadow-in p-10`}
            >
                {/* lg:grid-cols-4 xl:grid-cols-5 */}
                {load === false ? (
                    bakerdecks.slice(0, 3).map((bakerdeck: DecksProps) => (
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

/*
                {load === false ? (
                    decks.slice(0, 3).map((prod: DecksProps) => (
                        <CardBaker
                            key={prod.id}
                            id={prod.id}
                            name={prod.name}
                            img={prod.img}
                            price={prod.price}
                            stock={prod.stock}
                        />
                    ))) : (
                        decks.slice(0, 6).map((prod: DecksProps) => (
                            <CardBaker
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
*/