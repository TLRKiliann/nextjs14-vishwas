"use client";

import React from 'react'
import { MdSkateboarding } from "react-icons/md";

type PropsTitleText = {
    titleBox: string;
    textBox: string;
}

export default function SectionTextColorBlock({titleBox, textBox}: PropsTitleText) {
    return (
        <div className='w-6/12 max-w-xl flex flex-col text-blue-300 m-auto
            transform transition ease-in-out rounded-lg
            hover:scale-105 hover:text-blue-200 hover:shadow-2xl'
        >
            <span className='h-10 border-none
                dark:bg-gradient-to-r dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-50% 
                dark:to-emerald-500 dark:to-90% 
                bg-gradient-to-r from-violet-400 from-10% via-slate-200 via-50% to-violet-400 to-90% 
                rounded-tl-lg rounded-tr-lg'>
            </span >

            <section className='w-full flex'>

                <article className='h-auto dark:bg-slate-900 bg-white'>

                    <h2 className='flex align-center text-2xl font-bold 
                        text-transparent bg-clip-text 
                        dark:bg-gradient-to-br dark:from-indigo-500 dark:from-10% dark:via-sky-500 
                        dark:via-50% dark:to-emerald-500 dark:to-90%
                        bg-gradient-to-br from-violet-500 from-10% 
                        via-purple-500 via-50% to-violet-200 to-90%
                        py-4 pl-10'
                    >
                        {titleBox}
                        <MdSkateboarding className="dark:text-blue-400 text-violet-500 mt-1 ml-4" />
                    </h2>

                    <p className='text-justify dark:text-blue-300 text-slate-600 px-10 pb-5'>
                        {textBox}
                    </p>

                </article>

            </section>

            <span className='h-10 border-none
                dark:bg-gradient-to-r dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-50% 
                dark:to-emerald-500 dark:to-90% 
                bg-gradient-to-r from-violet-400 from-10% via-slate-200 via-50% to-violet-400 to-90% 
                rounded-bl-lg rounded-br-lg'>
            </span >
        </div>
    )
}
