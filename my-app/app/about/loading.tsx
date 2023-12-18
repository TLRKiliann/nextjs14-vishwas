import React from 'react'
import Image from "next/image"
import spinLoader from "@/public/img_logo/loader.png";

export default function Loading() {
  return (
    <div className="min-h-screen">
        <div className='flex align-center p-4'>

          <Image
              src={spinLoader}
              width={20}
              height={20}
              alt="img loader"
              className="m-auto animate-spin" 
          />

          <p className='font-bold ml-4'>Loading...</p>

        </div>
    </div>
  )
}