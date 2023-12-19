import React from 'react'
import { genericQuery } from '@/app/lib/db';
import { CartProps } from '@/app/lib/definitions';
import DeleteForm from '@/app/ui/cart/delete-form';

export default async function Cart() {
  
  const request = await genericQuery("Select * FROM cartorder", []);
  const order = JSON.stringify(request);

  let total: number = 0;

  if (order) {
    total = JSON.parse(order).reduce((a: number, b: {totalprice: number}) => a += b.totalprice, 0)
  }

  return (
    <div className='min-h-screen bg-slate-900 py-[75px]'>
        <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
          Cart
        </h1>
        <div>
          <table className='w-3/5 m-auto'>
              <tbody>
              <tr className='bg-slate-800'>
                <th>id</th>
                <th>deckname</th>
                <th>totalprice</th>
                <th>count</th>
              </tr>
              {JSON.parse(order).map((ord: CartProps) => (
                <tr key={ord.id} className='bg-slate-700'>
                  <td className='text-center'>{ord.id}</td>
                  <td className='text-center'>{ord.deckname}</td>
                  <td className='text-center'>{ord.totalprice.toFixed(2)}</td>
                  <td className='text-center'>{ord.count}</td>
                </tr>
                ))
              }
              </tbody>
            </table>
            <div className="flex justify-end w-3/5 m-auto text-xl font-bold bg-slate-600 py-2">
              <div className='flex justify-between w-3/6'>
                <h2 className='ml-14'>Total:</h2>
                <p className='mr-2'>{total.toFixed(2)}.- CHF</p>
              </div>
            </div>

            <DeleteForm order={JSON.parse(order)} />

        </div>
    </div>
  )
}
