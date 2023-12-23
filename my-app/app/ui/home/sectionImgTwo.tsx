import React from 'react';
import Image from 'next/image';
import zachDebottis from "@/public/img_bg/zachary-debottis.jpg";

export default function sectionImgTwo() {
    return (
        <div className='flex md:w-[350px] xl:w-[450px] h-auto m-auto rounded-lg'>
            <Image
                src={zachDebottis}
                width={1920}
                height={1280}
                alt="forest img"
                className='object-cover shadow-out
                    transition ease-in-out duration-0 
                    hover:duration-300 hover:ease-in-out hover:skew-y-12
                    hover:filter hover:grayscale hover:contrast-200 rounded-lg hover:shadow-none'
            />
        </div>
    )
}
