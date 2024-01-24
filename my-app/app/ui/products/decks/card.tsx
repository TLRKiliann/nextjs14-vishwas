"use client";

import type { ProductsProps } from '@/app/lib/definitions';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useShoppingCart } from '@/app/context/cart-context';
import { formatCurrency } from "@/app/utils/formatCurrency";
import { useFormState, useFormStatus } from 'react-dom';
import { queryDecksCart } from '@/app/lib/actions';
import RemoveAllByIdDeck from './btn-remove-allByIdDeck';
import { IoShareSocial } from 'react-icons/io5';
import { SlSocialTwitter } from 'react-icons/sl';
import { FaGithub } from 'react-icons/fa6';

const Card = ({ id, name, price, img, stock }: ProductsProps) => {

    const { pending } = useFormStatus();
    const [ code, formAction ] = useFormState(queryDecksCart, undefined)

    const router = useRouter();

    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity
    } = useShoppingCart();

    const quantity: number = getItemQuantity(id);

    const cutword = name.split(" ");
    const deckPath = cutword[0];

    const handleAddToCart = (id: number, name: string, price: number, img: string, stock: number): void => {
        increaseCartQuantity(id, name, price, img, stock);
    };
  
    const handleRemoveFromCart = (id: number, name: string, price: number, img: string, stock: number): void => {
        decreaseCartQuantity(id, name, price, img, stock);
    };

    const handleImg = (id: number): void => {
        router.push(`/products/decks/${deckPath}/${id}`);
    };

    return (
        <div key={id}
            className="flex flex-col sm:w-[200px] md:w-[180px] lg:w-[200px] 2xl:w-[300px] h-full bg-white
            text-slate-600 shadow-mdoutviolet dark:shadow-lg transform transition hover:scale-[1.025] 
            hover:shadow-bigoutviolet dark:hover:shadow-xl translate-y-0 animate-up-start rounded-xl"
        >
            <span onClick={() => handleImg(id)}>
                <Image
                    src={img}
                    width={200}
                    height={200}
                    alt="img deck"
                    className="w-full h-auto m-auto transform duration-300 ease-in-out cursor-pointer 
                        rounded-tl-xl rounded-tr-xl object-cover 
                        hover:opacity-70 hover:scale-90 active:animate-decks-rotation"
                />
            </span>

            <div className="w-full h-full flex flex-col font-bold dark:bg-slate-100 rounded-bl-xl rounded-br-xl">
                <div className="flex items-center justify-between text-md text-slate-600/80 mx-4 
                    my-2">
                    <h3>{name.toUpperCase()}</h3>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500/80 mx-4">
                    <p>Price</p>
                    <p>{formatCurrency(price)}.- CHF</p>
                </div>
                <div className="flex items-center justify-center text-sm text-slate-500/80 mx-4 mb-2">

                    {stock - quantity === 0 ? (
                            <p className='warning-stock'>No more in stock</p>
                        ) : (
                            <div className='flex items-center justify-between w-full'>
                                <p>Stock:</p> 
                                <p>{stock - quantity}pcs</p>
                            </div>
                        )
                    }    

                </div>
                
                <div className='flex justify-center items-center pb-2'>
                    <span className={`text-md font-bold ${quantity === 0 ? "text-slate-500/80" : "text-red-500/80" }`}>
                        {quantity}&nbsp;
                    </span>
                    <p className='text-md font-normal text-slate-500/80'>
                        in cart
                    </p>
                </div>
            


                <div className="bg-slate-100/80 px-4">
                    <p className="w-full text-sm text-justify text-slate-500 bg-white p-2">
                        Make sure that it will be a good experience for you !
                    </p>
                </div>

                <form action={formAction} className='w-full bg-slate-100/80 px-4 py-2 pt-4'>
                    
                    <input type="number" id="id" name="id" value={id} hidden readOnly />
                    <input type="text" id="name" name="name" value={name} hidden readOnly />
                    <input type="number" id="price" name="price" value={price} hidden readOnly />
                    <input type="number" id="count" name="count" value={quantity} hidden readOnly />
                    <input type="number" id="stock" name="stock" value={stock} hidden readOnly />
                    <input type="text" id="img" name="img" value={img} hidden readOnly />
                    
                    <div className='flex items-center justify-between'>

                        <button type="submit" id="submit" name="submit" value="decrease" 
                                onClick={() => handleRemoveFromCart(id, name, price, img, stock)}
                                disabled={pending}
                                className='button-card'
                            >
                                {pending ? "Pending..." : "Sub"}
                            </button>
                            {stock - quantity > 0 ? (
                                <button type="submit" id="submit" name="submit" value="order" 
                                    onClick={() => handleAddToCart(id, name, price, img, stock)}
                                    disabled={pending}
                                    className='button-card'
                                >
                                    {pending ? "Pending..." : "Add"}
                                </button>
                                ): null
                            }
                    </div>

                    {(code?.message === "Inserted to cart !") && (quantity !== 0) ? (
                        <p className='message-cart-green mt-2'>{code.message}</p>
                    ) : (code?.message === "Deleted from cart") && (quantity !== 0) ? (
                        <p className='message-cart mt-2'>{code.message}</p>
                    ) : null }
                </form>
    
                <RemoveAllByIdDeck id={id} />

                <div className="flex align-center justify-end text-sm bg-slate-100/80 px-4 py-2 pb-3">
                    <button className='button-view'>
                        <Link
                            href={`/products/decks/${deckPath}/${id}`}
                        >
                            View
                        </Link>
                    </button>
                </div>

                <div className="bg-slate-100/80 rounded-bl-xl rounded-br-xl">
                    <div className="flex align-center justify-end px-4 py-2">
                        <span className="text-slate-500 hover:text-slate-600 cursor-pointer ml-2">
                            <IoShareSocial size={24} />
                        </span>
                        <span className="text-slate-500 hover:text-slate-600 cursor-pointer ml-2">
                            <SlSocialTwitter size={24} />
                        </span>
                        <span className="text-slate-500 hover:text-slate-600 cursor-pointer ml-2">
                            <FaGithub size={24} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
