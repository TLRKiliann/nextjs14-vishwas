import React from 'react'
import { genericQuery } from '@/app/lib/db';
import { CartProps } from '@/app/lib/definitions';
import DeleteForm from '@/app/ui/cart/delete-form';

export default async function Cart() {
  
  const request = await genericQuery("Select * FROM cartorder", []);
  const order = JSON.stringify(request);

  let total: number = 0;

  const exZeroCount = JSON.parse(order).filter((m: CartProps) => m.count !== 0);
  console.log(exZeroCount, "excludeZeroCount");

  if (order) {
    total = exZeroCount.reduce((a: number, b: {totalprice: number}) => a += b.totalprice, 0);
  }
  console.log(total, "total")
  return (
    <div className='min-h-screen bg-slate-900 py-[75px]'>
        <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
          Cart
        </h1>
        <div>
          <table className='w-3/5 m-auto rounded-tl-md rounded-tr-md'>
              <tbody>
              <tr className='bg-slate-800'>
                <th className='py-1'>Id</th>
                <th className='py-1'>Product</th>
                <th className='py-1'>Totalprice</th>
                <th className='py-1'>Count</th>
              </tr>
              {JSON.parse(order).map((ord: CartProps) => {
                if (ord.count !== 0) {
                  return (
                <tr key={ord.id} className='bg-slate-700'>
                  <td className='text-center py-2'>{ord.id}</td>
                  <td className='text-center py-2'>{ord.deckname}</td>
                  <td className='text-center py-2'>{ord.totalprice.toFixed(2)}</td>
                  <td className='text-center py-2'>{ord.count}</td>
                </tr>
                )}})
              }
              </tbody>
            </table>
            <div className="flex justify-end w-3/5 m-auto text-xl font-bold bg-slate-600 
              py-2 rounded-bl-md rounded-br-md">
              <div className='w-full flex justify-between'>
                <h2 className='ml-2'>Total:</h2>
                <p className='mr-2'>{total.toFixed(2)}.- CHF</p>
              </div>
            </div>

            <DeleteForm order={JSON.parse(order)} />

        </div>
    </div>
  )
}
