"use client";

import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useFormState, useFormStatus } from 'react-dom';
import { useShoppingCart } from '@/app/context/cart-context';
import { deleteCartItem } from '@/app/lib/actions';

type ItemProps = {
    id: number;
    img: string
    deckname: string;
    price: number;
    stock: number;
    quantity: number;
}

export default function CartItem({id, deckname, img, price, stock, quantity}: ItemProps) {
    
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname, "pathname")
    
    const { removeFromCart } = useShoppingCart();

    const {pending} = useFormStatus();
    const [code, formAction] = useFormState(deleteCartItem, undefined);

    const handleDeleteItem = (id: number) => {
        removeFromCart(id);
        router.refresh();
    }

    const initialCount: number = 0;
    
    return (
        <div key={id} className='flex items-center justify-around mt-0 mb-4'>

            <div className='m-auto ml-4'>
                <Image src={img} width={100} height={100} alt="no img" className='rounded-lg drop-shadow-lg' />
            </div>

            <div className='flex-1 items-center m-auto mr-4 ml-4 pl-4 pr-2'>

                <p className='text-xl font-bold text-slate-600 mb-0'>
                    {deckname.toUpperCase()} 
                </p>

                <p className='text-lg text-slate-600 mb-0'>
                    Price: {price.toFixed(2)}.- CHF
                </p>

                <p className='text-md text-slate-600 mb-0'>
                    Quantity: x{quantity}
                </p>

                <form action={formAction} className='flex items-center justify-between'>

                    <p className='text-md text-slate-600'>
                        stock: {stock - quantity}
                    </p>

                    <input type="number" id="id" name="id" value={id} hidden readOnly />
                    <input type="text" id="deckname" name="deckname" value={deckname} hidden readOnly />
                    <input type="number" id="price" name="price" value={initialCount} hidden readOnly />
                    <input type="number" id="count" name="count" value={initialCount} hidden readOnly />

                    <button type="submit" id="submit" name="submit" value="deletecartorder"
                        onClick={() => handleDeleteItem(id)} disabled={pending}
                        className='text-slate-200 font-bold bg-red-500 hover:bg-red-500/80 
                            hover:shadow-none active:text-slate-50 active:bg-red-400 px-2 py-1 
                            rounded drop-shadow-lg'
                    >
                        {pending ? "Pending..." : "Remove"}
                    </button>

                    {code?.message ? (
                        <p>{code.message}</p>
                        ) : null
                    }

                </form>
                
            </div>
        </div>
    )
}
