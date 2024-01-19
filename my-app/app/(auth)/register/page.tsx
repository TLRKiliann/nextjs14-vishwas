import React from 'react'
import { Metadata } from 'next';
import RegisterForm from '@/app/ui/auth/register-form';
import { newMemberQuery } from '@/app/lib/db';

export const metadata: Metadata = {
  title: "register",
  description: "register page"
}

export default async function Register() {

  const data: unknown = await newMemberQuery("SELECT * FROM users", []);
  const users: string = JSON.stringify(data);

  return (
    <div className='w-full min-h-screen text-slate-900 dark:text-slate-50 py-[75px]'>
      
      <div className='flex justify-center'>
        <RegisterForm users={JSON.parse(users)} />
      </div>

    </div>
  )
}