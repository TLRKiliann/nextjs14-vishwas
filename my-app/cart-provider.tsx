import { useReducer } from "react";
import { cartReducer } from "./app/context/cart-context";
import { CartContext } from "./app/context/cart-context";
import { CartProps } from "./app/lib/definitions";

const initialState = {
  items: []
}

export const CartProvider = ({ children }: {children: React.ReactNode}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: CartProps) => {
    const updatedCart = [...state.items, product];

    dispatch({
      type: "Add",
      payload: {
        items: updatedCart,
      },
    });
  };

  const removeFromCart = (id: number) => {
    const updatedCart = state.items.filter(
      (currentProduct: CartProps) => currentProduct.id !== id
    );

    dispatch({
      type: "Remove",
      payload: {
        items: updatedCart,
      },
    });
  };

  const value = {
    items: state.items,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}