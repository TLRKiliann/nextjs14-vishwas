import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: "register",
    description: "registered"
}

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <div className='py-[75px]'>
            <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
                Register
            </h1>
            {children}
        </div>
    )
}
