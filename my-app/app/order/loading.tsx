import React from 'react'
import Image from "next/image"
import spinLoader from "@/public/img_logo/loader.png";

export default function Loading(): JSX.Element {
  return (
    <div className="w-full min-h-screen">
        <div className='w-[200px] flex items-center p-4'>

          <Image
              src={spinLoader}
              width={20}
              height={20}
              alt="img loader"
              className="object-cover animate-spin" 
          />

          <h2 className='font-bold ml-4'>Loading...</h2>

        </div>
    </div>
  )
}