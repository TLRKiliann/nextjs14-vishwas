import type { Metadata } from 'next';
import React from 'react';
import Image from 'next/image';
import DataShop from '@/app/ui/contact/data-shop';
import Message from '@/app/ui/contact/message';
import mauricio from "@/public/img_bg/mauricio.jpg";

export const metadata: Metadata = {
    title: "Contact",
    description: "access accepted"
};

export default function Contact() {
    return (
        <div className='w-full min-h-screen bg-slate-100 dark:bg-slate-900 py-[75px]'>
            
            <div className='-z-10'>
                <Image
                    src={mauricio} width={1920} height={1441}
                    alt="img bg contact"
                    className='fixed object-cover -mt-[190px] opacity-50'
                />
            </div>

            <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
                Contact us
            </h1>

            <div className="flex w-full h-auto">

                <DataShop />

                <Message />

            </div>

        </div>
    )
}
