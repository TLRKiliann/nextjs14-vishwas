"use client";

import React from 'react'
import type { Metadata } from 'next'
import { useFormState, useFormStatus } from 'react-dom'
import { mysqlServerAction } from '@/app/lib/actions'

const initialState = {
  message: null,
}

export const metadata: Metadata = {
  title: "register",
  description: "registered"
}

export default function RegisterForm() {

    const {pending} = useFormStatus()

    const [state, formAction] = useFormState(mysqlServerAction, initialState)

    return (
        <form action={formAction} className='flex flex-col w-2/5 m-auto bg-blue-600 p-10'>

            <h2>Register</h2>

            <label htmlFor="id">Id</label>
            <input type="text" id="id" name="id" />

            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />

            <button type="submit" id="submit" name="submit" value="insert"
                className='bg-red-600 mt-4'>
            {pending ? "Pending..." : "Submit"}
            </button>
            {state?.message ? (
                <p className='text-md text-center text-green-500 mt-4'>{state.message}</p> 
                ) : (
                <p className='text-md text-center text-green-400 mt-4'>Enter data !</p>
                )}
        </form>
    )
}