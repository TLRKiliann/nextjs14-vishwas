import Link from 'next/link'
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className="sticky flex align-center justify-center bottom-0 left-0 w-full
                text-blue-900 dark:text-slate-50
                dark:bg-gradient-to-r dark:from-slate-900 dark:from-10% 
                dark:via-sky-500 dark:via-30% dark:to-slate-900 dark:to-90%
                bg-gradient-to-r from-blue-400 from-10% 
                via-slate-50 via-30% to-blue-400 to-90%
                py-4"
            >
                <Link href="/docs/info" className='flex align-center
                    hover:dark:text-cyan-200 hover:text-indigo-600 ml-10 p-2'>
                    handcrafted by koalatr33 -&nbsp;<FaRegCopyright className="mt-1" />2023
                </Link>

            </footer>
        </>
    )
}