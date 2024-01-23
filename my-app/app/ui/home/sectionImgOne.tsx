import React from 'react';
import Image from 'next/image';
import allanFranca from "@/public/img_bg/allan-franca-carmo.jpg";

export default function sectionImgOne() {
    return (
        <Image
            src={allanFranca}
            width={1920}
            height={1280}
            alt="forest img"
            className='flex md:w-[350px] xl:w-[450px] h-auto m-auto object-cover rounded-lg shadow-none 
                transition transform ease hover:scale-105 hover:shadow-out hover:filter hover:hue-rotate-90 '
        />
    )
}
