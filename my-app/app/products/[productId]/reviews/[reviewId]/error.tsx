"use client";

import React from 'react'

export default function ErrorBoundary({error}: {error: Error}) {
  return (
    <div>
        <p>{error.message}</p>
    </div>
  )
}

/*
export default function ErrorBoundary({error, reset}: {error: Error, reset: () => void}) {
  return (
    <div>
        <p>{error.message}</p>
        <button type="button" onClick={reset}>Try again</button>
    </div>
  )
}
*/