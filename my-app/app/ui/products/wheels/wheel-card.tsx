"use client";

import type { ProductsProps } from '@/app/lib//definitions';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { queryWheelsCart } from '@/app/lib/actions';
import { useShoppingCart } from '@/app/context/cart-context';
import RemoveAll from './btnwheels-rm-all';
import { 
    incrementToastMessage,
    decrementToastMessage, 
    notifyRemoveAllToast, 
    handleDeleteCart, 
    handleAddToCart
} from '@/app/lib/functions';

export default function WheelCard({id, name, price, stock, img}: ProductsProps) {

    const router = useRouter();

    const { pending } = useFormStatus();
    const [code, formAction] = useFormState(queryWheelsCart, undefined)

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity
    } = useShoppingCart();

    const quantity: number = getItemQuantity(id);

    const wordCut = name.split(" ");
    const wheelPath = wordCut?.[0];

    const increment = () => incrementToastMessage();
    const decrement = () => decrementToastMessage();
    const notifyRemoveAll = () => notifyRemoveAllToast();

    const handleAdd = (id: number, name: string, price: number, img: string, stock: number) => {
        return handleAddToCart(id, name, price, img, stock, increment, increaseCartQuantity);
    };

    const handleDelete = (id: number, name: string, price: number, img: string, stock: number) => {
        return handleDeleteCart(id, name, price, img, stock, decrement, decreaseCartQuantity);
    };

    const handlePath = (id: number): void => {
        router.push(`/products/wheels/${wheelPath}/${id}`);
    };

    return (
        <div key={id} className='flex flex-col w-[150px] xl:w-[240px] h-auto bg-slate-100 border xl:mx-10 pb-2 
            first:rounded-tl-lg first:rounded-bl-lg last:rounded-br-lg last:rounded-tr-lg
            xl:rounded-lg xl:shadow-mdoutviolet xl:dark:shadow-lg'>
            
            <span onClick={() => handlePath(id)}>
                <Image src={img} width={435} height={580} alt="img wheel"
                    className='w-[150px] xl:w-[240px] object-cover cursor-pointer hover:opacity-90 
                    md:rounded-tl-lg md:rounded-tr-lg xl:rounded-tr-lg xl:rounded-tl-lg' />
            </span>

            <div className='flex flex-col w-full text-slate-600/80 p-2'>
                <h3 className='text-sm font-bold'>
                    {name.charAt(0).toUpperCase() + name.slice(1)}
                </h3>
                <div className='flex items-center justify-between text-sm font-bold'>
                    <p>Price:</p>
                    <p>{price}.-</p>
                </div>
                {stock - quantity === 0 ? (
                        <p className='warning-stock text-center'>No more in stock</p>
                    ) : (
                        <div className='flex items-center justify-between w-full text-sm'>
                            <p>Stock:</p> 
                            <p>{stock - quantity}pcs</p>
                        </div>
                    )
                }  
            </div>

            <p className='text-center text-lg font-normal text-slate-500/80 m-auto pt-2'>
                <span className={`font-bold ${quantity === 0 ? "text-slate-500/80" : "text-red-500/80" }`}>
                    {quantity}&nbsp;
                </span>
                in cart
            </p>

            <form action={formAction}>

                <input type="number" id="id" name="id" value={id} hidden readOnly />
                <input type="text" id="name" name="name" value={name} hidden readOnly />
                <input type="number" id="price" name="price" value={price} hidden readOnly />
                <input type="number" id="count" name="count" value={quantity} hidden readOnly />
                <input type="number" id="stock" name="stock" value={stock} hidden readOnly />
                <input type="text" id="img" name="img" value={img} hidden readOnly />

                <div className="flex items-center justify-between px-4 py-2">
                    <button type="submit" id="submit" name="submit" value="deleteWheel"
                        onClick={() => handleDelete(id, name, price, 
                            img, stock)}
                        disabled={pending} className='button-wheels'>
                        {pending ? "Pending..." : "-"}
                    </button>

                    {stock - quantity !== 0 ? (
                        <button type="submit" id="submit" name="submit" value="addWheel"
                            onClick={() => handleAdd(id, name, price, 
                                img, stock)}
                            disabled={pending} className='button-wheels'>
                            {pending ? "Pending..." : "+"}
                        </button>
                        ) : null 
                    }
                </div>
                {(code?.message === "Inserted to cart !") && (quantity !== 0) ? (
                    <p className='message-cart-green mb-2'>{code.message}</p>
                ) : (code?.message === "Deleted from cart") && (quantity !== 0) ? (
                    <p className='message-cart mb-2'>{code.message}</p>
                ) : null }
            </form>

            <RemoveAll id={id} notifyRemoveAll={notifyRemoveAll} />

        </div>
    )
}
