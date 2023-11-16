import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full h-screen">
      <h1 className='text-2xl p-4'>Main Page</h1>
      <div className='w-40 bg-slate-800 ml-4'>
        <li className='text-blue-400 ml-6 p-2'>
          <Link href="/products">Products</Link>
        </li>
        <li className='text-blue-400 ml-6 p-2'>
          <Link href="/docs/concept/feature">Docs</Link>
        </li>
      </div>
    </main>
  )
}
