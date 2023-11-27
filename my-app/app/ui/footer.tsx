import Link from 'next/link'
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className="sticky flex align-center justify-center bottom-0 left-0 w-full
                bg-gradient-to-r from-slate-900 from-10% via-sky-500 via-30% to-slate-900 to-90%
                py-4"
            >
                
                <Link href="/docs/info" className='flex align-center text-slate-50 ml-10 p-2 hover:text-cyan-200'>
                    handcrafted by koalatr33 -&nbsp;<FaRegCopyright className="mt-1" />2023
                </Link>

            </footer>
        </>
    )
}