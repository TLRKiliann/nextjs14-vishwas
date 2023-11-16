import React from 'react'

export default function ReviewById({children}: {children: React.ReactNode}) {
  return (
    <div className='h-screen'>
        <h2>Display from the top of layout (ReviewById)!</h2>
        {children}
    </div>
  )
}
