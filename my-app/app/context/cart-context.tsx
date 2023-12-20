"use client";

import React, { createContext, useReducer, useContext, ReactNode, Dispatch } from 'react';

// Définition des types
interface CartItem {
  id: number;
  deckname: string;
  price: number;
  img: string;
  stock: number;
}

interface CartState {
  items: CartItem[];
}

enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
}

interface AddToCartAction {
  type: 'ADD_TO_CART';
  payload: CartItem;
}

interface RemoveFromCartAction {
  type: 'REMOVE_FROM_CART';
  payload: { id: number };
}

type CartAction = AddToCartAction | RemoveFromCartAction;

export type CartDispatch = Dispatch<CartAction>;

// Initial state du panier
const initialState: CartState = {
  items: [],
};

// Création du contexte
export const CartContext = createContext<{ state: CartState; dispatch: CartDispatch } | undefined>(undefined);

// Action types pour les opérations du panier
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Reducer pour gérer les actions du panier
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
    default:
      return state;
  }
};

// Fournisseur de contexte pour envelopper votre application
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

// Utilitaire de crochet pour accéder au contexte
const useCart = (): { state: CartState; dispatch: CartDispatch } => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart doit être utilisé à l\'intérieur d\'un CartProvider');
  }
  return context;
};

export { CartProvider, useCart, CartActionTypes };
