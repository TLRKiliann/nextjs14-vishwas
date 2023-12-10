import React from 'react';
import Link from 'next/link';

export default function ReviewById({children}: {children: React.ReactNode}) {
  return (
    <div>
      <li className='text-md font-bold text-sky-500 hover:text-sky-400 p-4'>
        <Link href="/products/1/reviews">Back to all articles</Link>
      </li>
        {children}
    </div>
  )
}
