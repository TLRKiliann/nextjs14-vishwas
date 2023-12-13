"use client";

import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { mysqlServerAction } from '@/app/lib/actions'
import type { User } from '@/app/lib/definitions';

export default function RegisterForm({users}: {users: User[]}) {

    const {pending} = useFormStatus()
    const [state, formAction] = useFormState(mysqlServerAction, undefined);

    return (
        <form action={formAction}
          className='flex w-2/5 flex-col text-md font-bold 
            dark:bg-gradient-to-tr dark:from-slate-900 dark:from-10% 
            dark:via-sky-500 dark:via-50% dark:to-slate-900 dark:to-90%
            bg-gradient-to-tr from-violet-400 from-10% 
            via-slate-50 via-50% to-violet-400 to-90%
            transform transition translate-y-0 animate-up-start
            py-[20px] rounded-xl shadow-lg'
        >
            <h2>Register</h2>

            <label htmlFor="id"
              className='mx-20 my-2 text-violet-600 dark:text-slate-50'
            >
              Id
            </label>
            <input type="text" id="id" name="id" 
              className='text-lg px-[7px] py-[2px]
              text-fuchsia-300/90 dark:text-cyan-400
              bg-slate-100 hover:bg-white active:bg-white
              dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-sky-800
              focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
              rounded-lg mx-20'
            />

            <label htmlFor="name"
              className='mx-20 my-2 text-violet-600 dark:text-slate-50'
            >
              Name
            </label>
            <input type="text" id="name" name="name" 
              className='text-lg px-[7px] py-[2px]
              text-fuchsia-300/90 dark:text-cyan-400
              bg-slate-100 hover:bg-white active:bg-white
              dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-sky-800
              focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
              rounded-lg mx-20'
            />

            <label htmlFor="email"
              className='mx-20 my-2 text-violet-600 dark:text-slate-50'
            >
              Email
            </label>
            <input type="email" id="email" name="email" 
              className='text-lg px-[7px] py-[2px]
              text-fuchsia-300/90 dark:text-cyan-400
              bg-slate-100 hover:bg-white active:bg-white
              dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-sky-800
              focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
              rounded-lg mx-20'
            />

            <label htmlFor="password"
              className='mx-20 my-2 text-violet-600 dark:text-slate-50'
            >
              Password
            </label>
            <input type="password" id="password" name="password" 
              className='text-lg px-[7px] py-[2px]
              text-fuchsia-300/90 dark:text-cyan-400
              bg-slate-100 hover:bg-white active:bg-white
              dark:bg-slate-800 dark:hover:bg-slate-900 dark:active:bg-sky-800
              focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
              rounded-lg mx-20'
            />

            <div className='flex justify-center'>
              <button type="submit" id="submit" name="submit" value="insert"
                  className='bg-blue-600 mt-4 px-4 py-2 rounded-lg'
              >
                {pending ? "Pending..." : "Submit"}
              </button>
            </div>

            <div className='flex justify-center'>
              <button type="submit" id="submit" name="submit" value="update"
                  className='bg-emerald-600 mt-4 px-4 py-2 rounded-lg'
              >
                {pending ? "Updating..." : "Update"}
              </button>
            </div>
            
            <div className='flex justify-center'>
              <button type="submit" id="submit" name="submit" value="delete"
                  className='bg-red-600 mt-4 px-4 py-2 rounded-lg'
              >
                {pending ? "Deleting..." : "Delete"}
              </button>
            </div>
            {state?.message ? (
              <p className='text-md text-center text-green-500 mt-4'>{state.message}</p> 
              ) : (
              <p className='text-md text-center text-green-400 mt-4'>Enter data !</p>
            )}
    
            <div>
              {users?.map((prod: User) => (
                <div key={prod.id}>
                  <p>{prod.id}</p>
                  <p>{prod.name}</p>
                  <p>{prod.email}</p>
                  <p>{prod.password}</p>
                </div>
              ))}
            </div>

        </form>
    )
}