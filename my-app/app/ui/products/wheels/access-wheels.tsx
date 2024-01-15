import React from 'react';
import Link from 'next/link';

export default function AccessWheels() {
    return (
        <div className='p-4 pl-8'>
            <li className='custom-li'>
                <Link href="/products/wheels/bones/37" className="custom-link">
                    Bones One
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/bones/38" className="custom-link">
                    Bones Two
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/bones/39" className="custom-link">
                    Bones Three
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/bones/40" className="custom-link">
                    Bones Four
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/slimballs/41" className="custom-link">
                    Slimballs One
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/slimballs/42" className="custom-link">
                    Slimballs Two
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/slimballs/43" className="custom-link">
                    Slimballs Three
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/slimballs/44" className="custom-link">
                    Slimballs Four
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/spitfire/45" className="custom-link">
                    Spitfire One
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/spitfire/46" className="custom-link">
                    Spitfire Two
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/spitfire/47" className="custom-link">
                    Spitfire Three
                </Link>
            </li>
            <li className='custom-li'>
                <Link href="/products/wheels/spitfire/48" className="custom-link">
                    Spitfire Four
                </Link>
            </li>
        </div>
    )
}
