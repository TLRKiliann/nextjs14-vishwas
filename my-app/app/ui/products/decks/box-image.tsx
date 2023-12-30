"use client";

import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image';
import bakerOver from '@/public/img_decks/baker/baker-over.jpg';
import bakerUnder from '@/public/img_decks/baker/baker-under.jpg';
import bakerProfile from '@/public/img_decks/baker/baker-profile.jpg';

type ColorPointProps = {
    color1: boolean;
    color2: boolean;
    color3: boolean;
}

export default function BoxImage({paramsId}: {paramsId: string}) {

    const initialState: StaticImageData = bakerOver;
    const [imgState, setImageState] = useState<StaticImageData>(initialState)

    const [colorPoint, setColorPoint] = useState<ColorPointProps>({
        color1: true,
        color2: false,
        color3: false
    });

    const handlePointOne = () => {
        setImageState(bakerOver);
        setColorPoint(prevState => ({
            ...prevState,
            color1: true,
            color2: false,
            color3: false
        }));
    };
    
    const handlePointTwo = () => {
        setImageState(bakerUnder);
        setColorPoint(prevState => ({
            ...prevState,
            color1: false,
            color2: true,
            color3: false
        }));
    };

    const handlePointThree = () => {
        setImageState(bakerProfile);
        setColorPoint(prevState => ({
            ...prevState,
            color1: false,
            color2: false,
            color3: true
        }));
    };

    return (
        <div className='flex justify-end w-full h-content'>
                    
            <div className='flex w-4/5 h-full bg-slate-100 rounded-tl-xl rounded-bl-xl'>
            
                <div className='flex flex-col items-center justify-around w-1/5
                    my-0 ml-0 rounded-tl-xl rounded-bl-xl'>

                    <span onClick={handlePointOne} className="w-[100px] h-auto p-2 pb-0">
                    <Image src={bakerOver} width={435} height={580} alt="img bakerdeck" 
                        className='object-cover rounded-lg'/>
                    </span>

                    <span onClick={handlePointTwo} className="w-[100px] h-auto p-2 pb-0">
                    <Image src={bakerUnder} width={435} height={580} alt="img bakerdeck" 
                        className='object-cover rounded-lg'/>
                    </span>

                    <span onClick={handlePointThree} className="w-[100px] h-auto p-2 pb-2">
                    <Image src={bakerProfile} width={435} height={580} alt="img bakerdeck" 
                        className='object-cover rounded-lg'/>
                    </span>

                </div>

                <div className='flex flex-col items-center justify-between w-full border-r border-l 
                    border-slate-400'>
                    
                    <div className='flex items-center justify-center md:w-[200px] lg:w-[300px] h-auto 
                        bg-slate-100 m-auto p-4'>
                        
                        <Image src={imgState} width={435} height={580} alt="img bakerdeck" 
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
