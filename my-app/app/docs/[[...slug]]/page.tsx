import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Docs",
    description: "entire docs"
}

const Docs = ({ params }: { params: { slug: string[] } }) => {
    if (params.slug?.length > 2) {
        notFound();
    } else if (params.slug?.length === 2) {
        return <h2>This is about {params.slug[0]} & {params.slug[1]}</h2>
    } else if (params.slug?.length === 1) {
        return <h2>This is about {params.slug[0]}</h2>
    } 
    return (
    <div className="h-screen">
        
        <h1 className='text-3xl m-4'>Docs Page</h1>

        <p className='text-lg mx-4 my-2 hover:text-blue-400'>
            <Link 
                href='/docs/features/' 
                className="text-slate-200 hover:text-blue-400"
            >
                feature
            </Link>
        </p>

        <p className='text-lg mx-4 my-2 hover:text-blue-400'>
            <Link 
                href='/docs/features/concepts'
                className="text-slate-200 hover:text-blue-400"
            >
                feature + concept
            </Link>
        </p>

    </div>
  )
}

export default Docs

// test it with .../docs/feature1/concept1 with folder slug [...slug] (you cannot access to docs)
// with [[...slug]] you can access to docs folder (don't forget to add ? after slug !)