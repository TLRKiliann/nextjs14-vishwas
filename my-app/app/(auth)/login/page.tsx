import React from 'react';
import type { Metadata } from 'next';
import LoginForm from '@/app/ui/auth/login-form';

export const metadata: Metadata = {
  title: "login",
  description: "login to register"
};

export default function Login() {

  return (
    <div className='w-full min-h-screen text-slate-900 dark:text-slate-50 
      bg-slate-50 dark:bg-slate-900 py-[75px]'>
      
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
          Login
      </h1>

      <div className='w-full md:h-[500px] xl:h-[800px] flex items-center justify-center'>
        <LoginForm />
      </div>
    </div>
  )
}