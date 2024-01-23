"use client";

import React from 'react'
import { MdSkateboarding } from "react-icons/md";

type PropsTitleText = {
    titleBox: string;
    textBox: string;
}

export default function SectionTextColorBlock({titleBox, textBox}: PropsTitleText) {
    return (
        <div className='w-6/12 max-w-xl flex flex-col text-blue-300 m-auto transition ease duration-600 
            hover:scale-105 hover:text-blue-200 hover:shadow-xl rounded-lg'
        >
            <span className='h-10 border-none
                dark:bg-gradient-to-r dark:from-indigo-500 dark:from-10% 
                dark:via-sky-500 dark:via-50% dark:to-emerald-500 dark:to-90% 
                bg-gradient-to-r from-indigo-200 from-10% via-indigo-50 via-50% 
                to-indigo-200 to-90% rounded-tl-lg rounded-tr-lg'>
            </span >

            <section className='w-full flex'>

                <article className='h-auto dark:bg-slate-900 bg-white'>

                    <div className='inline-flex items-center px-10 text-transparent bg-clip-text 
                            dark:bg-gradient-to-br dark:from-indigo-500 dark:from-10% dark:via-sky-500 
                            dark:via-50% dark:to-emerald-500 dark:to-90% bg-indigo-500'>

                        <h2 className='md:text-xl xl:text-2xl text-justify font-bold py-4'>
                            {titleBox}
                        </h2>
                        <MdSkateboarding size={24} className="dark:text-blue-400 text-indigo-500 ml-2" />
                        

                    </div>

                    <p className='text-justify dark:text-blue-300 text-slate-600 px-10 pb-5'>
                        {textBox}
                    </p>

                </article>

            </section>

            <span className='h-10 border-none
                dark:bg-gradient-to-r dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-50% 
                dark:to-emerald-500 dark:to-90% 
                bg-gradient-to-r from-indigo-200 from-10% via-indigo-50 via-50% 
                to-indigo-200 to-90%
                rounded-bl-lg rounded-br-lg'>
            </span >
        </div>
    )
}
