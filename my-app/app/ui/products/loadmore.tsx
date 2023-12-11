import React from 'react'

type LoadmoreProps = {
    load: boolean;
    handleClick: () => void;
}

export default function LoadMore({load, handleClick}: LoadmoreProps) {

    return (
        <>
            {load === false ? (
                <div className='flex align-center justify-center px-4 py-6'>
                    <button
                        type="button"
                        onClick={handleClick}
                        className='font-bold text-md text-violet-600 hover:text-slate-50 
                        dark:text-slate-50 hover:dark:text-cyan-300
                        
                        dark:bg-gradient-to-r dark:from-slate-700 dark:from-10% 
                        dark:via-sky-500 dark:via-50% dark:to-slate-700 dark:to-90% 

                        hover:dark:bg-gradient-to-r hover:dark:from-slate-800 hover:dark:from-10% 
                        hover:dark:via-sky-500 hover:dark:via-50% hover:dark:to-slate-800 hover:dark:to-90% 

                        active:dark:bg-gradient-to-r active:dark:from-slate-900 active:dark:from-10% 
                        active:dark:via-sky-500 active:dark:via-50% active:dark:to-slate-900 active:dark:to-90% 

                        bg-gradient-to-r from-violet-400 from-10%
                        via-slate-50 via-50% to-violet-400 to-90%
                        hover:bg-gradient-to-r hover:from-violet-500 hover:from-10%
                        hover:via-slate-300 hover:via-50% hover:to-violet-500 hover:to-90%
                        active:bg-gradient-to-r active:from-violet-400 active:from-10%
                        active:via-slate-50 active:via-50% active:to-violet-400 active:to-90% 
                        px-4 py-2 transition-all ease-in-out rounded-lg'
                    >
                        Load more
                    </button>
                </div>
            ) : (
                null
            )}
        </>
    )
}
