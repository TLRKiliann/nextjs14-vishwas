import React from 'react'
import Image from "next/image"
import spinLoader from "@/public/img_logo/loader.png";

export default function Loading() {
  return (
    <div className="min-h-screen">
        <div className='flex align-center p-4'>

          <div className='flex align-center w-auto h-auto mr-3'>
              <Image
                  src={spinLoader}
                  width={20}
                  height={20}
                  alt="img loader"
                  className="object-cover animate-spin" 
              />
          </div>

          <h2 className='font-bold'>Loading...</h2>

        </div>
    </div>
  )
}