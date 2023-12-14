import React from 'react'
import type { Metadata } from 'next'
import ForgotForm from '@/app/ui/auth/forgot-form'

export const metadata: Metadata = {
  title: "forgot-password",
  description: "password forget"
}

export default function ForgotPassword() {
  return (
    <div className='min-h-screen'>
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Forgot Password
      </h1>

      <div className='w-full flex align-center justify-center'>
        <ForgotForm />
      </div>

    </div>
  )
}