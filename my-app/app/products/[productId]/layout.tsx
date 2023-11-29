import React from 'react'

export default function DetailsProduct({children}: {children: React.ReactNode}) {
  return (
    <div className='min-h-screen'>
        <h1 className='text-4xl font-bold 
            text-transparent bg-clip-text 
            bg-gradient-to-br from-indigo-500 from-10% 
            via-sky-500 via-50% to-emerald-500 to-90%
            mx-2 my-auto'
        >
            Products
        </h1>
          {children}
        <h2>Display from the bottom of layout (DetailsProduct)!</h2>
    </div>
  )
}
