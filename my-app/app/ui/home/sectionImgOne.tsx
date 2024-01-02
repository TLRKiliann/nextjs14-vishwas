import React from 'react';
import Image from 'next/image';
import allanFranca from "@/public/img_bg/allan-franca-carmo.jpg";

export default function sectionImgOne() {
    return (
        <div className='flex md:w-[350px] xl:w-[450px] h-auto
            m-auto rounded-lg'
        >
            <Image
                src={allanFranca}
                width={1920}
                height={1280}
                alt="forest img"
                className='object-cover shadow-out transform transition hover:rotate-[-15deg] hover:shadow-none 
                    hover:filter hover:hue-rotate-90 rounded-lg'
            />
        </div>
    )
}

/*
hover:animate-vertical-rotation hover:shadow-none hover:filter hover:hue-rotate-90 rounded-lg
transition duration-0 hover:duration-300 hover:ease-in-out rounded-lg
hover:filter hover:hue-rotate-90'
*/