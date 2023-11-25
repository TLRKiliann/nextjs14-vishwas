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
    <div className='min-h-screen'>
        <h2 className='flex flex-row align-center text-xl font-bold m-4'>Info &nbsp;<BsInfoCircle /></h2>
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
