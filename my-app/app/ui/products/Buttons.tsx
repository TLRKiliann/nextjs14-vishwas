import React from 'react'

type PropsBtn = {
    id: number;
    sign: string;
    handleFusion: () => void;
}

export default function Buttons({id, handleFusion, sign}: PropsBtn) {

    return (
        <>
            <button
                key={id}
                type="button"
                onClick={handleFusion}
                className='w-16 text-lg dark:text-slate-50 font-bold border-none
                    hover:scale-[0.95] hover:bg-blue-600 hover:shadow-none
                    active:bg-blue-600 active:shadow-inlight active:text-slate-300
                    shadow-btn dark:border-none dark:shadow-btn
                    transition transform ease-in-out
                    dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
                    dark:via-sky-400 dark:via-50% dark:to-slate-900 dark:to-90%
                    dark:hover:from-slate-600 dark:hover:from-10% dark:hover:via-sky-500 
                    dark:hover:via-50% dark:hover:to-slate-600 dark:hover:to-90% 
                    dark:hover:shadow-none dark:active:text-emerald-500
                    dark:active:shadow-in my-3 py-1 rounded-full'
            >
                {sign}
            </button>
        </>
    )
}
