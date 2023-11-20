import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "dashboard",
  description: "access restricted"
}

export default function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
        </>
    )
}