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

    const [imgState, setImageState] = useState<StaticImageData>(bakerOver)

    const [colorPoint, setColorPoint] = useState<ColorPointProps>({
        color1: false,
        color2: false,
        color3: false
    });

    console.log(colorPoint.color1);
    const handlePointOne = () => {
        setImageState(bakerOver);
        setColorPoint((prev) => ({...prev, colorPoint: !colorPoint.color1}));

        console.log(colorPoint.color1, "result");
    }
    const handlePointTwo = () => {
        setImageState(bakerUnder);
        setColorPoint((prev) => ({...prev, colorPoint: !colorPoint.color2}));
    }
    const handlePointThree = () => {
        setImageState(bakerProfile);
        setColorPoint((prev) => ({...prev, colorPoint: !colorPoint.color3}));
    }

    return (
        <div className='w-full h-content border'>
                    
            <div className='flex h-full bg-slate-100 border'>
            
                <div className='flex flex-col items-center justify-around w-1/5
                    my-0 ml-0 border'>

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

                <div className='flex flex-col items-center justify-between w-full border'>
                    
                    <div className='flex items-center justify-center md:w-[200px] lg:w-[300px] h-auto 
                        bg-slate-100 m-auto p-4 border'>
                        
                        <Image src={imgState} width={435} height={580} alt="img bakerdeck" 
                            className='object-cover rounded-lg'/>

                    </div>

                    <div className='flex items-center justify-center w-full 
                        bg-slate-100 py-2 border'>
                        <span
                            onClick={handlePointOne}
                            
                            className={`w-4 h-4 bg-slate-900 mx-1 rounded-full 
                            ${colorPoint.color1 ? "bg-sky-500" : "bg-none"}`}>

                        </span>
                        <span
                            onClick={handlePointTwo} 
                            className={`w-4 h-4 bg-slate-900 mx-1 rounded-full
                            ${colorPoint.color2 ? "bg-sky-500" : "bg-none"}`}>

                        </span>
                        <span
                            onClick={handlePointThree} 
                            className={`w-4 h-4 bg-slate-900 mx-1 rounded-full
                            ${colorPoint.color3 ? "bg-sky-500" : "bg-none"}`}>

                        </span>
                    </div>

                </div>
                
            </div>

        </div>  
    )
}
