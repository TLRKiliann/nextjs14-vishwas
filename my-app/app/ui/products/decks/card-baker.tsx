"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DecksProps } from '@/app/lib/definitions';
import { useShoppingCart } from '@/app/context/cart-context';
import { formatCurrency } from "@/app/utils/formatCurrency";
import { useFormState, useFormStatus } from 'react-dom';
import { queryDecksCart } from '@/app/lib/actions';
import { IoShareSocial } from 'react-icons/io5';
import { SlSocialTwitter } from 'react-icons/sl';
import { FaGithub } from 'react-icons/fa6';

const CardBaker = ({ id, deckname, price, img, stock }: DecksProps) => {

    const { pending } = useFormStatus();
    const [ code, formAction ] = useFormState(queryDecksCart, undefined)

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        //removeFromCart
    } = useShoppingCart();

    const quantity = getItemQuantity(id);

    const handleAddToCart = (id: number, deckname: string, price: number, img: string, stock: number) => {
        increaseCartQuantity(id, deckname, price, img, stock);
    };
  
    const handleRemoveFromCart = (id: number, deckname: string, price: number, img: string, stock: number) => {
        decreaseCartQuantity(id, deckname, price, img, stock);
    };
    console.log(quantity, "** quantity **")
    return (
        <div key={id}
            className="text-slate-600 bg-white shadow-lg transform transition 
                hover:scale-[1.025] hover:shadow-xl translate-y-0 animate-up-start 
                rounded-xl border mb-auto"
        >
            
            <Image
                src={img}
                width={200}
                height={200}
                alt="img deck"
                className="m-auto transform ease-in-out hover:opacity-70 hover:cursor-pointer 
                    hover:scale-90 active:animate-decks-rotation active:duration-300"
            />

            <div className="flex flex-col font-bold bg-slate-100/80 border">
                <div className="flex align-center justify-between text-md text-slate-600/80 mx-4 
                    my-2 border">
                    <p>{deckname.toUpperCase()}</p>
                </div>
                <div className="flex align-center justify-between text-sm text-slate-500/80 mx-4 border">
                    <p>Price</p>
                    <p>{formatCurrency(price)}.- CHF</p>
                </div>
                <div className="flex justify-between text-sm text-slate-500/80 mx-4 mb-2 border">
                    <p>Stock</p>
                    <p>{stock}</p>
                </div>
                
                <div>
                  <span>{quantity}</span> In cart
                </div>
            
            </div>

            <div className="bg-slate-100/80 px-4">
                <p className="w-[200px] text-sm text-slate-500 bg-white p-2">
                    Some text about decks une petite histoire ...
                </p>
            </div>

            <form action={formAction} className='flex justify-between px-4 py-2 bg-slate-100/80'>
                
                <input type="number" id="id" name="id" value={id} hidden readOnly />
                <input type="text" id="deckname" name="deckname" value={deckname} hidden readOnly />
                <input type="string" id="total" name="total" value={price} hidden readOnly />
                <input type="number" id="count" name="count" value={quantity} hidden readOnly />


                <button type="submit" id="submit" name="submit" value="remove" 
                    onClick={() => handleRemoveFromCart(id, deckname, price, img, stock)}
                    className='text-sm text-slate-500 bg-slate-300 hover:text-slate-100 
                        hover:bg-slate-400 active:text-slate-50 active:bg-slate-500/80
                        px-4 py-1 rounded'
                >
                    {pending ? "pending..." : "Delete"}
                </button>

                <button type="submit" id="submit" name="submit" value="order" 
                    onClick={() => handleAddToCart(id, deckname, price, img, stock)}
                    className='text-sm text-slate-500 bg-slate-300 hover:text-slate-100 
                        hover:bg-slate-400 active:text-slate-50 active:bg-slate-500/80
                        px-4 py-1 rounded'
                >
                    {pending ? "pending..." : "Add"}
                </button>

            </form>
            {code?.message ? (
                <div>
                    <p className='text-center text-orange-500'>{code.message}</p>
                </div>
                ) : null
            }

            <div className="flex align-center justify-between text-sm bg-slate-100/80 border px-4 py-2">
                <details className="my-auto">
                    <summary className="text-slate-500 hover:cursor-pointer">
                        Details
                    </summary>
                    <Link href="#" className="text-blue-500 hover:text-blue-600 px-4">
                        https://www.baker.com
                    </Link>
                </details>

                <Link
                    href={`/products/decks/baker/${id}`}
                    className="text-sm text-slate-500 bg-slate-300 hover:text-slate-100 
                    hover:bg-slate-400 active:text-slate-50 active:bg-slate-500/80 
                    hover:cursor-pointer px-3 py-1 rounded"
                >
                    View
                </Link>
            </div>

            <div className="bg-slate-100/80">
                <div className="flex align-center justify-end px-4 py-2">
                    <span className="text-slate-500 hover:text-slate-600 hover:cursor-pointer ml-2">
                        <IoShareSocial size={24} />
                    </span>
                    <span className="text-slate-500 hover:text-slate-600 hover:cursor-pointer ml-2">
                        <SlSocialTwitter size={24} />
                    </span>
                    <span className="text-slate-500 hover:text-slate-600 hover:cursor-pointer ml-2">
                        <FaGithub size={24} />
                    </span>
                </div>
            </div>

        </div>
    );
};

export default CardBaker;
