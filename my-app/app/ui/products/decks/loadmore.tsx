import React from 'react'

type LoadmoreProps = {
    load: boolean;
    handleClick: () => void;
}

export default function LoadMore({load, handleClick}: LoadmoreProps) {

    return (
        <>
            {load === false ? (
                <div className='relative flex items-center justify-center w-full h-auto
                    bg-gradient-to-b from-transparent from-10% to-violet-100/20 to-90% 
                    dark:bg-gradient-to-b dark:from-transparent dark:from-10% dark:to-slate-900/90
                    dark:to-90% py-6 -mt-[90px] z-10'>
                    <button
                        type="button"
                        onClick={handleClick}
                        className='font-bold text-md text-slate-50 dark:hover:text-cyan-100 
                        dark:active:text-slate-50

                        dark:bg-gradient-to-br dark:from-indigo-800 dark:from-10% 
                        dark:via-blue-500 dark:via-50% dark:to-indigo-800 dark:to-90%
                        
                        dark:hover:bg-gradient-to-br dark:hover:from-indigo-700 dark:hover:from-10% 
                        dark:hover:via-blue-400 dark:hover:via-50% dark:hover:to-indigo-700 
                        dark:hover:to-90%

                        dark:active:bg-gradient-to-br dark:active:from-blue-500 dark:active:from-10% 
                        dark:active:via-blue-500 dark:active:via-50% dark:active:to-blue-500 
                        dark:active:to-90%

                        bg-violet-400 hover:bg-violet-500 active:bg-violet-400 
                        mt-10 px-5 py-2
                        rounded-lg transition-all ease-in-out'
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
