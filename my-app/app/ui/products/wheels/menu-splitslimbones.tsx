"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MenuWheelsSpitSlimBones() {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div className='flex flex-col items-start w-[240px] bg-slate-800 pl-10 py-3 rounded-tr-md 
            rounded-br-md'>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/bones/1" className='custom-link'>Bones one</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/bones/2" className='custom-link'>Bones two</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/bones/3" className='custom-link'>Bones three</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/bones/4" className='custom-link'>Bones four</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/spitfire/5" className='custom-link'>Spitfire one</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/spitfire/6" className='custom-link'>Spitfire two</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/spitfire/7" className='custom-link'>Spitfire three</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/spitfire/8" className='custom-link'>Spitfire four</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/slimballs/9" className='custom-link'>Slimballs one</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/slimballs/10" className='custom-link'>Slimballs two</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/slimballs/11" className='custom-link'>Slimballs three</Link>
            </li>
            <li className='custom-li py-1'>
                <Link href="/products/wheels/slimballs/12" className='custom-link'>Slimballs four</Link>
            </li>
        </div>
    )
}
