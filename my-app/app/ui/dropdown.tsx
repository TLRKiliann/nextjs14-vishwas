"use client";

import React from 'react'
import { ProductsProps } from "../lib/definitions";
import Link from 'next/link'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";

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
  menuDropdown;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
        >
          Open Menu
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={products}>
        {(product) => (
          <DropdownItem
            key={product.id}
            color={product.name === "delete" ? "danger" : "default"}
            className={product.name === "delete" ? "text-danger" : ""}
          >
            <Link href={`/products/${product.id}`}>Product by id : {product.id}</Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}
