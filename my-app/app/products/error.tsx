"use client";

export default function ErrorBoundary({error}: {error: Error}) {
  return (
    <div className="flex items-center w-full min-h-screen p-[75px]">
        <p>{error.message}</p>
    </div>
  )
}