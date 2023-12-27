import React from 'react'
import Link from 'next/link';
import { genericQuery } from '@/app/lib/db';
import { CartProps } from '@/app/lib/definitions';
import DeleteForm from '@/app/ui/cart/delete-form';

export default async function OrderPage() {
  
  const request = await genericQuery("SELECT * FROM cartorder", []);
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
    <div className='min-h-screen w-full py-[75px]'>
      
      <h1 className='text-4xl font-bold text-transparent bg-clip-text dark-title-h1 light-title-h1 p-4'>
        Order
      </h1>

      <div className="flex justify-between w-full">

        <div className='w-full bg-slate-900'>

          <div className='flex justify-around gap-2 p-4'>
            
            <button className='w-2/5 text-lg font-bold text-slate-50 bg-blue-500 py-2 rounded'>
              PayPal
            </button>

            <button className='w-2/5 text-lg font-bold text-blue-600 bg-yellow-400 py-2 rounded'>
              Stripe
            </button>

            <button className='w-2/5 text-lg font-bold text-blue-600 bg-slate-50 py-2 rounded'>
              Google
            </button>

          </div>


          <h2 className='text-xl font-bold px-4 py-2'>
            Shipping
          </h2>

          <form className='flex flex-col p-4'>

            <label htmlFor="email" className='text-lg pt-2 pb-1'>
              Email
            </label>
            
            <input type="email" id="email" name="email"
              className='w-3/5 px-5 py-1'/>
            
            <label htmlFor="user" className='text-lg pt-2 pb-1'>
              Username
            </label>
            
            <input type="text" id="user" name="user"
              className='w-3/5 px-5 py-1'/>
            
            <label htmlFor="address" className='text-lg pt-2 pb-1'>
              Address
            </label>
            
            <input type="text" id="address" name="address"
              className='w-3/5 px-5 py-1'/>
            
            <label htmlFor="phone" className='text-lg pt-2 pb-1'>
              Phone
            </label>
            
            <input type="number" id="phone" name="phone"
              className='w-3/5 px-5 py-1'/>
            
            <label htmlFor="passwd" className='text-lg pt-2 pb-1'>
              Password
            </label>
            
            <input type="password" id="passwd" name='passwd'
              className='w-3/5 px-5 py-1'/>

            <button type="submit" id="submit" name="submit" value="shipping"
              className='w-3/5 text-xl font-bold bg-blue-600 my-6 py-2 rounded'
            >
              Order
            </button>

          </form>


          <h2 className='text-xl font-bold px-4 py-2'>
            Payment
          </h2>

          <form className='flex flex-col p-4'>

            <label htmlFor="email" className='text-lg pt-2 pb-1'>
              Email
            </label>
            
            <input type="email" id="email" name="email"
              className='w-3/5 px-5 py-1'/>
            
            <label htmlFor="user" className='text-lg pt-2 pb-1'>
              Username
            </label>
            
            <input type="text" id="user" name="user"
              className='w-3/5 px-5 py-1'/>
            
            <label htmlFor="address" className='text-lg pt-2 pb-1'>
              Address
            </label>
            
            <input type="text" id="address" name="address"
              className='w-3/5 px-5 py-1'/>
            
            <label htmlFor="phone" className='text-lg pt-2 pb-1'>
              Phone
            </label>
            
            <input type="number" id="phone" name="phone"
              className='w-3/5 px-5 py-1'/>
            
            <label htmlFor="passwd" className='text-lg pt-2 pb-1'>
              Password
            </label>
            
            <input type="password" id="passwd" name='passwd'
              className='w-3/5 px-5 py-1'/>

            <button type="submit" id="submit" name="submit" value="shipping"
              className='w-3/5 text-xl font-bold bg-blue-600 my-6 py-2 rounded'
            >
              Payment
            </button>

          </form>

        </div>


        <div className='flex flex-col w-full h-[600px] xl:h-[800px] bg-slate-900'>
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
    </div>

  )
}
