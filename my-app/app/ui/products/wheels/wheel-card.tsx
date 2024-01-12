"use client";

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { WheelsProps } from '@/app/lib//definitions';

export default function WheelCard({data}: {data: WheelsProps[]}) {

    const router = useRouter();

    const bonesWord = data.find((d) => d.name);
    const convertBonesWord = bonesWord?.name;
    const wordCut = convertBonesWord?.split(" ");
    const wheelPath = wordCut?.[0];

    const handleBone = (id: number) => {
        router.push(`/products/wheels/${id}`);
    };

    if (!data) {
        throw new Error("Error: server failed !");
    };

    return (
        <div className='w-full h-auto border'>
    
            <div className="w-[600px] m-auto py-2">
                <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
                    {wheelPath?.toUpperCase()}
                </h2>
            </div>

            <div className='grid grid-cols-4 grid-row-3 gap-0 justify-items-center w-[600px] m-auto border'>

                {data.map((bone: WheelsProps) => (
                    <span key={bone.id} onClick={() => handleBone(bone.id)} 
                        className='w-[150px] h-auto cursor-pointer border'>
                        <Image src={bone.image} width={435} height={580} alt="img bone"
                            className='object-cover' />
                        <div className='text-slate-600/80 bg-slate-50 p-2 border'>
                            <h3 className='text-sm font-bold'>{bone.name.charAt(0).toUpperCase() + bone.name.slice(1)}</h3>
                            <h4 className='text-sm font-bold'>{bone.price}.-</h4>
                            <p className='text-sm mt-2'>Stock: {bone.stock}pcs</p>
                        </div>
                    </span>
                ))}

            </div>
        </div>
    )
}
