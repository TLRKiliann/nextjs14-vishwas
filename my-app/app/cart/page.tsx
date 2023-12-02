import React from 'react'

function Cart() {
  return (
    <div className='min-h-screen bg-slate-900'>
        <h1 className='text-2xl p-4'>Cart</h1>

        <section className='p-4 border-2'>
            <article className='border-2'>
                <h2 className='text-xl mb-4 border'>Products taken</h2>
                <p className='text-md text-justify border'>Name, price, img, ...</p>
            </article>
        </section>
    </div>
  )
}

export default Cart