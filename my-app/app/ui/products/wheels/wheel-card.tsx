"use client";

import React from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import type { WheelsProps } from '@/app/lib//definitions';
import { useFormState, useFormStatus } from 'react-dom';
import { queryWheelsCart } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';

export default function WheelCard({data}: {data: WheelsProps[]}) {

    const router = useRouter();

    const { pending } = useFormStatus();
    const [code, formAction] = useFormState(queryWheelsCart, undefined)

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        //removeFromCart
    } = useShoppingCart();

    const mappingData = data.find((d: WheelsProps) => d.id);

    let quantity: number = getItemQuantity(Number(mappingData?.id));
    
    const handleDelete = (id: number, name: string, price: number, img: string, stock: number) => {
        decreaseCartQuantity(id, name, price, img, stock);
    };

    const handleAdd = (id: number, name: string, price: number, img: string, stock: number) => {
        increaseCartQuantity(id, name, price, img, stock);
    };
    const bonesWord = data.find((d) => d.name);
    const convertBonesWord: string | undefined = bonesWord?.name;
    const wordCut = convertBonesWord?.split(" ");
    const wheelPath = wordCut?.[0];

    const handlePath = (id: number) => {
        router.push(`/products/wheels/${wheelPath}/${id}`);
    };

    if (!data) {
        throw new Error("Error: server failed !");
    };

    return (
        <div className='xs:w-4/5 w-3/5 h-auto bg-slate-300 m-auto mb-10 pt-4 pb-10 rounded dark:shadow-in 
            shadow-inviolet'>
    
            <div className="w-[600px] m-auto py-2">
                <h2 className='text-4xl text-transparent bg-clip-text dark-title-h1 light-title-h1'>
                    {wheelPath ? wheelPath.charAt(0).toUpperCase() + wheelPath.slice(1) : null}
                </h2>
            </div>

            <div className='md:flex md:flex-col lg:grid grid-cols-4 grid-row-3 gap-0 justify-items-center 
                md:w-[150px] lg:w-[600px] bg-slate-50 m-auto rounded-xl dark:shadow-lg 
                shadow-none'>

                {data.map((wheelUnit: WheelsProps) => (
                    <span key={wheelUnit.id} 
                        className='w-[150px] h-auto'>
                        <span onClick={() => handlePath(wheelUnit.id)}>
                            <Image src={wheelUnit.img} width={435} height={580} alt="img wheelUnit"
                                className='object-cover cursor-pointer hover:opacity-90 
                                    rounded-tr-xl rounded-tl-xl' />
                        </span>
                        <div className='text-slate-600/80 p-2'>
                            <h3 className='text-sm font-bold'>
                                {wheelUnit.name.charAt(0).toUpperCase() + wheelUnit.name.slice(1)}
                            </h3>
                            <h4 className='text-sm font-bold'>{wheelUnit.price}.-</h4>
                            <p className='text-sm mt-2'>Stock: {wheelUnit.stock - quantity}pcs</p>
                        </div>

                        <p className='text-center text-lg font-normal text-slate-500/80 m-auto pt-2'>
                            <span className={`font-bold ${quantity === 0 ? "text-slate-500/80" : "text-red-500/80" }`}>
                                {quantity}&nbsp;
                            </span>
                            in cart
                        </p>

                        <form action={formAction} className="flex justify-between py-2">

                            <input type="number" id="id" name="id" value={wheelUnit.id} hidden readOnly />
                            <input type="text" id="name" name="name" value={wheelUnit.name} hidden readOnly />
                            <input type="number" id="price" name="price" value={wheelUnit.price} hidden readOnly />
                            <input type="number" id="count" name="count" value={quantity} hidden readOnly />
                            <input type="number" id="stock" name="stock" value={wheelUnit.stock} hidden readOnly />
                            <input type="text" id="img" name="img" value={wheelUnit.img} hidden readOnly />

                            <button type="submit" id="submit" name="submit" value="deleteWheel"
                                onClick={() => handleDelete(wheelUnit.id, wheelUnit.name, wheelUnit.price, 
                                    wheelUnit.img, wheelUnit.stock)}
                                disabled={pending} className='button-card'>
                                {pending ? "Pending..." : "Sub"}
                            </button>

                            <button type="submit" id="submit" name="submit" value="addWheel"
                                onClick={() => handleAdd(wheelUnit.id, wheelUnit.name, wheelUnit.price, 
                                    wheelUnit.img, wheelUnit.stock)}
                                disabled={pending} className='button-card'>
                                {pending ? "Pending..." : "Add"}
                            </button>

                        </form>
                        {code?.message && quantity !== 0 ? (
                        <p className='message-cart'>
                            {code.message}
                        </p>
                        ) : null}
                    </span>
                ))}

            </div>
        </div>
    )
}
