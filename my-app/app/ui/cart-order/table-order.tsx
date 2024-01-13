"use client";

import React from 'react'
import Image from 'next/image';
import { CartProps } from "@/app/lib/definitions";
import Link from 'next/link';
import DeleteOrder from './delete-order';

export default function TableOrder({order}: {order: CartProps[]}) {
    
    let totalPrice;
    totalPrice = order.map((p: CartProps) => {
      if (p.count === 0) {
        return 0;
      } else {
        const total: number = p.count * p.price
        return total;
      }
    });
    
    let filterTotal = totalPrice.reduce((a: number, b: number) => a += b, 0)

    return (
        <div className='flex flex-col items-start w-full min-h-[500px] pr-4'>
            <table className='w-full my-0 rounded-tl-md rounded-tr-md'>
                <tbody className='flex flex-col'>
                <tr className='flex justify-between w-full text-lg text-slate-500 bg-slate-300
                    dark:text-slate-400/80 dark:bg-slate-800 py-2 rounded-tl-md rounded-tr-md'>
                    <th className='w-1/5 py-1'>Img</th>
                    <th className='w-2/5 py-1'>Product</th>
                    <th className='w-2/5 py-1'>Quantity</th>
                    <th className='w-2/5 py-1'>Price</th>
                </tr>
                {order.map((ord: CartProps) => {
                    if (ord.count !== 0) {
                    return (
                        <tr key={ord.id} className='flex items-center justify-between text-center text-slate-600 
                            bg-slate-200 dark:text-slate-200 dark:bg-slate-700'>
                            <td className='w-1/5'>
                                <Image src={ord.img} width={40} height={40} alt="img order"
                                    className='object-cover w-[30px] h-auto m-auto' />
                            </td>
                            <td className='flex w-2/5 border-b border-slate-400 dark:border-slate-600 py-2'>
                                <p className='m-auto'>{ord.name}</p>
                            </td>
                            <td className='w-2/5 border-b border-slate-400 dark:border-slate-600 py-2'>
                                {ord.count}
                            </td>
                            <td className='w-2/5 border-b border-slate-400 dark:border-slate-600 py-2'>
                                {ord.price.toFixed(2)}.-  
                            </td>
                        </tr>
                    )}})
                    }
                </tbody>
            </table>
            
            <div className="w-full text-lg font-bold text-slate-500 bg-slate-300 dark:text-slate-200
                dark:bg-slate-800 m-auto mt-0 py-2 rounded-bl-md rounded-br-md">
                <div className='flex justify-between w-full'>
                    
                    <h2 className='ml-3 xl:ml-8'>Total :</h2>
                    
                    <div>
                        <p className='mr-8 xl:mr-[75px]'>
                        {filterTotal.toFixed(2)}.-
                        </p>
                    </div>

                </div>
            </div>

            <DeleteOrder order={order} />
            
            <div className='flex items-center justify-center w-full mt-4'>
              <Link href="/products"
                className='text-purple-500 hover:text-purple-600 active:text-purple-400
                  dark:text-sky-500 dark:hover:text-sky-600 dark:active:text-sky-400'
              >
                Go back to products
              </Link>
            </div>
        
        </div>
    )
}
