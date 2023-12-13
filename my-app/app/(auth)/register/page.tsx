import React from 'react'
import RegisterForm from '@/app/ui/auth/register-form';
import { newMemberQuery } from '@/app/lib/db';

export default async function Register() {

  const data: unknown = await newMemberQuery("SELECT * FROM users", []);
  const users: string = JSON.stringify(data);

  return (
    <div className='min-h-screen'>
      
      <div className='flex justify-center'>
        <RegisterForm users={JSON.parse(users)} />
      </div>

    </div>
  )
}