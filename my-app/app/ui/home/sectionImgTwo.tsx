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
            className='flex md:w-[350px] xl:w-[450px] h-auto m-auto object-cover shadow-out transition 
                hover:filter hover:grayscale hover:contrast-200 hover:shadow-none rounded-lg'
        />
    )
}
