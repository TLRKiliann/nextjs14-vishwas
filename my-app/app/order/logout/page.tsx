//import type { AllProps } from '@/app/lib/definitions';
import React from 'react';
import Link from 'next/link';
import { signOut } from '@/auth';
//import { queryOrderPaid } from '@/app/lib/db';
import { RiLogoutCircleLine } from "react-icons/ri";

// const dynamic = "force-dynamic";

export default async function Logout() {

    //const query: AllProps[] = await queryOrderPaid("SELECT * FROM checkout_paid", []);
    //const data: string = JSON.stringify(query);
    /*
    console.log(data, "data");

    if (!data) {
        throw new Error("Error: server query failed");
    };
    */

    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center'>

            {/*
            <div className=''>
                <table className='w-full my-0 rounded-tl-md rounded-tr-md'>
                    <tbody className='flex flex-col'>
                    <tr className='flex justify-between w-full text-lg text-slate-500 bg-slate-300
                        dark:text-slate-400/80 dark:bg-slate-800 py-2 rounded-tl-md rounded-tr-md'>
                        <th className='w-1/5 py-1'>Username</th>
                        <th className='w-2/5 py-1'>Address</th>
                        <th className='w-2/5 py-1'>NPA</th>
                        <th className='w-2/5 py-1'>Phone</th>
                        <th className='w-2/5 py-1'>ProductName</th>
                        <th className='w-2/5 py-1'>Price</th>
                        <th className='w-2/5 py-1'>Quantity</th>
                        <th className='w-2/5 py-1'>Total</th>
                    </tr>

                    {JSON.parse(data).map((d: AllProps) => (
                        <tr key={d.id}>
                            <td>Username</td>
                            <td>Address</td>
                            <td>NPA</td>
                            <td>Phone</td>
                            <td className='w-2/5 py-1'>ProductName</td>
                            <td className='w-2/5 py-1'>Price</td>
                            <td className='w-2/5 py-1'>Quantity</td>
                            <td className='w-2/5 py-1'>Total</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
            */}

            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
                className='w-2/5 h-auto m-auto'
            >
                <Link href="/order" className="text-sky-500 hover:text-sky-400 active:text-orange-400 mb-4">Go back to order ?</Link>
                <button className='text-lg flex items-center justify-between text-slate-400 bg-slate-800 
                    hover:text-indigo-500 hover:scale-105 dark:hover:text-slate-50 active:bg-slate-700
                    px-6 py-2 rounded-lg border border-slate-500'>
                    <RiLogoutCircleLine size={20} />
                    <span className='ml-2'>
                        Sign Out
                    </span>
                </button>
            </form>
        
        </div>
    )
}


