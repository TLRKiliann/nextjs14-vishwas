import React from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function SocialIcons() {
    return (
        <div className='flex align-center justify-end dark:text-blue-400/80 text-purple-500 mt-8'>
            <Link href="https://www.github.com" className='hover:dark:text-blue-400/90 hover:cursor-pointer ml-4'>
                <span>
                    <FaGithub size={28} />
                </span>                    
            </Link>

            <Link href="https://www.github.com" className='hover:dark:text-blue-400/90 hover:cursor-pointer ml-4'>
                <span className=''>
                    <FaSquareTwitter size={28} />
                </span>
            </Link>

            <Link href="https://www.github.com" className='hover:dark:text-blue-400/90 hover:cursor-pointer ml-4'>
                <span>
                    <FaYoutube size={28} />
                </span>
            </Link>

            <Link href="https://www.github.com" className='hover:dark:text-blue-400/90 hover:cursor-pointer ml-4'>
                <span>
                    <FaInstagram size={28} />
                </span>
            </Link>

            <Link href="https://www.github.com" className='hover:dark:text-blue-400/90 hover:cursor-pointer ml-4'>
                <span>
                    <FaTiktok size={28} />
                </span>
            </Link>

            <Link href="https://www.github.com" className='hover:dark:text-blue-400/90 hover:cursor-pointer ml-4'>
                <span>
                    <FaLinkedin size={28} />
                </span>
            </Link>
        </div>
    )
}
