import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { auth } from "@/auth";
import { MessageProps } from '@/app/lib/definitions';
import { showAllMessageBox } from '@/app/lib/db';

export const metadata: Metadata = {
    title: "dashboard",
    description: "access restricted"
}

export default async function Dashboard() {
    const session = auth();

    console.log(session, "session watch on server terminal !");

    const request: unknown = showAllMessageBox("SELECT * FROM messagebox", []);
    const data: string = JSON.stringify(request);
    console.log(data, "data")

    return (
        <>
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

            {/*JSON.parse(data).map((msg: MessageProps) => (
                <div key={msg.username}>
                    <p>{msg.username}</p>
                    <p>{msg.email}</p>
                    <p>{msg.message}</p>
                </div>
            ))*/}

        </>
    )
}