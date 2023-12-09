import React from 'react'
import type { Metadata } from 'next'
import LoginForm from '@/app/ui/auth/login-form';
import bcrypt from 'bcrypt';

export const metadata: Metadata = {
  title: "login",
  description: "login to register"
}

export default function Login() {

  return (
    <div className='min-h-screen'>
      
      <h1 className='text-4xl font-bold 
        text-transparent bg-clip-text 
        dark:bg-gradient-to-br dark:from-indigo-500 dark:from-10% 
        dark:via-sky-500 dark:via-50% dark:to-emerald-500 dark:to-90%
        bg-gradient-to-br from-violet-500 from-10% 
        via-purple-500 via-50% to-violet-200 to-90%
        m-auto p-4'
      >
        Login
      </h1>

      <div className='flex justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}