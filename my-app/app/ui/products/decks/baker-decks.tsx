"use client";

import React, { useState } from 'react';
import CardBaker from './card-baker';
import LoadMore from '../loadmore';

export default function BakerDecksCards() {
    const [load, setLoad] = useState<boolean>(false);

    const handleClick = () => {
        setLoad((load) => !load);
    };
    return (
        <div className='w-full h-auto border p-10'>

            {/* grid with loader */}
            <div className={`grid grid-cols-3 ${load === false ? "grid-rows-1" : "grid-row-2"} 
                justify-items-center gap-y-10 border-none
                dark:border-slate-900 bg-slate-50 dark:bg-slate-50
                rounded-2xl shadow-inviolet dark:shadow-in p-10`}
            >

                <CardBaker />

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