import Link from 'next/link'

export default function SideNav() {
    return (
        <div className='flex flex-col w-1/5 border border-blue-400 p-4'>
            <h3 className="text-xl font-bold">SideNav</h3>
            <ul className='list-disc p-2'>
                <li>
                    <Link 
                        href="/"
                    >
                        Home
                    </Link>
                </li>

                <li>
                    <Link 
                        href="/products"
                    >
                        Products
                    </Link>
                </li>

                <li>
                    <Link 
                        href="/docs"
                    >
                        Docs
                    </Link>
                </li>
            </ul>
        </div>
    )
}