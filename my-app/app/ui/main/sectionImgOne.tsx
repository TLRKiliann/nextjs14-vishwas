import React from 'react';
import Image from 'next/image';
import cpuI9 from "@/public/img_cpu/i9_cpu.jpg";

export default function sectionImgOne() {
    return (
        <div className='flex md:w-[300px] xl:w-[400px] h-auto
            m-auto rounded-lg'
        >
            <Image
                src={cpuI9}
                width={5475}
                height={3705}
                alt="forest img"
                className='object-cover shadow-out
                    transition duration-0 hover:duration-300 hover:ease-in-out rounded-lg
                    hover:filter hover:hue-rotate-90'
            />
        </div>
    )
}
