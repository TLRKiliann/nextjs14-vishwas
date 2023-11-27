import React from 'react'
import SideNav from '@/app/ui/auth/sidenav';

export default function Dashboard({children}: {children: React.ReactNode}) {
  return (
    <div className='min-h-screen'>
      <h1 className='text-2xl p-2'>Dashboard</h1>
      <SideNav />
      {children}
    </div>
  )
}