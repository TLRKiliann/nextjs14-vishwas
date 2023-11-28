import React from 'react'

export default function Docs({children}: {children: React.ReactNode}) {
  return (
    <div>
      <h1 className='text-4xl font-bold 
        text-transparent bg-clip-text 
        bg-gradient-to-br from-indigo-500 from-10% 
        via-sky-500 via-50% to-emerald-500 to-90%
        mx-2 my-3'
      >
        Docs
      </h1>
        {children}
    </div>
  )
}
