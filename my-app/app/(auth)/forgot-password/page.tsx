import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "forgot-password",
  description: "password forget"
}


export default function ForgotPassword() {
  return (
    <div className='flex flex-col min-h-screen'>
      <h1 className='text-2xl p-2'>Forgot Password</h1>
    </div>
  )
}