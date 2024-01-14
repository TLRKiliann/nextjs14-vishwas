import React from 'react';
import Image from 'next/image';
import truckTest from '@/public/img_trucks/ace_1.jpg';
import truckTest2 from '@/public/img_trucks/ace_2.jpg';
import truckTest3 from '@/public/img_trucks/ace_3.jpg';
import truckTest4 from '@/public/img_trucks/ace_4.jpg';

export default function TrucksCards() {
    
    return (
        <>
            {/* map */}
            <div className='w-[800px] m-auto bg-slate-100 mt-10 border-2'>

                <div className='flex'>
                    <div className='flex justify-start w-[400px]'>

                        <div className='w-[200px] h-auto border border-slate-300'>
                            <Image src={truckTest} width={435} height={580} alt="img truck" 
                                className='object-cover' />

                            <div className='text-slate-600 p-2'>
                                <p>Name</p>
                                <p>Price</p>
                                <p>Stock</p>
                            </div>

                            <form action="">
                                <input type="number" id="id" name="id" value="id" hidden readOnly />

                                <button type="submit" id="sumbit" name="submit" value="subTruck">Sub</button>

                                <button type="submit" id="sumbit" name="submit" value="addTruck">Add</button>

                            </form>

                        </div>

                    </div>
                
                    <div className='flex justify-start w-[400px]'>

                        <div className='w-[200px] h-auto'>
                            <Image src={truckTest2} width={435} height={580} alt="img truck" 
                                className='object-cover' />
                        </div>

                    </div>
                </div>

                <div className='flex'>
                    <div className='flex justify-end w-[400px]'>

                        <div className='w-[200px] h-auto'>
                            <Image src={truckTest3} width={435} height={580} alt="img truck" 
                                className='object-cover' />
                        </div>

                    </div>
                
                    <div className='flex justify-end w-[400px]'>

                        <div className='w-[200px] h-auto'>
                            <Image src={truckTest4} width={435} height={580} alt="img truck" 
                                className='object-cover' />
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}
