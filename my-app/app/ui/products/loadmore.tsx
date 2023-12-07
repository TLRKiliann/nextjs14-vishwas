import React from 'react'

type LoadmoreProps = {
    load: boolean;
    handleClick: () => void;
}

export default function LoadMore({load, handleClick}: LoadmoreProps) {

    return (
        <>
            {load === false ? (
                <div className='flex align-center justify-center p-4'>
                    <button
                        type="button"
                        onClick={handleClick}
                        className='font-bold bg-blue-600 px-4 py-2 hover:bg-blue-700 
                            active:bg-blue-800 rounded-lg'
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
