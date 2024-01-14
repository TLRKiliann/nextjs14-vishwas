"use client";

import type { TrucksProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';

export default function TrucksCards({id, name, price, stock, img}: TrucksProps) {
    
    return (
        <div key={id} className='w-[400px] m-auto bg-slate-100 mt-10 border-2'>

            <div className='flex justify-center'>

                <div className='w-[200px] h-auto border border-slate-300'>
                    <Image src={img} width={435} height={580} alt="img truck" 
                        className='object-cover' />

                    <div className='text-slate-600 p-2'>
                        <p className='text-sm font-bold'>{name}</p>
                        <p className='text-sm'>{price}.-</p>
                        <p className='text-sm'>Stock: {stock}pcs</p>
                    </div>

                    <form action="">
                        <input type="number" id="id" name="id" value="id" hidden readOnly />

                        <button type="submit" id="sumbit" name="submit" value="subTruck">Sub</button>

                        <button type="submit" id="sumbit" name="submit" value="addTruck">Add</button>

                    </form>

                </div>

            </div>

        </div>
    )
}
