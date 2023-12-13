import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { auth } from "@/auth";

export const metadata: Metadata = {
    title: "dashboard",
    description: "access restricted"
}

export default async function Dashboard() {
    const session = auth();

    console.log(session, "session watch on server terminal !");

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