"use client";

import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';

type CartItem = {
  id: number;
  deckname: string;
  price: number;
  img: string;
  stock: number;
  quantity: number;
}

type CartState = {
  items: CartItem[];
}

enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

type AddToCartAction = {
  type: 'ADD_TO_CART';
  payload: CartItem;
}

type RemoveFromCartAction = {
  type: 'REMOVE_FROM_CART';
  payload: { id: number, quantity: number };
}

type CartAction = AddToCartAction | RemoveFromCartAction;

export type CartDispatch = Dispatch<CartAction>;

const initialState: CartState = {
  items: [],
};

export const CartContext = createContext<{ state: CartState; dispatch: CartDispatch } | undefined>(undefined);

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {...state, items: [...state.items, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter(item => item.id === action.payload.id 
        ? {...item, id: action.payload.id, quantity: action.payload.quantity} : item) };
      //return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer<React.Reducer<CartState, CartAction>>(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = (): { state: CartState; dispatch: CartDispatch } => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé à l\'intérieur d\'un CartProvider');
  }
  return context;
};

export { CartProvider, useCart, CartActionTypes };
