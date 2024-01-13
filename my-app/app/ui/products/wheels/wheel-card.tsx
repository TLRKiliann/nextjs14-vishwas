"use client";

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { WheelsProps } from '@/app/lib//definitions';

export default function WheelCard({data}: {data: WheelsProps[]}) {

    const router = useRouter();

    const bonesWord = data.find((d) => d.name);
    const convertBonesWord: string | undefined = bonesWord?.name;
    const wordCut = convertBonesWord?.split(" ");
    const wheelPath = wordCut?.[0];

    const handlePath = (id: number) => {
        router.push(`/products/wheels/${wheelPath}/${id}`);
    };

    if (!data) {
        throw new Error("Error: server failed !");
    };

    return (
        <div className='h-auto bg-slate-300 mx-[200px] mb-10 pt-4 pb-10 rounded dark:shadow-in shadow-inviolet'>
    
            <div className="w-[600px] m-auto py-2">
                <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
                    {wheelPath ? wheelPath.charAt(0).toUpperCase() + wheelPath.slice(1) : null}
                </h2>
            </div>

            <div className='grid grid-cols-4 grid-row-3 gap-0 justify-items-center w-[600px] bg-slate-50 
                m-auto rounded-xl dark:shadow-lg shadow-none'>

                {data.map((wheelUnit: WheelsProps) => (
                    <span key={wheelUnit.id} onClick={() => handlePath(wheelUnit.id)} 
                        className='w-[150px] h-auto cursor-pointer hover:opacity-90'>
                        <Image src={wheelUnit.img} width={435} height={580} alt="img wheelUnit"
                            className='object-cover rounded-tr-xl rounded-tl-xl' />
                        <div className='text-slate-600/80 p-2'>
                            <h3 className='text-sm font-bold'>
                                {wheelUnit.name.charAt(0).toUpperCase() + wheelUnit.name.slice(1)}
                            </h3>
                            <h4 className='text-sm font-bold'>{wheelUnit.price}.-</h4>
                            <p className='text-sm mt-2'>Stock: {wheelUnit.stock}pcs</p>
                        </div>
                    </span>
                ))}

            </div>
        </div>
    )
}
