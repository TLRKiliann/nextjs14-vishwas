import React from 'react';
import Message from '@/app/ui/contact/message';

export default function Contact() {
    return (
        <div className='min-h-screen bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-900 py-[75px]'>
            <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
                Contact us
            </h1>

            <div className="flex w-full h-auto md:mt-[2%] xl:mt-[5%]">

                <div className='w-2/5 h-auto text-lg font-bold text-indigo-500 dark:text-slate-600 
                    bg-slate-50 mx-auto mt-2 p-10 rounded-xl shadow-inviolet dark:shadow-in border'
                >

                    <h3 className='text-2xl font-bold pb-4'>Contact</h3>
                    
                    <div className='flex align-center justify-between bg-indigo-100 dark:bg-slate-200 my-4 border'>
                        <p className='pl-2'>Address: </p>
                        <p className='pr-2'>Chemin des Lilas</p>
                    </div>
                    
                    <div className='flex align-center justify-between bg-indigo-100 dark:bg-slate-200 my-4 border'>
                        <p className='pl-2'>Email: </p>
                        <p className='pr-2'>ourindustry@mail.com</p>
                    </div>
                    
                    <div className='flex align-center justify-between bg-indigo-100 dark:bg-slate-200 my-4 border'>
                        <p className='pl-2'>Phone: </p>
                        <p className='pr-2'>078 324 34 44</p>
                    </div>

                </div>

                <Message />

            </div>
        </div>
    )
}
