import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "dashboard",
  description: "access restricted"
}

export default function Dashboard() {
    return (
        <ul className='list-disc m-2 pl-4 hover:text-blue-400'>
            <li>
                <Link 
                    href="/dashboard/invoices"
                    className='font-bold'
                >
                    Invoices
                </Link>
            </li>
        </ul>
    )
}