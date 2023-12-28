import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import payPalLogo from '@/public/img_logo/paypal-logo.png';
import googleLogo from '@/public/img_logo/google-icon.png';
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

      <div className="flex w-full">

        <div className='w-full bg-slate-900'>

          <div className='flex justify-around gap-2 px-4'>
            
            <button className='flex items-center justify-center w-2/5 text-lg font-bold text-slate-50 
              bg-blue-600 py-2 rounded'>
              <Image src={payPalLogo} width={20} height={20} alt="paypal logo" 
                className='object-cover mr-2' />
              <p>PayPal</p>
            </button>

            <button className='w-2/5 text-lg font-bold text-slate-50 bg-indigo-500/90 py-2 rounded'>
              Stripe
            </button>

            <button className='flex items-center justify-center w-2/5 text-lg font-bold text-blue-500 
              bg-slate-50 py-1 rounded'>
              <Image src={googleLogo} width={20} height={20} alt="paypal logo" />
              <p>oogle</p>
            </button>

          </div>


          <h2 className='text-2xl font-bold mt-3 px-4 py-2'>
            Shipping
          </h2>

          <form className='flex flex-col px-8'>

            <label htmlFor="email" className='text-lg pt-2 pb-1'>
              Email
            </label>
            
            <input type="email" id="email" name="email" placeholder="Email"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="user" className='text-lg pt-2 pb-1'>
              Username
            </label>
            
            <input type="text" id="user" name="user" placeholder="Username"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="address" className='text-lg pt-2 pb-1'>
              Address
            </label>
            
            <input type="text" id="address" name="address" placeholder="Address"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="phone" className='text-lg pt-2 pb-1'>
              Phone
            </label>
            
            <input type="number" id="phone" name="phone" placeholder="Phone"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="passwd" className='text-lg pt-2 pb-1'>
              Password
            </label>
            
            <input type="password" id="passwd" name='passwd' placeholder="Password"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />

            <button type="submit" id="submit" name="submit" value="shipping"
              className='w-ful text-xl font-bold bg-blue-600 my-6 py-2 rounded'
            >
              Order
            </button>

          </form>


          <h2 className='text-2xl font-bold mt-3 px-4 py-2'>
            Payment
          </h2>

          <form className='flex flex-col px-8'>

            <label htmlFor="email" className='text-lg pt-2 pb-1'>
              Email
            </label>
            
            <input type="email" id="email" name="email" placeholder="Email"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="user" className='text-lg pt-2 pb-1'>
              Username
            </label>
            
            <input type="text" id="user" name="user" placeholder="Username"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="address" className='text-lg pt-2 pb-1'>
              Address
            </label>
            
            <input type="text" id="address" name="address" placeholder="Address"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="phone" className='text-lg pt-2 pb-1'>
              Phone
            </label>
            
            <input type="number" id="phone" name="phone" placeholder="Phone"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="passwd" className='text-lg pt-2 pb-1'>
              Password
            </label>
            
            <input type="password" id="passwd" name='passwd' placeholder="Password"
              className='w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />

            <button type="submit" id="submit" name="submit" value="shipping"
              className='w-ful text-xl font-bold bg-blue-600 my-6 py-2 rounded'
            >
              Payment
            </button>

          </form>

        </div>


        <div className='w-full min-h-screen bg-slate-900 pr-4'>
          <table className='w-full my-0 rounded-tl-md rounded-tr-md'>
              <tbody className='flex flex-col'>
              <tr className='flex justify-around w-full text-lg text-slate-500 bg-slate-800'>
                <th className='py-1'>Id</th>
                <th className='py-1'>Product</th>
                <th className='py-1'>Quantity</th>
                <th className='py-1'>Price</th>
                {/* <th className='py-1'>Total </th> */}
              </tr>
              {JSON.parse(order).map((ord: CartProps) => {
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
