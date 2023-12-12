import React from 'react'
import type { Metadata } from 'next'
import RegisterForm from '@/app/ui/auth/register-form';

export const metadata: Metadata = {
  title: "register",
  description: "registered"
}

export default function Register() {

  return (
    <div className='min-h-screen'>

      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Register
      </h1>

      <RegisterForm />

    </div>
  )
}