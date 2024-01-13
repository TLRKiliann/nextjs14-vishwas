import React from 'react';
import Link from 'next/link';

export default function MenuWheelsSpitSlimBones() {
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
            <Link href="/products/wheels/spitfire/1" className='custom-link'>Spitfire one</Link>
        </li>
        <li className='custom-li py-1'>
            <Link href="/products/wheels/spitfire/2" className='custom-link'>Spitfire two</Link>
        </li>
        <li className='custom-li py-1'>
            <Link href="/products/wheels/spitfire/3" className='custom-link'>Spitfire three</Link>
        </li>
        <li className='custom-li py-1'>
            <Link href="/products/wheels/spitfire/4" className='custom-link'>Spitfire four</Link>
        </li>
        <li className='custom-li py-1'>
            <Link href="/products/wheels/slimballs/1" className='custom-link'>Slimballs one</Link>
        </li>
        <li className='custom-li py-1'>
            <Link href="/products/wheels/slimballs/2" className='custom-link'>Slimballs two</Link>
        </li>
        <li className='custom-li py-1'>
            <Link href="/products/wheels/slimballs/3" className='custom-link'>Slimballs three</Link>
        </li>
        <li className='custom-li py-1'>
            <Link href="/products/wheels/slimballs/4" className='custom-link'>Slimballs four</Link>
        </li>
    </div>
  )
}
