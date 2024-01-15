import React from 'react';
import Image from 'next/image';
import nextJs from '@/public/img_logo/next-logo.png';
import nextAuth from '@/public/img_logo/nextAuth-logo.png';
import reactLogo from '@/public/img_logo/react_logo.png';
import mySql from '@/public/img_logo/mysql-logo.png';
import tailWind from '@/public/img_logo/tailwind-logo.png';

export default function PartnersBloc() {
    return (
        <div className="text-lg text-slate-600">
            
            <h2 className='text-2xl font-normal text-center
                text-transparent bg-clip-text 
                dark:bg-gradient-to-br dark:from-indigo-800 dark:from-10% 
                dark:via-blue-500 dark:via-50% dark:to-indigo-800 dark:to-90%
                bg-gradient-to-br from-indigo-500 from-10% 
                via-indigo-400 via-50% to-indigo-500 to-90% py-4'
            >
                Our partners
            </h2>
        
            <div className="flex flex-col">

            <div className='flex align-center justify-evenly mt-10 mb-10'>

                <div className='text-center w-auto h-auto m-auto'>
                <Image src={nextJs} width={100} height={100} alt="img nextjs logo" className='object-cover' />
                <legend className="text-indigo-500 dark:text-sky-600 mt-2">NextJS</legend>
                </div>

                <div className='text-center w-[100px] h-auto m-auto'>
                <Image src={nextAuth} width={60} height={80} alt="img nextAuth logo" 
                    className='object-cover m-auto' />
                <legend className="text-indigo-500 dark:text-sky-600 mt-2">NextAuth</legend>
                </div>

                <div className='text-center w-[70px] h-auto m-auto'>
                <Image src={reactLogo} width={100} height={100} alt="img react logo" 
                    className='object-cover bg-slate-900 rounded-full' />
                <legend className="text-indigo-500 dark:text-sky-600 mt-2">React</legend>
                </div>

            </div>

            <div className='flex justify-evenly mb-10'>
                
                <div className='text-center w-[100px] h-auto my-auto'>
                <Image src={mySql} width={100} height={100} alt="img mysql logo" 
                    className='object-cover bg-slate-100/50 -mt-4 rounded-full' />
                <legend className="text-indigo-500 dark:text-sky-600 mt-2">MySQL</legend>
                </div>

                <div className='text-center w-[80px] h-auto my-auto'>
                <Image src={tailWind} width={100} height={100} alt="img tailwind logo" 
                    className='object-cover' />
                <legend className="text-indigo-500 dark:text-sky-600 mt-4">Tailwind</legend>
                </div>
                
            </div>

        </div>
    
    </div>
    )
}
