import Link from 'next/link'
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
    return (
        <>
            <footer className="fixed flex align-center justify-center bottom-0 left-0 w-full
                text-cyan-600 dark:text-slate-50
                dark:bg-gradient-to-br dark:from-slate-900 dark:from-10% 
                dark:via-sky-500 dark:via-60% dark:to-slate-900 dark:to-90%
                bg-gradient-to-br from-cyan-500 from-10% 
                via-slate-50 via-60% to-cyan-500 to-90%
                py-4 z-10"
            >
                <Link href="/docs/info" className='flex align-center
                    hover:dark:text-cyan-200 hover:text-cyan-700 ml-10 p-2'>
                    handcrafted by koalatr33 -&nbsp;<FaRegCopyright className="mt-1" />2023
                </Link>

            </footer>
        </>
    )
}