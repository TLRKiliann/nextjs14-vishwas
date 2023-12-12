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
                        className='font-bold text-md text-slate-100
                        dark:text-sky-500 dark:hover:text-slate-50
                        dark:bg-slate-900 dark:hover:bg-sky-600/50 dark:active:bg-sky-700
                        dark:active:text-slate-300
                        bg-violet-400 hover:bg-violet-500 active:bg-violet-400 
                        mt-10 px-4 py-2 shadow-lg dark:shadow-inlight hover:shadow-none dark:hover:shadow-none 
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
