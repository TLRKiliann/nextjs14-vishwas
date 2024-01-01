import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import bakerLogo from '@/public/img_logo/baker-logo.jpg';
import blindLogo from '@/public/img_logo/blind-logo.png';
import girlLogo from '@/public/img_logo/girl-logo.jpg';
import elementLogo from '@/public/img_logo/element-logo.jpg';

export default function MenuDecks() {
    return (
        <>

    
            <div className='absolute w-3/5 p-4'>
        
                <div className='relative bg-slate-100 dark:bg-slate-200 h-[100px] p-4 mb-3 rounded-lg'>
        
                    <h2 className='text-2xl font-bold text-transparent bg-clip-text
                        dark-title-h1 light-title-h1'>
                        Baker
                    </h2>
        
                    <li className='mt-3 ml-4 text-blue-500 hover:text-blue-600'>
                        <Link href="/products/decks/baker">
                            All Baker&apos;s Decks
                        </Link>
                    </li>
                    
                    <div className="absolute top-5 right-5 border">
                        <Image src={bakerLogo} width={100} height={50} alt="baker logo"
                            className='object-cover rounded' />
                    </div>
        
                </div>
    
                <div className='relative bg-slate-100 dark:bg-slate-200 h-[100px] p-4 mb-3 rounded-lg'>
                    
                    <h2 className='text-2xl font-bold text-transparent bg-clip-text
                        dark-title-h1 light-title-h1'>
                        Blind
                    </h2>

                    <li className='ml-4 text-blue-500 hover:text-blue-600'>
                        <Link href="/products/decks/blind">
                            All Blind&apos;s Decks
                        </Link>
                    </li>
    
                    <div className="absolute top-0 right-5 border">
                        <Image src={blindLogo} width={95} height={95} alt="baker logo"
                            className='object-cover rounded-full' />
                    </div>
        
                </div>
    
                <div className='relative bg-slate-100 dark:bg-slate-200 h-[100px] p-4 mb-3 rounded-lg'>
                
                    <h2 className='text-2xl font-bold text-transparent bg-clip-text
                        dark-title-h1 light-title-h1'>
                        Girl
                    </h2>
        
                    <li className='ml-4 text-blue-500 hover:text-blue-600'>
                        <Link href="/products/decks/girl">
                            All Girl&apos;s Decks
                        </Link>
                    </li>
    
                    <div className="absolute top-2 right-6 border">
                        <Image src={girlLogo} width={85} height={85} alt="baker logo"
                            className='object-cover rounded' />
                    </div>
        
                </div>
    
                <div className='relative bg-slate-100 dark:bg-slate-200 h-[100px] p-4 rounded-lg'>
                
                    <h2 className='text-2xl font-bold text-transparent bg-clip-text
                        dark-title-h1 light-title-h1'>
                        Element
                    </h2>
        
                    <li className='ml-4 text-blue-500 hover:text-blue-600'>
                        <Link href="/products/decks/element">
                            All Element&apos;s Decks
                        </Link>
                    </li>
    
                    <div className="absolute top-1 right-5 border">
                        <Image src={elementLogo} width={90} height={90} alt="baker logo"
                            className='object-cover rounded-full' />
                    </div>
    
                </div>
            </div>
        </>
    )
}
