import React from 'react'

type PropsText = {
    title: string;
    text: string;
    children?: React.JSX.Element;
}

export default function TextBlocks({title, text, children}: PropsText) {
    return (
        <div className='w-full dark:bg-slate-900 bg-slate-100 py-10'>
            
            <hr className='w-3/5 m-auto mb-10 border border-blue-600/40'/>

            <div className='flex flex-col align-center justify-center w-3/5 m-auto'>

                <h2 className='text-3xl font-extrabold
                    dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br 
                    dark:from-indigo-500 dark:from-10% dark:via-sky-500 dark:via-50% 
                    dark:to-emerald-500 dark:to-90% 
                    text-transparent bg-clip-text bg-gradient-to-br from-blue-600 from-10% 
                    via-sky-400 via-50% to-cyan-200 to-90% mb-4'
                >
                    {title}
                </h2>

                <p className='text-justify dark:text-blue-300'>
                    {text}
                </p>

                {children ? children : null}

            </div>

            <hr className='w-3/5 m-auto mt-10 border border-blue-600/40'/>

        </div>
    )
}
