import React from 'react'
import Image from 'next/image';
import mapShop from '@/public/img_bg/map-shop.png';

export default function DataShop() {
    return (
        <div className='relative w-2/5 h-auto text-lg font-bold text-indigo-500 dark:text-slate-600 
            bg-slate-50 mx-auto p-10 rounded-xl shadow-in'
        >

            <h3 className='text-2xl font-bold pb-4'>Contact</h3>
            
            <div className='flex align-center justify-between bg-indigo-100 dark:bg-slate-200 my-4'>
                <p className='pl-2'>Address: </p>
                <p className='pr-2'>Chemin des Lilas</p>
            </div>
            
            <div className='flex align-center justify-between bg-indigo-100 dark:bg-slate-200 my-4'>
                <p className='pl-2'>Email: </p>
                <p className='pr-2'>ourindustry@mail.com</p>
            </div>
            
            <div className='flex align-center justify-between bg-indigo-100 dark:bg-slate-200 my-4'>
                <p className='pl-2'>Phone: </p>
                <p className='pr-2'>078 324 34 44</p>
            </div>

            <div className='flex items-center justify-center w-full'>
                <Image src={mapShop} width={420} height={420} alt="map-shop img" 
                    className="object-cover rounded-lg" />
            </div>

        </div>
    )
}
