import React from 'react'
import { genericQuery } from '@/app/lib/db';
import { CartProps } from '@/app/lib/definitions';
import DeleteForm from '@/app/ui/cart/delete-form';

export default async function OrderPage() {
  
  const request = await genericQuery("Select * FROM cartorder", []);
  const order = JSON.stringify(request);

  let total: number = 0;

  const exZeroCount = JSON.parse(order).filter((m: CartProps) => m.count !== 0);

  // totalprice et price à revoir après ajout dans la base de donnée.

  if (order) {
    total = exZeroCount.reduce((a: number, c: {totalprice: number}) => a + c.totalprice, 0)
  }
  console.log(total)
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
                <th className='py-1'>Count</th>
                <th className='py-1'>Price</th>
                {/* <th className='py-1'>Total </th> */}
              </tr>
              {JSON.parse(order).map((ord: CartProps) => {
                if (ord.count !== 0) {
                  return (
                <tr key={ord.id} className='text-slate-200 text-center bg-slate-700'>
                  <td className='border-b border-slate-600 py-2'>{ord.id}</td>
                  <td className='border-b border-slate-600 py-2'>{ord.deckname}</td>
                  <td className='border-b border-slate-600 py-2'>{ord.count}</td>
                  {/* <td className='border-b border-slate-600 py-2'>{ord.price.toFixed(2)}.-</td> */}
                  <td className='border-b border-slate-600 py-2'>{ord.totalprice.toFixed(2)}.-</td>
                </tr>
                )}})
              }
              </tbody>
            </table>
            <div className="flex justify-end w-3/5 m-auto text-lg font-bold bg-slate-700/80 
              py-2 rounded-bl-md rounded-br-md mt-0">
              <div className='text-slate-300 w-full flex justify-between'>
                <h2 className='ml-2'>Total:</h2>
                <div className='sm:w-[260px] md:w-[200px] xl:w-[340px]'>
                  <p className='text-center'>{total.toFixed(2)}.- CHF</p>
                </div>
              </div>
            </div>

            <DeleteForm order={JSON.parse(order)} />

        </div>
    </div>
  )
}
