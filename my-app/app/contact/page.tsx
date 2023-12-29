import React from 'react';
import DataShop from '@/app/ui/contact/data-shop';
import Message from '@/app/ui/contact/message';

export default function Contact() {
    return (
        <div className='min-h-screen bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-900 py-[75px]'>
            <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
                Contact us
            </h1>

            <div className="flex w-full h-auto md:mt-[0%] xl:mt-[5%]">

                <DataShop />

                <Message />

            </div>
        </div>
    )
}
