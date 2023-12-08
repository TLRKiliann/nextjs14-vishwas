import React from 'react'

export default function DetailsProduct({children}: {children: React.ReactNode}) {
  return (
    <div className='min-h-screen bg-slate-100 text-slate-900 dark:text-slate-50 dark:bg-slate-900'>
        <h1 className='text-4xl font-bold 
            text-transparent bg-clip-text
            dark:bg-gradient-to-br dark:from-indigo-500 dark:from-10% 
            dark:via-sky-500 dark:via-50% dark:to-emerald-500 dark:to-90%
            bg-gradient-to-br from-violet-500 from-10% 
            via-purple-500 via-50% to-violet-200 to-90%
            p-4'
        >
          Products
        </h1>
          {children}
        <h2>Display from the bottom of layout (DetailsProduct)!</h2>
    </div>
  )
}
