import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoShareSocial } from 'react-icons/io5';
import { SlSocialTwitter } from 'react-icons/sl';
import { FaGithub } from 'react-icons/fa6';
import { ADD_TO_CART, REMOVE_FROM_CART, useCart } from '@/app/context/cart-context';
import { DecksProps } from '@/app/lib/definitions';

const CardBaker = ({ id, deckname, price, img, stock }: DecksProps) => {
    
    const { state, dispatch } = useCart();
    
    const mapping = state.items.reduce((a,b) => a + b.price, 0)
    console.log(mapping, "mapping")

    const handleAddToCart = () => {
      dispatch({ type: ADD_TO_CART, payload: { id, deckname, price, img, stock } });
    };
  
    const handleRemoveFromCart = () => {
      dispatch({ type: REMOVE_FROM_CART, payload: { id } });
    };

    return (
        <div
            key={id}
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
                    hover:scale-90 active:rotate-y-[180deg] active:duration-300"
            />

            <div className="flex flex-col font-bold bg-slate-100/80 border">
                <div className="flex align-center justify-between text-md text-slate-600/80 mx-4 my-2 border">
                    <p>{deckname.toUpperCase()}</p>
                </div>
                <div className="flex align-center justify-between text-sm text-slate-500/80 mx-4 border">
                    <p>Price</p>
                    <p>{mapping === 0 ? price.toFixed(2) : mapping.toFixed(2)}.- CHF</p>
                </div>
                <div className="flex justify-between text-sm text-slate-500/80 mx-4 mb-2 border">
                    <p>Stock</p>
                    <p>{stock}</p>
                </div>
            </div>

            <div className="bg-slate-100/80 px-4">
                <p className="w-[200px] text-sm text-slate-500 bg-white p-2">
                    Some text about decks une petite histoire ...
                </p>
            </div>

            <div className='flex justify-between px-4 py-2 bg-slate-100/80'>
                <button type="button" onClick={handleRemoveFromCart}
                    className='text-sm text-slate-500 bg-slate-300 hover:text-slate-100 
                        hover:bg-slate-400 active:text-slate-50 active:bg-slate-500/80
                        px-4 py-1 rounded'
                >
                    Reset
                </button>
                <button type="button" onClick={handleAddToCart}
                    className='text-sm text-slate-500 bg-slate-300 hover:text-slate-100 
                        hover:bg-slate-400 active:text-slate-50 active:bg-slate-500/80
                        px-4 py-1 rounded'
                >
                    Add
                </button>
            </div>

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
