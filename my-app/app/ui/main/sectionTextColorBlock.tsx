import React from 'react'
import { BsCpu } from "react-icons/bs";

type PropsTitleText = {
    titleBox: string;
    textBox: string;
}

export default function SectionTextColorBlock({titleBox, textBox}: PropsTitleText) {
    return (
        <>
            <span className='h-10 border-none
                bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
                rounded-tl-lg rounded-tr-lg'>
            </span >

            <section className='w-full flex'>

                <article className='h-auto dark:bg-slate-900 bg-slate-100'>

                    <h2 className='flex align-center text-2xl font-bold text-transparent bg-clip-text 
                        bg-gradient-to-br from-indigo-500 from-10% 
                    via-sky-500 via-50% to-emerald-500 to-90% py-4 pl-10'
                    >
                        {titleBox}<BsCpu className="dark:text-blue-400 text-blue-600 mt-1 ml-4" />
                    </h2>

                    <p className='text-justify dark:text-blue-300 text-slate-900 px-10 pb-5'>
                        {textBox}
                    </p>

                </article>

            </section>

            <span className='h-10 border-none
                bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% 
                rounded-bl-lg rounded-br-lg'>
            </span >
        </>
    )
}
