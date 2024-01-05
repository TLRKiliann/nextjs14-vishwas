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
          className='flex w-2/5 flex-col text-md font-bold dark:bg-slate-100 transform transition 
          translate-y-0 animate-up-start p-6 pb-3 rounded-xl shadow-outviolet dark:shadow-lg'
        >
            <h2 className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mt-2 mb-1'>
              Register
            </h2>

            <label htmlFor="id"
              className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mt-2 mb-1'>
              Id
            </label>
            <input type="text" id="id" name="id" 
              className='text-lg text-violet-600 dark:text-cyan-400 bg-violet-100 hover:bg-violet-200 
              active:bg-white dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-800
              focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
              mx-4 pl-2 py-1 rounded-lg'
            />

            <label htmlFor="name"
              className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mt-2 mb-1'>
              Name
            </label>
            <input type="text" id="name" name="name" 
              className='text-lg text-violet-600 dark:text-cyan-400 bg-violet-100 hover:bg-violet-200 
              active:bg-white dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-800
              focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
              mx-4 pl-2 py-1 rounded-lg'
            />

            <label htmlFor="email"
              className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mt-2 mb-1'>
              Email
            </label>
            <input type="email" id="email" name="email" 
              className='text-lg text-violet-600 dark:text-cyan-400 bg-violet-100 hover:bg-violet-200 
              active:bg-white dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-800
              focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
              mx-4 pl-2 py-1 rounded-lg'
            />

            <label htmlFor="password"
              className='text-xl text-transparent bg-clip-text dark-title-h1 light-title-h1 mx-4 mt-2 mb-1'>
              Password
            </label>
            <input type="password" id="password" name="password" 
              className='text-lg text-violet-600 dark:text-cyan-400 bg-violet-100 hover:bg-violet-200 
              active:bg-white dark:bg-slate-200 dark:hover:bg-slate-300 dark:active:bg-sky-800
              focus:outline-none focus:ring focus:ring-violet-400/70 dark:focus:ring-sky-500
              mx-4 pl-2 py-1 rounded-lg'
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
    
            {/*
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
            */}

        </form>
    )
}