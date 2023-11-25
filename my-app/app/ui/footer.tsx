import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="sticky flex align-center justify-center bottom-0 left-0 w-full
                bg-gradient-to-r from-slate-900 from-10% via-sky-500 via-30% to-slate-900 to-90%
                py-4"
            >
                
                <Link href="/docs/info" className='ml-10 p-2 hover:text-blue-400'>
                    ko@l@tr33 - handcraft 2023
                </Link>

            </footer>
        </>
    )
}