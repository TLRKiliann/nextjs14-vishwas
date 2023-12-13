import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BsInfoCircle } from "react-icons/bs";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: "Docs"
    },
    description: "entire docs"
}

const Docs = ({ params }: { params: { slug: string[] } }) => {

    const backToDocs = () => {
        return (
            <Link
                href="/docs" 
                className='dark:text-sky-500 dark:hover:text-sky-600 dark:active:text-sky-400
                text-purple-500 hover:text-purple-600 active:text-purple-400'
            >
                Back to Docs
            </Link>
        )
    }

    if (params.slug?.length > 2) {
        notFound();
    } else if (params.slug?.length === 2) {
        return <div className='p-4'>
                <h2>This is about {params.slug[0]} & {params.slug[1]} 2 params (slug)</h2>
                {backToDocs()}
            </div>
    } else if (params.slug?.length === 1) {
        return <div className='p-4'>
                <h2>This is about {params.slug[0]} 1 params (slug)</h2>
                {backToDocs()}
            </div>
    }

    return (
        <div className='h-full p-4'>
            

            <p className='text-lg my-2 hover:text-blue-400'>
                <Link 
                    href='/docs/features/' 
                    className="text-slate-200 hover:text-blue-400"
                    replace
                >
                    feature (1 params)
                </Link>
            </p>

            <p className='text-lg my-2 hover:text-blue-400'>
                <Link 
                    href='/docs/features/concepts'
                    className="text-slate-200 hover:text-blue-400"
                    replace
                >
                    feature + concept (2 params)
                </Link>
            </p>

            <p className='text-lg my-2 hover:text-blue-400'>
                <Link 
                    href='/docs/info'
                    className="text-slate-200 hover:text-blue-400"
                    replace
                >
                    <span className='flex flex-row align-center font-bold'>Info &nbsp;<BsInfoCircle /></span>
                </Link>
            </p>

        </div>
    )
}

export default Docs;

// test it with .../docs/feature1/concept1 with folder slug [...slug] (you cannot access to docs)
// with [[...slug]] you can access to docs folder (don't forget to add ? after slug !)