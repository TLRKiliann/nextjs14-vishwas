import React from 'react';
import type { Metadata } from 'next';
import LoginForm from '@/app/ui/auth/login-form';
// import bcrypt from 'bcrypt';

export const metadata: Metadata = {
  title: "login",
  description: "login to register"
}

export default function Login() {

  return (
    <div className='w-full min-h-screen bg-slate-100'>
      
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Login
      </h1>

      <div className='flex justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}