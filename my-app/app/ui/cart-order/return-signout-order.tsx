import React from 'react';
import { signOut } from '@/auth';
import Link from "next/link";
import { RiLogoutCircleLine } from "react-icons/ri";

export default function ReturnSignOut() {
    return (
        <form action={async () => {
                "use server";
                await signOut();
            }}
            className='flex flex-col items-center justify-center w-2/5 h-[200px] m-auto mb-10'
        >
            <Link href="/order" className="text-sky-500 hover:text-sky-400 active:text-orange-400 mb-4">
                Go back to order ?
            </Link>
            <button className='text-lg flex items-center justify-between text-slate-600 dark:text-slate-400 bg-slate-50 
                dark:bg-slate-800 
                hover:text-indigo-500 hover:scale-105 dark:hover:text-slate-50 active:bg-slate-700
                px-6 py-2 rounded-lg border border-slate-500'>
                <RiLogoutCircleLine size={20} />
                <span className='ml-2'>
                    Sign Out
                </span>
            </button>
        </form>
    )
}
