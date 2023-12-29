import React from 'react'
import { Metadata } from 'next';
import { genericQuery } from '@/app/lib/db';
import FormOrder from '@/app/ui/cart-order/form-order';
import TableOrder from '@/app//ui/cart-order/table-order';

export const metadata: Metadata = {
  title: "order",
  description: "access accepted"
}

export default async function OrderPage() {
  
  /*
  const request = await genericQuery("SELECT * FROM cartorder", []);
  const order = JSON.stringify(request);
  */

  return (
    <div className='min-h-screen w-full py-[75px] bg-slate-900'>
      
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Order
      </h1>

      <div className="flex w-full">

        <FormOrder />

        <TableOrder />

      </div>

    </div>
  )
}
