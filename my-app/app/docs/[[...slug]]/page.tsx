import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from "next";
import { BsInfoCircle } from "react-icons/bs";

export const metadata: Metadata = {
    title: {
        absolute: "Docs"
    },
    description: "entire docs"
}

const Docs = ({ params }: { params: { slug: string[] } }) => {
    if (params.slug?.length > 2) {
        notFound();
    } else if (params.slug?.length === 2) {
        return <div className='flex flex-col min-h-screen'>
                <h2>This is about {params.slug[0]} & {params.slug[1]}</h2>
            </div>
    } else if (params.slug?.length === 1) {
        return <div className='flex flex-col min-h-screen'>
                <h2>This is about {params.slug[0]}</h2>
            </div>
    } 
    return (
        <div className='flex flex-col min-h-screen'>
            
            <h1 className='text-3xl m-4'>Docs Page</h1>

            <p className='text-lg mx-4 my-2 hover:text-blue-400'>
                <Link 
                    href='/docs/features/' 
                    className="text-slate-200 hover:text-blue-400"
                    replace
                >
                    feature
                </Link>
            </p>

            <p className='text-lg mx-4 my-2 hover:text-blue-400'>
                <Link 
                    href='/docs/features/concepts'
                    className="text-slate-200 hover:text-blue-400"
                    replace
                >
                    feature + concept
                </Link>
            </p>

            <p className='text-lg mx-4 my-2 hover:text-blue-400'>
                <Link 
                    href='/docs/info'
                    className="text-slate-200 hover:text-blue-400"
                    replace
                >
                    <h2 className='flex flex-row align-center font-bold'>Info &nbsp;<BsInfoCircle /></h2>
                </Link>
            </p>

        </div>
    )
}

export default Docs

// test it with .../docs/feature1/concept1 with folder slug [...slug] (you cannot access to docs)
// with [[...slug]] you can access to docs folder (don't forget to add ? after slug !)