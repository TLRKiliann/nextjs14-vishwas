import React from 'react'
import type { Metadata } from 'next'
import ForgotForm from '@/app/ui/auth/forgot-form'

export const metadata: Metadata = {
  title: "forgot-password",
  description: "forgot-password page"
}

export default function ForgotPassword() {
  return (
    <div className='w-full min-h-screen text-slate-900 dark:text-slate-50 py-[75px]'>
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Forgot Password
      </h1>

      <div className='w-full flex align-center justify-center'>
        <ForgotForm />
      </div>

    </div>
  )
}