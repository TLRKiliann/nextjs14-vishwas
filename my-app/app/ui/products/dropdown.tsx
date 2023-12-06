"use client";

import React, { useState } from 'react';
import { ProductsProps } from "@/app/lib/definitions";
import Link from 'next/link';

export default function DropDownComp(products: ProductsProps) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  }

  const transClass = isOpen ? "flex" : "hidden";

    return (
      <>
        <div className='relative w-full m-auto'>
            <button
              className="font-bold bg-blue-600 px-4 py-2 
                hover:bg-blue-700 active:bg-blue-800 rounded-lg"
              onClick={toggle}
            >
              Menu
            </button>
            <div className={`absolute top-12 z-20 w-[140px]] h-[auto] 
              flex flex-col bg-blue-400 mr-2 ${transClass}`}>
            
              {products.map((prod: ProductsProps) => (
                <Link
                  key={prod.id}
                  className="hover:bg-blue-600 hover:text-blue-200 px-4 py-1"
                  href={`/products/${prod.id}`}
                  onClick={toggle}
                  >
                  {prod.name}
                </Link>

              ))}   

            </div>
        </div>
        
        {isOpen === true ? (
          <div className="fixed top-0 right-0 bottom-0 left-0 z-10 bg-black/40"
            onClick={toggle}>
          </div>
        ) : null
        }
      </>
    )
}