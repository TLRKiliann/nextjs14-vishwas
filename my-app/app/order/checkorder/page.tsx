import type { AllProps } from '@/app/lib/definitions';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { signOut } from '@/auth';
import { queryOrderPaid } from '@/app/lib/db';
import { RiLogoutCircleLine } from "react-icons/ri";

export const dynamic = "force-dynamic";

export default async function CheckOrder() {

    const query: AllProps[] = await queryOrderPaid("SELECT * FROM shipping CROSS JOIN checkout_paid", []);
    const data: string = JSON.stringify(query);

    if (!data) {
        throw new Error("Error: server query failed");
    };
    
    return (
        <div className='w-full min-h-screen bg-slate-white dark:bg-slate-900 py-[75px]'>

            <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
                Checkout
            </h1>

            <div className='w-[900px] xl:w-[1200px] m-auto my-[40px]'>
                <table className='w-full text-sm my-0 rounded-tl-md rounded-tr-md border border-blue-600'>
                    <tbody className='flex flex-col w-full'>
                        <tr className='flex justify-between w-full text-lg text-slate-500 bg-slate-300
                            dark:text-slate-400/80 dark:bg-slate-800 py-2 rounded-tl-md rounded-tr-md'>
                            <th className='w-2/5'>User</th>
                            <th className='w-2/5'>Address</th>
                            <th className='w-2/5'>NPA</th>
                            <th className='w-2/5'>Phone</th>
                            <th className='w-2/5'>Email</th>
                            <th className='w-2/5'>Product</th>
                            <th className='w-2/5'>Price</th>
                            <th className='w-2/5'>Quantity</th>
                            <th className='w-2/5'>Img</th>
                            <th className='w-2/5'>Total</th>
                        </tr>
                        <tr className='flex justify-between w-full text-sm text-slate-500 bg-slate-300
                            dark:text-slate-50 dark:bg-slate-900 rounded-tl-md rounded-tr-md'>
                            <td className='flex items-center justify-center w-2/5'>
                                {JSON.parse(data)[0].user}
                            </td>
                            <td className='flex items-center justify-center w-2/5'>
                                {JSON.parse(data)[0].address}
                            </td>
                            <td className='flex items-center justify-center w-2/5'>
                                {JSON.parse(data)[0].npa}
                            </td>
                            <td className='flex items-center justify-center w-2/5'>
                                {JSON.parse(data)[0].phone}
                            </td>
                            <td className='flex items-center justify-center w-2/5'>
                                {JSON.parse(data)[0].email}
                            </td>
                            <td className='flex items-center justify-center w-2/5'>
                                {JSON.parse(data)[0].name}
                            </td>
                            <td className='flex items-center justify-center w-2/5'>
                                {Number(JSON.parse(data)[0].price).toFixed(2)}.-
                            </td>
                            <td className='flex items-center justify-center w-2/5'>
                                {JSON.parse(data)[0].count}
                            </td>
                            <td className='flex items-center justify-center w-2/5 h-auto'>
                                <Image src={JSON.parse(data)[0].img} width={30} height={30} alt="img checkout" 
                                    className='object-cover'/>
                            </td>
                            <td className='flex items-center justify-center w-2/5'>
                                {JSON.parse(data)[0].filterTotal}.-
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            // "use client";

            <form action={""} className='flex w-full my-20 border'>
                <input type="text" id="user" name="user" value={JSON.parse(data)[0].user} hidden readOnly />
                <input type="text" id="address" name="address" value={JSON.parse(data)[0].address} hidden readOnly />
                <input type="number" id="npa" name="npa" value={JSON.parse(data)[0].npa} hidden readOnly />
                <input type="number" id="phone" name="phone" value={JSON.parse(data)[0].phone} hidden readOnly />
                <input type="text" id="email" name="email" value={JSON.parse(data)[0].email} hidden readOnly />
                <input type="text" id="product" name="product" value={JSON.parse(data)[0].name} hidden readOnly />
                <input type="number" id="price" name="price" value={JSON.parse(data)[0].price} hidden readOnly />
                <input type="number" id="quantity" name="quantity" value={JSON.parse(data)[0].count} hidden readOnly />
                <input type="text" id="img" name="img" value={JSON.parse(data)[0].img} hidden readOnly />
                <input type="number" id="total" name="total" value={JSON.parse(data)[0].filterTotal} hidden readOnly />

                <button type="submit" id="submit" name="submit" value="btnConfirmation" 
                    className="w-[240px] text-lg font-bold bg-blue-700 m-auto py-2 rounded-lg border">
                    Validate Payment
                </button>
            </form>


            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
                className='flex flex-col items-center w-2/5 h-auto m-auto mb-10 border-2'
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
        
        </div>
    )
}


