import React, { useState } from 'react'
import { ProductsProps } from "../lib/definitions";
import Link from 'next/link'

export default function DropDownComp(products: ProductsProps[]) {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen((old) => !old);
  }

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
        <div className='relative'>
            <button
              className="bg-blue-600 m-4 px-[20px] py-[5px] rounded"
              onClick={toggle}
            >
              Menu
            </button>

            <div className={`absolute top-12 z-20 w-[140px]] h-[auto] 
              flex flex-col bg-blue-400 rounded-md ml-4 ${transClass}`}>
                
                {products.map(product =>
                  <Link
                    key={product.name}
                    className="hover:bg-blue-600 hover:text-blue-200 px-4 py-1"
                    href={`products/${product.name}`}
                    onClick={toggle}
                  >
                    {product.name}
                  </Link>
                )}

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