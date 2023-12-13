import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PropsProdReview } from '@/app/lib/definitions';

export const generateMetadata = async ({params}: PropsProdReview): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
      setTimeout(() => {
          resolve(`CPU: ${params.productId} Art: ${params.reviewId}`)
      }, 300)
  })
  return {
      title: `Prod-${title}-`
  }
}

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
