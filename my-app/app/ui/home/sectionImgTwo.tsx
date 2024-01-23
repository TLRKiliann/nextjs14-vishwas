import React from 'react';
import Image from 'next/image';
import zachDebottis from "@/public/img_bg/zachary-debottis.jpg";

export default function sectionImgTwo() {
    return (
        <Image
            src={zachDebottis}
            width={1920}
            height={1280}
            alt="forest img"
            className='flex md:w-[350px] xl:w-[450px] h-auto m-auto object-cover shadow-none transition 
                transform ease hover:scale-105 hover:filter hover:grayscale hover:contrast-200 hover:shadow-out 
                rounded-lg'
        />
    )
}
