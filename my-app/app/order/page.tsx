import React from 'react'
import Link from 'next/link';
import { genericQuery } from '@/app/lib/db';
import { CartProps } from '@/app/lib/definitions';
import DeleteForm from '@/app/ui/cart/delete-form';

export default async function OrderPage() {
  
  const request = await genericQuery("Select * FROM cartorder", []);
  const order = JSON.stringify(request);

  let totalPrice;

  totalPrice = JSON.parse(order).map((p: CartProps) => {
    if (p.count === 0) {
      return 0;
    } else {
      const total: number = p.count *= p.price
      return total;
    }
  });

  let filterTotal = totalPrice.reduce((a: number, b: number) => a += b, 0)

  return (
    <div className='min-h-screen bg-slate-900 py-[75px]'>
        <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
          Order
        </h1>
        <div className='flex flex-col h-[600px] xl:h-[800px]'>
          <table className='w-3/5 m-auto rounded-tl-md rounded-tr-md mb-0'>
              <tbody>
              <tr className='text-lg text-slate-500 bg-slate-800'>
                <th className='py-1'>Id</th>
                <th className='py-1'>Product</th>
                <th className='py-1'>Quantity</th>
                <th className='py-1'>Price</th>
                {/* <th className='py-1'>Total </th> */}
              </tr>
              {JSON.parse(order).map((ord: CartProps) => {
                if (ord.count !== 0) {
                  return (
                    <tr key={ord.id} className='text-slate-200 text-center bg-slate-700'>
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
            <div className="flex justify-end w-3/5 m-auto text-lg font-bold bg-slate-700/80 
              py-2 rounded-bl-md rounded-br-md mt-0">
              <div className='text-slate-300 w-full flex justify-between'>
                <h2 className='ml-2'>Total:</h2>
                <div className='sm:w-[120px] md:w-[200px] xl:w-[240px]'>

                  <p className='text-center'>
                    {filterTotal.toFixed(2)}.-
                  </p>

                </div>
              </div>
            </div>

            <DeleteForm order={JSON.parse(order)} />
            
            <div className='flex justify-center mt-4'>
              <Link href="/products"
                className='text-purple-500 hover:text-purple-600 active:text-purple-400
                dark:text-sky-500 dark:hover:text-sky-600 dark:active:text-sky-400'
              >
                Go back to products
              </Link>
            </div>

        </div>
    </div>
  )
}
