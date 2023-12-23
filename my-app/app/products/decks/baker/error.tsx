"use client";

export default function ErrorBoundary({error, reset}: {error: Error, reset: () => void}) {
  return (
    <div className="flex items-center w-full min-h-screen p-[75px]">
        <p>{error.message}</p>
        <button 
          type="button"
          onClick={reset}
          className="text-sm font-bold text-red-400 bg-slate-800 ml-4 
            px-4 py-2 border border-red-400 rounded">
            Try again
        </button>
    </div>
  )
}
