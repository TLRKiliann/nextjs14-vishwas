import React from 'react'

export default function DetailsProduct({children}: {children: React.ReactNode}) {
  return (
    <div className='min-h-screen'>
        <h2>Display from the top of layout (DetailsProduct)!</h2>
            {children}
        <h2>Display from the bottom of layout (DetailsProduct)!</h2>
    </div>
  )
}
