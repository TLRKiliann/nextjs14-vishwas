"use client"; // with useEffect()

import React, { useEffect } from 'react'
import ProductsProps from "../lib/definitions";
import Link from 'next/link'

export default function DropDownComp(products: ProductsProps[]) {

  const menuDropdown = () => {
    const rubriques = document.querySelectorAll('aside > ul > li > a');
    Array.prototype.forEach.call( rubriques, (rubrique) => {
      rubrique.onclick = ( e: React.MouseEvent<HTMLButtonElement> ) => {
        e.preventDefault();
        let li = rubrique.parentNode; // ul
        let openHeight = li.querySelector('ul').scrollHeight; // adjust automaticaly
        if ( li.classList.contains('active') )
        {
          li.querySelector('ul').style.height = '0px';
          li.classList.remove('active');
        }
        else {
          li.querySelector('ul').style.height = openHeight + 'px';
          li.classList.add('active');
        }
      }
    });
  }

  useEffect(() => {
    const callFn = () => {
      menuDropdown();
    }
    callFn();
    return () => console.log("menu drop-down loaded");
  }, [])

  return (
    <>
      <div className='dropdown--menu'>
        <aside>
          <ul>
            <li className='dropdown--tilte'>
              <a onClick={menuDropdown}>Products & reviews</a>

              {products.map((product) => (
                <ul key={product.id}>
                  <li><Link href={`/products/${product.id}`}>Product by id : {product.id}</Link></li>
                  <li><Link href={`/products/${product.id}/reviews`}>All reviews</Link></li>
                </ul>
              ))}

            </li>
            <li className='dropdown--tilte'>
                <a onClick={menuDropdown}>Reviews</a>
                <ul>
                    <li><Link href="#">2B</Link></li>
                    <li><Link href="#">A2</Link></li>
                </ul>
            </li>
            <li className='dropdown--tilte'>
                <a onClick={menuDropdown}>Bonus</a>
                <ul>
                    <li><Link href="#">Animation</Link></li>
                    <li><Link href="#">Game Play</Link></li>
                    <li><Link href="#">Goodies</Link></li>
                </ul>
            </li>
          </ul>
        </aside>
      </div>
    </>
  )
}