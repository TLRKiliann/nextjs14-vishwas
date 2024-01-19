import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";
import { signOut } from '@/auth';
    
export default function Logout() {
    return (
        <form
            action={async () => {
                "use server";
                await signOut();
            }}
            className='w-full min-h-screen flex flex-col items-center justify-center'
        >
            <button className='text-lg flex items-center justify-between text-slate-400 bg-slate-800 
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
