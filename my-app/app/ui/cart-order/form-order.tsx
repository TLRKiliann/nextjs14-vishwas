import type { CartProps } from '@/app/lib/definitions';
import React from 'react'
import Image from 'next/image';
import Shipping from './shipping';
import Payment from './payment';
import payPalLogo from '@/public/img_logo/paypal-logo.png';
import googleLogo from '@/public/img_logo/google-icon.png';

export default function FormOrder({order}: {order: CartProps[]}) {

  const totalPrice: number[] = order.map((p: CartProps): number => {
    if (p.count === 0) {
      return 0;
    } else {
      const total: number = p.count * p.price
      return total;
    }
  });
  
  const filterTotal: number = totalPrice.reduce((a: number, b: number) => a += b, 0);

  return (
    <div className='w-full'>

      <div className='flex justify-around gap-2 px-4'>
        
        <button className='flex items-center justify-center w-2/5 text-lg font-bold text-slate-50 
          bg-blue-200 rounded'>
          <Image src={payPalLogo} width={70} height={70} alt="paypal logo" 
            className='object-cover' />
            <span className='text-blue-800 italic -ml-4'>Pay</span>
            <span className='text-cyan-600 italic'>Pal</span>
        </button>

        <button className='w-2/5 text-lg italic font-bold text-slate-50 bg-indigo-500/90 py-2 rounded'>
          Stripe
        </button>

        <button className='flex items-center justify-center w-2/5 text-blue-500 
          bg-slate-200 dark:bg-slate-100 rounded'>
          <Image src={googleLogo} width={30} height={30} alt="paypal logo" />
          <span className='text-xl font-bold text-slate-600 mt-1'>oogle</span>
        </button>

      </div>

      <h2 className='text-2xl font-bold text-slate-600 dark:text-slate-300 mt-3 px-4 py-2'>
        Shipping
      </h2>

      <Shipping filterTotal={filterTotal} />

      <h2 className='text-2xl font-bold text-slate-600 dark:text-slate-300 mt-3 px-4 py-2'>
        Payment
      </h2>

      <Payment filterTotal={filterTotal} />

    </div>
  )
}
