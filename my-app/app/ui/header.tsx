import Link from 'next/link'

export default function Header() {
    return (
        <>
            <header className="flex w-full bg-slate-500 py-2" >
                <h1 className="flex items-center text-xl ml-10 border border-orange-400">Header</h1>
                <nav className='w-full flex justify-end mr-10 border border-green-400'>
                    <ul className='flex font-bold border border-orange-400'>
                        <li className='ml-10 border border-blue-400 p-2'>
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
            </header>
        </>
    )
}