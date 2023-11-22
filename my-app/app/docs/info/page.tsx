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
    <div className='flex flex-col min-h-screen'>
        <h2>Info</h2>
        <button type="button" onClick={handleClick}>Go home</button>
    </div>
  )
}
