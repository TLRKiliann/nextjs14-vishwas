import React from 'react'

export default function Docs({children}: {children: React.ReactNode}) {
  return (
    <div>
        <h2>Display from the top of layout (Docs)!</h2>
        {children}
    </div>
  )
}
