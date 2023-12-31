"use client";

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image';
import { DecksProps } from '@/app/lib/definitions';
import { imgSetBakerDeck } from '@/app/lib/deckList';
import { imgSetBlindDeck } from '@/app/lib/deckList';
import { imgSetElementDeck } from '@/app/lib/deckList';
import { imgSetGirlDeck } from '@/app/lib/deckList';

type ColorPointProps = {
    color1: boolean;
    color2: boolean;
    color3: boolean;
}

type ImgSetProps = {
    id: number;
    images: StaticImageData[];
}

export default function BoxImage({paramsId, data}: {paramsId: string, data: DecksProps[]}) {

    const mappingData = data.find((d) => d.id === parseInt(paramsId));

    let retriveLibDeck = null;

    if (mappingData?.deckname.slice(0, 5) === "baker") {
        retriveLibDeck = imgSetBakerDeck;
        //console.log("here is baker decks");
    } else if (mappingData?.deckname.slice(0, 5) === "blind") {
        retriveLibDeck = imgSetBlindDeck;
        //console.log("here is blind decks")
    } else if (mappingData?.deckname.slice(0, 7) === "element") {
        retriveLibDeck = imgSetElementDeck;
        //console.log("here is element decks")
    } else if (mappingData?.deckname.slice(0, 4) === "girl") {
        retriveLibDeck = imgSetGirlDeck;
        //console.log("here is girl decks")
    } else {
        console.log("No deck was found !");
    }

    const searchId = retriveLibDeck?.find((img: ImgSetProps) => img.id === parseInt(paramsId));
    const initialState: string | undefined = searchId?.images[0].src;
    const [imgState, setImageState] = useState<string | undefined>(initialState)

    const [colorPoint, setColorPoint] = useState<ColorPointProps>({
        color1: true,
        color2: false,
        color3: false
    });

    const handlePointOne = () => {
        setImageState(searchId?.images[0].src);
        setColorPoint(prevState => ({
            ...prevState,
            color1: true,
            color2: false,
            color3: false
        }));
    };
    
    const handlePointTwo = () => {
        setImageState(searchId?.images[1].src);
        setColorPoint(prevState => ({
            ...prevState,
            color1: false,
            color2: true,
            color3: false
        }));
    };

    const handlePointThree = () => {
        setImageState(searchId?.images[2].src);
        setColorPoint(prevState => ({
            ...prevState,
            color1: false,
            color2: false,
            color3: true
        }));
    };

    return (
        <div className='flex w-3/5 h-content'>
                    
            <div className='flex w-full h-full rounded-tl-xl rounded-bl-xl'>
            
                <div className='flex flex-col items-center justify-around w-2/5 bg-slate-100 my-0 rounded-tl-xl rounded-bl-xl
                    transform transition translate-y-0 animate-right-start'>

                    <span onClick={handlePointOne} className="w-[100px] h-auto cursor-pointer p-2 pb-0">
                        <Image src={String(searchId?.images[0].src)} 
                            width={Number(searchId?.images[0].width)} 
                            height={Number(searchId?.images[0].height)}
                            alt="img bakerdeck" 
                            className='object-cover rounded-lg'
                        />
                    </span>

                    <span onClick={handlePointTwo} className="w-[100px] h-auto cursor-pointer p-2 pb-0">
                        <Image src={String(searchId?.images[1].src)} 
                            width={Number(searchId?.images[1].width)} 
                            height={Number(searchId?.images[1].height)}
                            alt="img bakerdeck" 
                            className='object-cover rounded-lg'
                        />
                    </span>

                    <span onClick={handlePointThree} className="w-[100px] h-auto cursor-pointer p-2 pb-2">
                        <Image src={String(searchId?.images[2].src)} 
                            width={Number(searchId?.images[2].width)} 
                            height={Number(searchId?.images[2].height)}
                            alt="img bakerdeck" 
                            className='object-cover rounded-lg'
                        />
                    </span>

                </div>

                <div className='flex flex-col items-center justify-between w-full bg-slate-100 border-r border-l 
                    border-slate-800/50 transform transition translate-y-0 animate-down-start'>
                    
                    <div className='flex items-center justify-center md:w-[200px] lg:w-[300px] h-auto 
                        bg-slate-100 m-auto p-4'>
                        
                        <Image src={String(imgState)} width={435} height={580} alt="img bakerdeck" 
                            className='object-cover rounded-lg'
                        />

                    </div>

                    <div className='flex items-center justify-center w-full
                        bg-slate-200 py-2'>

                        <span
                            onClick={handlePointOne}
                            className={`w-3 h-3 mx-1 cursor-pointer hover:bg-slate-500/80 transform transition 
                            ease active:bg-slate-400 active:scale-90 rounded-full 
                            ${colorPoint.color1 === true ? "bg-slate-500" : "bg-slate-400"}`}>
                        </span>

                        <span
                            onClick={handlePointTwo} 
                            className={`w-3 h-3 mx-1 cursor-pointer hover:bg-slate-500/80 transform transition 
                            ease active:bg-slate-400 active:scale-90 rounded-full
                            ${colorPoint.color2 === true ? "bg-slate-500" : "bg-slate-400"}`}>

                        </span>

                        <span
                            onClick={handlePointThree} 
                            className={`w-3 h-3 mx-1 cursor-pointer hover:bg-slate-500/80 transform transition 
                            ease active:bg-slate-400 active:scale-90 rounded-full
                            ${colorPoint.color3 === true ? "bg-slate-500" : "bg-slate-400"}`}>
                        </span>

                    </div>

                </div>
                
            </div>

        </div>  
    )
}
