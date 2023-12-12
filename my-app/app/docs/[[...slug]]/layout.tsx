import React from 'react'

export default function Docs({children}: {children: React.ReactNode}) {
  return (
    <div className='py-[75px]'>
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Docs
      </h1>
        {children}
    </div>
  )
}
