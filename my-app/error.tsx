"use client";

import React from 'react'

export default function ErrorBoundary({error}: {error: Error}) {
  return (
    <div className='min-h-screen'>
        <h2>Something went wrong: {error.message}</h2>
    </div>
  )
}
