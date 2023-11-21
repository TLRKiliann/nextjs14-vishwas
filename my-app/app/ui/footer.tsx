import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="sticky flex bottom-0 left-0 w-full
                bg-gradient-to-r from-slate-900 from-10% via-sky-500 via-30% to-slate-900 to-90%
                py-2"
            >
                
                <h1 className="flex items-center text-xl ml-5 border border-orange-400 p-2">Footer</h1>
                
                <nav className='w-full flex justify-end mr-10 border border-green-400'>
                    <ul className='flex font-bold border border-orange-400'>
                        <li className='ml-10 border border-blue-400 p-2 hover:text-slate-400'>
                            <Link href="/products">Products</Link>
                        </li>
                        <li className='ml-10 border border-blue-400 p-2'>
                            <Link href="/docs">Docs</Link>
                        </li>
                        <li className='ml-10 border border-blue-400 p-2'>
                            <Link href="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    )
}