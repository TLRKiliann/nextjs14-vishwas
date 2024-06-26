import React from 'react'

type PropsText = {
    title: string;
    text: string;
    children?: React.JSX.Element;
}

export default function TextBlocks({title, text, children}: PropsText) {
    return (
        <div className='w-full dark:bg-slate-900 bg-slate-100 py-10'>
            
            <hr className='w-4/5 m-auto mb-10 border border-indigo-800/40 dark:border-blue-600/50 dark:shadow-lgblue'/>

            <div className='flex flex-col align-center justify-center w-4/5 m-auto'>

                <h2 className='m-auto ml-0 sm:text-3xl xl:text-5xl font-extrabold text-transparent bg-clip-text 
                    light-main-tile dark-main-tile mb-4 pb-1'
                >
                    {title}
                </h2>

                <p className='sm:text-md xl:text-2xl text-justify text-slate-600 dark:text-blue-300'>
                    {text}
                </p>

                {children ? children : null}

            </div>

            <hr className='w-4/5 m-auto mt-10 border border-indigo-800/40 dark:border-blue-600/50 dark:shadow-lgblue'/>

        </div>
    )
}
