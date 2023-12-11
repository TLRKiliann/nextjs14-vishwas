import Link from 'next/link'
import LogOut from './logout'

export default function SideNav() {
    return (
        <div className='flex flex-col w-1/5 text-gray-700 bg-slate-50 border rounded-br-lg p-4'>
            <h3 className="text-xl font-bold">SideNav</h3>
            <ul className='list-disc p-2'>
                <li className='mb-2 hover:text-blue-400'>
                    <Link 
                        href="/"
                    >
                        Home
                    </Link>
                </li>
                <hr />

                <li className='mb-2 hover:text-blue-400'>
                    <Link 
                        href="/products"
                    >
                        Products
                    </Link>
                </li>
                <hr />

                <li className='mb-2 hover:text-blue-400'>
                    <Link 
                        href="/docs"
                    >
                        Docs
                    </Link>
                </li>
                <hr />

                <li className='mb-2 hover:text-blue-400'>
                    <Link 
                        href="/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
                <hr />

                <li className='mb-2 hover:text-blue-400'>
                    <Link 
                        href="/login"
                    >
                        Login
                    </Link>
                </li>
                <hr />

                <LogOut />

            </ul>
        </div>
    )
}