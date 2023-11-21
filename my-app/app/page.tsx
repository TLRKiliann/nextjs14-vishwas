"use client";

import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Home() {
  
  const router = useRouter();

  return (
    <main className="w-full h-screen">
      <h1 className='text-2xl p-4'>Main Page</h1>
      <div className='flex flex-col w-40 bg-slate-800'>
        
          <Link href="/products" 
            className='text-blue-400 hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
          >
            Products
          </Link>

          <hr className='border-t border-slate-600' />

          <button onClick={() => router.push("/docs")}
            className='flex justify-start text-blue-400 
              hover:bg-slate-700 py-2 pl-6 hover:text-blue-300'
          >
            Docs
          </button>

      </div>
    </main>
  )
}
