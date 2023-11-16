import React from 'react'

export default function DetailsProduct({children}: {children: React.ReactNode}) {
  return (
    <div>
        <h2>Display from the top of layout !</h2>
            {children}
        <h2>Display from the bottom of layout !</h2>
    </div>
  )
}
