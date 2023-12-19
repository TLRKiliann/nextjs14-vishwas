import React from 'react'
import { genericQuery } from '@/app/lib/db';
import { CartProps } from '@/app/lib/definitions';
import DeleteForm from '@/app/ui/cart/delete-form';

export default async function Cart() {
  
  const request = await genericQuery("Select * FROM cartorder", []);
  const order = JSON.stringify(request);

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

            <DeleteForm order={JSON.parse(order)} />

        </div>
    </div>
  )
}
