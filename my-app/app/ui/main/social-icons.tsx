import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function SocialIcons() {
    return (
        <div className='flex align-center justify-end mt-4'>
            <span className='dark:text-blue-300 text-violet-500 ml-4'><FaGithub size={28} /></span>
            <span className='dark:text-blue-300 text-violet-500 ml-4'><FaSquareTwitter size={28} /></span>
            <span className='dark:text-blue-300 text-violet-500 ml-4'><FaYoutube size={28} /></span>
            <span className='dark:text-blue-300 text-violet-500 ml-4'><FaInstagram size={28} /></span>
            <span className='dark:text-blue-300 text-violet-500 ml-4'><FaTiktok size={28} /></span>
            <span className='dark:text-blue-300 text-violet-500 ml-4'><FaLinkedin size={28} /></span>
        </div>
    )
}
