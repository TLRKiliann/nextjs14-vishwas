"use client";

import React, { useState } from 'react'
import Image from 'next/image';
import payPalLogo from '@/public/img_logo/paypal-logo.png';
import googleLogo from '@/public/img_logo/google-icon.png';

export default function FormOrder() {

  const [checking, setchecking] = useState<boolean>(false);

  const handleCheck = (): void => {
    setchecking((old) => !old);
    console.log("checked")
  };

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
          bg-slate-100 rounded'>
          <Image src={googleLogo} width={30} height={30} alt="paypal logo" />
          <span className='text-xl font-bold text-slate-600 mt-1'>oogle</span>
        </button>

      </div>

      <h2 className='text-2xl font-bold mt-3 px-4 py-2'>
        Shipping
      </h2>

      <form className='flex flex-col px-8'>
        
        <input type="email" id="email" name="email" placeholder="Email"
          className='text-lg w-full bg-slate-700 rounded focus:outline 
            focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
        
        <input type="text" id="user" name="user" placeholder="Username"
          className='text-lg w-full bg-slate-700 rounded focus:outline 
            focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
        
        <div className='flex items-center justify-between'>
          <input type="text" id="address" name="address" placeholder="Address"
            className='text-lg w-3/5 bg-slate-700 rounded focus:outline 
              focus:outline-blue-600 focus:border focus:border-blue-600 mr-2 my-3 px-2 py-2' />
          
          <input type="number" id="npacode" name="npacode" placeholder="Postal Code"
            className='text-lg w-2/5 bg-slate-700 rounded focus:outline 
              focus:outline-blue-600 focus:border focus:border-blue-600 ml-2 my-3 px-2 py-2' />
        </div>

        <input type="number" id="phone" name="phone" placeholder="Phone"
          className='text-lg w-full bg-slate-700 rounded focus:outline 
            focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
        
        <input type="password" id="passwd" name='passwd' placeholder="Password"
          className='text-lg w-full bg-slate-700 rounded focus:outline 
            focus:outline-blue-600 focus:border focus:border-blue-600 my-3 mb-6 px-2 py-2' />

        <button type="submit" id="submit" name="submit" value="shipping"
          className='w-ful text-xl font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-500 
          mb-6 py-2 rounded'
        >
          Order
        </button>

      </form>

      <h2 className='text-2xl font-bold mt-3 px-4 py-2'>
        Payment
      </h2>

      <form className='flex flex-col px-8'>
      
        <input type="number" id="user" name="user" placeholder="Card number"
          className='text-lg w-full bg-slate-700 rounded focus:outline 
            focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
      
        <input type="date" id="address" name="address" placeholder="Expiration date"
          className='text-lg w-full bg-slate-700 rounded focus:outline 
            focus:outline-blue-600 focus:border focus:border-blue-600 my-3 px-2 py-2' />
        
        <input type="number" id="code" name="code" placeholder="Security code"
          className='text-lg w-full bg-slate-700 rounded focus:outline 
            focus:outline-blue-600 focus:border focus:border-blue-600 mt-3 px-2 py-2' />
        
        <div className="flex items-center justify-start py-6">
          <input type="checkbox" id="checkcard" name="checkcard" checked={checking} onChange={handleCheck}
            className='text-lg bg-slate-700 mr-3'
          />
          <p>Use shipping address as billing address</p>
        </div>

        <button type="submit" id="submit" name="submit" value="shipping"
          className='w-ful text-xl font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-500 
          mb-6 py-2 rounded'
        >
          Payment
        </button>

      </form>

    </div>
  )
}
