"use client";

export default function ErrorBoundary({error}: {error: Error}) {
  return (
    <div className="flex items-center justify-center w-full md:h-[400px] xl:h-[800px]">
        <p className="text-xl text-red-500 bg-slate-900 p-4 shadow-red rounded-lg">{error.message}</p>
    </div>
  )
}