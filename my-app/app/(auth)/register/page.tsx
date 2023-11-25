import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "register",
  description: "registered"
}

export default function Register() {
  return (
    <div className='flex flex-col min-h-screen'>
      <h1 className='text-2xl p-2'>Register</h1>
    </div>
  )
}