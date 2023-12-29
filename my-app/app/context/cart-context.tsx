"use client";

import { createContext, ReactNode, useContext } from "react";
import { useLocalStorage } from "@/app/hooks/localstorage";
import { CartItem } from "@/app/lib/definitions";

type ShoppingCartProviderProps = {
  children: ReactNode;
}

type ShoppingCartContextProps = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number, deckname: string, price: number, img: string, stock: number) => void;
  decreaseCartQuantity: (id: number, deckname: string, price: number, img: string, stock: number) => void;
  removeFromCart: (id: number) => void;

  cartQuantity: number;
  cartItems: CartItem[];
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  
  const [cartItems, setCartItems] = useLocalStorage<Array<CartItem>>(
    "Shopping-Cart", []);

  const cartQuantity = cartItems.reduce(
    (quantity: number, item: CartItem) => item.quantity + quantity, 0);

  const getItemQuantity = (id: number) => {
    return cartItems.find((item: CartItem) => item.id === id)?.quantity || 0;
  };

  const increaseCartQuantity = (id: number, deckname: string, price: number, img: string, stock: number) => {
    setCartItems((currentItems: CartItem[]) => {
      if (currentItems.find((item: CartItem) => item.id === id) == null) {
        return [...currentItems, { id, deckname, price, img, stock,quantity: 1 }];
      } else {
        return currentItems.map((item: CartItem) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        })
      }
    });
  };

  const decreaseCartQuantity = (id: number) => {
    setCartItems((currentItems) => {
      if (currentItems.find((item: CartItem) => item.id === id)?.quantity === 1) {
        return currentItems.filter((item: CartItem) => item.id !== id);
      } else {
        return currentItems.map((item: CartItem) => {
          if (item.id === id) {
            return {...item, quantity: item.quantity -1};
          } else {
            return item;
          }
        })
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((currentItems: CartItem[]) => {
      return currentItems.filter((item: CartItem) => item.id !== id)
    })
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartQuantity
      }}
    >
      { children }
    </ShoppingCartContext.Provider>
  );
};
