"use client";

import React from 'react'
import Image from 'next/image';
import payPalLogo from '@/public/img_logo/paypal-logo.png';
import googleLogo from '@/public/img_logo/google-icon.png';

export default function FormOrder() {
    return (
        <div className='w-full'>

          <div className='flex justify-around gap-2 px-4'>
            
            <button className='flex items-center justify-center w-2/5 text-lg font-bold text-slate-50 
              bg-blue-200 rounded'>
              <Image src={payPalLogo} width={70} height={70} alt="paypal logo" 
                className='object-cover' />
            </button>

            <button className='w-2/5 text-lg font-bold text-slate-50 bg-indigo-500/90 py-2 rounded'>
              Stripe
            </button>

            <button className='flex items-center justify-center w-2/5 text-lg font-bold text-blue-500 
              bg-zinc-100 rounded'>
              <Image src={googleLogo} width={30} height={30} alt="paypal logo" />
            </button>

          </div>

          <h2 className='text-2xl font-bold mt-3 px-4 py-2'>
            Shipping
          </h2>

          <form className='flex flex-col px-8'>

            <label htmlFor="email" className='text-lg pt-3 pb-1'>
              Email
            </label>
            
            <input type="email" id="email" name="email" placeholder="Email"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="user" className='text-lg pt-3 pb-1'>
              Username
            </label>
            
            <input type="text" id="user" name="user" placeholder="Username"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="address" className='text-lg pt-3 pb-1'>
              Address
            </label>
            
            <input type="text" id="address" name="address" placeholder="Address"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="phone" className='text-lg pt-3 pb-1'>
              Phone
            </label>
            
            <input type="number" id="phone" name="phone" placeholder="Phone"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="passwd" className='text-lg pt-3 pb-1'>
              Password
            </label>
            
            <input type="password" id="passwd" name='passwd' placeholder="Password"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />

            <button type="submit" id="submit" name="submit" value="shipping"
              className='w-ful text-xl font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-500 
              my-6 py-2 rounded'
            >
              Order
            </button>

          </form>


          <h2 className='text-2xl font-bold mt-3 px-4 py-2'>
            Payment
          </h2>

          <form className='flex flex-col px-8'>

            <label htmlFor="email" className='text-lg pt-3 pb-1'>
              Email
            </label>
            
            <input type="email" id="email" name="email" placeholder="Email"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="user" className='text-lg pt-3 pb-1'>
              Username
            </label>
            
            <input type="text" id="user" name="user" placeholder="Username"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="address" className='text-lg pt-3 pb-1'>
              Address
            </label>
            
            <input type="text" id="address" name="address" placeholder="Address"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="phone" className='text-lg pt-3 pb-1'>
              Phone
            </label>
            
            <input type="number" id="phone" name="phone" placeholder="Phone"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />
            
            <label htmlFor="passwd" className='text-lg pt-3 pb-1'>
              Password
            </label>
            
            <input type="password" id="passwd" name='passwd' placeholder="Password"
              className='text-lg w-full bg-slate-700 px-2 py-1 rounded focus:outline 
                focus:outline-blue-600 focus:border focus:border-blue-600' />

            <button type="submit" id="submit" name="submit" value="shipping"
              className='w-ful text-xl font-bold bg-blue-600 hover:bg-blue-700 active:bg-blue-500 
              my-6 py-2 rounded'
            >
              Payment
            </button>

          </form>

        </div>
    )
}
