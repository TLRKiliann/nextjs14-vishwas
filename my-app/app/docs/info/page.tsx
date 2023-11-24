"use client";

import React from 'react'
import { useRouter } from 'next/navigation';

export default function Info() {
    
    const router = useRouter();
    
    const handleClick = () => {
        router.push('/');
        //router.replace()
        //router.back()
        //router.forward()
    }
  return (
    <div className='min-h-screen'>
        <h2>Info</h2>
        <button
          type="button"
          onClick={handleClick}
          className='text-cyan-300 font-bold bg-slate-800 border border-blue-400 rounded-lg m-4 px-3 py-2'
        >
          Go home
        </button>
    </div>
  )
}
