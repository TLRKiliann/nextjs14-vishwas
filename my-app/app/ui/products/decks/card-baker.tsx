import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoShareSocial } from "react-icons/io5";
import { SlSocialTwitter } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";
import bakerDeck from "@/public/img_carousel/deck_baker2.jpg";

export default function CardBaker() {

    return (
        <div className='text-slate-600 bg-white shadow-lg rounded-lg border'>

            <div className='w-full flex align-center justify-center rounded-tr-lg rounded-tl-lg'>
                <Image src={bakerDeck} width={200} height={200} alt="img deck" 
                    className='object-cover'
                />
            </div>

            <div className='flex flex-col font-bold bg-slate-100/80 border'>
                <div className='flex align-center justify-between 
                    text-md text-slate-600/80 mx-4 mt-2 border'>
                    <p>Price</p>
                    <p>134.- CHF{/* 143.- CHF */}</p>
                </div>
                <div className='flex justify-between text-sm text-slate-500/80 mx-4 mb-2 border'>
                    <p>Stock</p>
                    <p>3 pcs{/* 2/10 pcs */}</p>
                </div>
            </div>

            <div className='bg-slate-100/80 px-4'>
                <p className='text-sm text-slate-500 bg-white p-2'>
                    Some text about decks une petite histoire ...
                </p>
            </div>

            <div className='text-sm bg-slate-100/80 border px-4 py-2'>
                <details>
                    <summary className='text-slate-500 hover:cursor-pointer'>
                        Details
                    </summary>
                    <Link href="#" className='text-blue-500 hover:text-blue-600 px-4'>
                        https://www.backer.com
                    </Link>
                </details>
            </div>

            <div className='bg-slate-100/80'>
                <div className='flex justify-end px-4 py-2'>
                    <span className="text-slate-500 hover:text-slate-600 hover:cursor-pointer ml-2">
                        <IoShareSocial size={24} />
                    </span>
                    <span className="text-slate-500 hover:text-slate-600 hover:cursor-pointer ml-2">
                        <SlSocialTwitter size={24} />
                    </span>
                    <span className="text-slate-500 hover:text-slate-600 hover:cursor-pointer ml-2">
                        <FaGithub size={24} />
                    </span>
                </div>
            </div>

        </div>
    )
}
