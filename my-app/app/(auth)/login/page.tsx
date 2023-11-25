import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "login",
  description: "login to register"
}

export default function Login() {
  return (
    <div className='flex flex-col min-h-screen'>
      <h1 className='text-2xl p-2'>Login</h1>
    </div>
  )
}