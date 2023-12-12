import React from 'react';
import Image from 'next/image';
import cpuI7 from "@/public/img_cpu/cpu-i7.png";

export default function sectionImgTwo() {
    return (
        <div className='flex md:w-[300px] xl:w-[400px] h-auto m-auto rounded-lg'>
            <Image
                src={cpuI7}
                width={2500}
                height={2500}
                alt="forest img"
                className='object-cover shadow-out
                    transition ease-in-out duration-0 
                    hover:duration-300 hover:ease-in-out hover:skew-y-12 rounded-lg
                    hover:filter hover:grayscale hover:contrast-200'
            />
        </div>
    )
}
