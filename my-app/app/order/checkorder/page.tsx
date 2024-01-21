import type { AllProps } from '@/app/lib/definitions';
import React from 'react';
import Image from 'next/image';
import { queryOrderPaid } from '@/app/lib/db';
import ValidatePayment from '@/app/ui/cart-order/validate-payment';
import ReturnSignOut from '@/app/ui/cart-order/return-signout-order';

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


                        {JSON.parse(data).map((d: AllProps) => (
                            <tr className='flex justify-between w-full text-sm text-slate-500 bg-slate-300
                                dark:text-slate-50 dark:bg-slate-900 rounded-tl-md rounded-tr-md'
                            >
                                <td className='flex items-center justify-center w-2/5'>
                                    {d.user}
                                </td>
                                <td className='flex items-center justify-center w-2/5'>
                                    {d.address}
                                </td>
                                <td className='flex items-center justify-center w-2/5'>
                                    {d.npa}
                                </td>
                                <td className='flex items-center justify-center w-2/5'>
                                    {d.phone}
                                </td>
                                <td className='flex items-center justify-center w-2/5'>
                                    {d.email}
                                </td>
                                <td className='flex items-center justify-center w-2/5'>
                                    {d.name}
                                </td>
                                <td className='flex items-center justify-center w-2/5'>
                                {Number(d.price).toFixed(2)}.-
                                </td>
                                <td className='flex items-center justify-center w-2/5'>
                                    {d.count}
                                </td>
                                <td className='flex items-center justify-center w-2/5 h-auto'>
                                <Image src={d.img} width={30} height={30} alt="img checkout" 
                                    className='object-cover'/>
                                </td>
                                <td className='flex items-center justify-center w-2/5'>
                                    {d.filterTotal}.-
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            
            <ValidatePayment data={JSON.parse(data)} />

            <ReturnSignOut />
        
        </div>
    )
}


