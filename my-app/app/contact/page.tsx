import React from 'react'

export default function Contact() {
    return (
        <div className='min-h-screen bg-slate-100 text-slate-900 dark:text-slate-50 dark:bg-slate-900'>
            <h1 className='text-4xl font-bold 
                text-transparent bg-clip-text
                dark:bg-gradient-to-br dark:from-indigo-500 dark:from-10% 
                dark:via-sky-500 dark:via-50% dark:to-emerald-500 dark:to-90%
                bg-gradient-to-br from-violet-500 from-10% 
                via-purple-500 via-50% to-violet-200 to-90%
                p-4'
            >
                Contact us
            </h1>

            <div className="w-full h-auto md:mt-10 xl:mt-[10%]">

                <div className='w-2/5 h-auto text-lg font-bold text-slate-600 
                    bg-slate-50 mx-auto my-10 p-10 rounded-xl shadow-inviolet dark:shadow-in'
                >

                    <h3 className='text-2xl font-bold pb-4'>Contact</h3>
                    
                    <div className='flex align-center justify-between bg-slate-200 my-4 border'>
                        <p className='pl-2'>Address: </p>
                        <p className='pr-2'>Chemin des Lilas</p>
                    </div>
                    
                    <div className='flex align-center justify-between bg-slate-200 my-4 border'>
                        <p className='pl-2'>Email: </p>
                        <p className='pr-2'>ourindustry@mail.com</p>
                    </div>
                    
                    <div className='flex align-center justify-between bg-slate-200 my-4 border'>
                        <p className='pl-2'>Phone: </p>
                        <p className='pr-2'>078 324 34 44</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
