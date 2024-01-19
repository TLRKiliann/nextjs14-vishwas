import type { Metadata } from 'next';
import type { CartProps } from '@/app/lib/definitions';
import React from 'react'
import Link from 'next/link';
import { queryCartOrder } from '@/app/lib/db';
import FormOrder from '@/app/ui/cart-order/form-order';
import TableOrder from '@/app//ui/cart-order/table-order';

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Order",
  description: "access accepted"
};

export default async function OrderPage() {
  
  const request: CartProps[] = await queryCartOrder("SELECT * FROM cartorder", []);
  const order: string = JSON.stringify(request);

  if (!order) {
    throw new Error("Error: server failed to catch data from cartorder !");
  }

  return (
    <div className='min-h-screen w-full py-[75px] bg-slate-100 dark:bg-slate-900'>
      <div className='w-full flex items-center justify-between'>

        <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
          Order
        </h1>
        <Link href="/order/checkorder" className='custom-link'>
          <p className='mr-5 px-4 py-2 border border-sky-600 rounded-lg'>
            Verify Payment
          </p>
        </Link>
      </div>

      <div className="flex items-start w-full">

        <FormOrder order={JSON.parse(order)} />

        <TableOrder order={JSON.parse(order)} />

      </div>

    </div>
  )
}
