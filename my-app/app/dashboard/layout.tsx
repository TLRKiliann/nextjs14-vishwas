import React from 'react'
import SideNav from '@/app/ui/auth/sidenav';

export default function Dashboard({children}: {children: React.ReactNode}) {
  return (
    <div className='min-h-screen py-[75px]'>
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Dashboard
      </h1>
      <SideNav />
      {children}
    </div>
  )
}