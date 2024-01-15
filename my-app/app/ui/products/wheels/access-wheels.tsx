import React from 'react';
import Link from 'next/link';

export default function AccessWheels() {
  return (
    <div className='p-4 pl-8'>
        <li className='custom-li'>
            <Link href="/products/wheels/bones/1" className="custom-link">
                Bones One
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/bones/2" className="custom-link">
                Bones Two
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/bones/3" className="custom-link">
                Bones Three
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/bones/4" className="custom-link">
                Bones Four
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/slimballs/5" className="custom-link">
                Slimballs One
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/slimballs/6" className="custom-link">
                Slimballs Two
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/slimballs/7" className="custom-link">
                Slimballs Three
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/slimballs/8" className="custom-link">
                Slimballs Four
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/spitfire/9" className="custom-link">
                Spitfire One
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/spitfire/10" className="custom-link">
                Spitfire Two
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/spitfire/11" className="custom-link">
                Spitfire Three
            </Link>
        </li>
        <li className='custom-li'>
            <Link href="/products/wheels/spitfire/12" className="custom-link">
                Spitfire Four
            </Link>
        </li>
    </div>
  )
}
