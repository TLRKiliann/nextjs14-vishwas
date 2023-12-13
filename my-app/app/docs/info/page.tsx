"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import { BsInfoCircle } from "react-icons/bs";

export default function Info() {
    
    const router = useRouter();
    
    const handleClick = () => {
        router.push('/');
        //router.replace()
        //router.back()
        //router.forward()
    }
  return (
    <div className='min-h-screen py-[75px]'>

        <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
          Info &nbsp;<BsInfoCircle />
        </h1>
        
        <button
          type="button"
          onClick={handleClick}
          className='text-cyan-300 font-bold bg-slate-800 border border-blue-400 rounded-lg m-4 px-3 py-2'
        >
          Back to home
        </button>

    </div>
  )
}
