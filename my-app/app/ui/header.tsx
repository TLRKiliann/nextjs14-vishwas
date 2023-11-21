import Link from 'next/link'
import Image from 'next/image'
import logoImg from '@/public/img_logo/processor.png';

export default function Header() {
    return (
        <>
            <header className="sticky flex top-0 left-0 w-full
                border border-blue-600
                bg-gradient-to-r from-slate-900 from-10% via-sky-500 via-30% to-slate-900 to-90%
                py-4 z-10"
            >
                
                <div className="relative flex align-center justify-center w-20 h-auto ml-4 
                    border border-orange-400"
                >
                    <Image
                        src={logoImg}
                        width={500}
                        height={500}
                        alt="img logo"
                        className="flex w-auto h-auto m-auto object-cover"
                    />
                </div>
                
                <nav className='w-full flex align-center justify-end mr-5 border border-green-400'>
                    <ul className='flex font-bold border border-orange-400'>
                      
                        <Link href="/" className='m-auto ml-10 border border-blue-400 p-2'>Home</Link>
                        
                        <Link href="/products" className='m-auto ml-10 border border-blue-400 p-2'>
                            Products
                        </Link>

                        <Link href="/docs" className='m-auto ml-10 border border-blue-400 p-2'>
                            Docs
                        </Link>

                        <Link href="/login" className='m-auto ml-10 border border-blue-400 p-2'>
                            Login
                        </Link>

                    </ul>
                </nav>
            </header>
        </>
    )
}