"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import bakerOver from '@/public/img_decks/baker/baker-over.jpg';
import bakerUnder from '@/public/img_decks/baker/baker-under.jpg';
import bakerProfile from '@/public/img_decks/baker/baker-profile.jpg';

export default function BoxImage({paramsId}: {paramsId: string}) {

    const [imgState, setImageState] = useState();

    const pointOne = {}

    const handlePointOne = () => {

    }
    const handlePointTwo = () => {
        
    }
    const handlePointThree = () => {
        
    }

    return (
        <div className='w-full h-content border'>
                    
            <div className='flex h-full bg-slate-100 border'>
            
                <div className='flex flex-col items-center justify-around w-1/5
                    my-0 ml-0 border'>

                    <div className="w-[100px] h-auto p-2 pb-0">
                    <Image src={bakerOver} width={435} height={580} alt="img bakerdeck" 
                        className='object-cover rounded-lg'/>
                    </div>

                    <div className="w-[100px] h-auto p-2 pb-0">
                    <Image src={bakerUnder} width={435} height={580} alt="img bakerdeck" 
                        className='object-cover rounded-lg'/>
                    </div>

                    <div className="w-[100px] h-auto p-2 pb-2">
                    <Image src={bakerProfile} width={435} height={580} alt="img bakerdeck" 
                        className='object-cover rounded-lg'/>
                    </div>

                </div>
                

                <div className='flex flex-col justify-end w-full border'>
                    
                    <div className='flex items-center justify-center w-full h-full 
                        bg-slate-100 p-4 border'>
                        
                        <Image src={bakerOver} width={435} height={580} alt="img bakerdeck" 
                            className='object-cover rounded-lg'/>

                    </div>

                    <div className='flex items-center justify-center w-full 
                        bg-slate-100 py-2 border'>
                        <span
                            onClick={handlePointOne} 
                            className='w-4 h-4 bg-slate-900 mx-1 rounded-full'>

                        </span>
                        <span
                            onClick={handlePointTwo} 
                            className='w-4 h-4 bg-slate-900 mx-1 rounded-full'>

                        </span>
                        <span
                            onClick={handlePointThree} 
                            className='w-4 h-4 bg-slate-900 mx-1 rounded-full'>

                        </span>
                    </div>

                </div>
                
            </div>

        </div>  
    )
}
