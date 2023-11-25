import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "dashboard",
  description: "access restricted"
}

export default function Dashboard() {
    return (
        <div className='flex flex-col min-h-screen'>
            <h1 className='text-2xl p-2'>Dashboard</h1>
            <Link href="/dashboard/invoices">Invoices</Link>
        </div>
    )
}