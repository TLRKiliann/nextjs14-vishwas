"use client";

import React from 'react'
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
        <div className='flex flex-col w-full pr-4'>
            <table className='w-full my-0 rounded-tl-md rounded-tr-md'>
                <tbody className='flex flex-col'>
                <tr className='flex justify-around w-full text-lg text-slate-500 bg-slate-800'>
                    <th className='py-1'>Id</th>
                    <th className='py-1'>Product</th>
                    <th className='py-1'>Quantity</th>
                    <th className='py-1'>Price</th>
                </tr>
                {order.map((ord: CartProps) => {
                    if (ord.count !== 0) {
                    return (
                        <tr key={ord.id} className='flex justify-around text-slate-200 text-center 
                        bg-slate-700'>
                        <td className='border-b border-slate-600 py-2'>
                            {ord.id}
                        </td>
                        <td className='border-b border-slate-600 py-2'>
                            {ord.deckname}
                        </td>
                        <td className='border-b border-slate-600 py-2'>
                            {ord.count}
                        </td>
                        <td className='border-b border-slate-600 py-2'>
                            {ord.price.toFixed(2)}.-  
                        </td>
                        </tr>
                    )}})
                    }
                </tbody>
            </table>
            
            <div className="w-full text-lg font-bold bg-slate-700/80 m-auto mt-0 py-2 
                rounded-bl-md rounded-br-md">
                <div className='flex justify-between text-slate-300 w-full'>
                    <h2 className='ml-8'>Total:</h2>
                    <div className='mr-8'>

                        <p className='text-center'>
                        {filterTotal.toFixed(2)}.-
                        </p>

                    </div>
                </div>
            </div>

            <DeleteOrder order={order} />
            
            <div className='flex justify-center mt-4'>
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
