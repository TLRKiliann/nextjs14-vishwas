import { createContext } from "react";

/*
type ActionProps = {
    type: "Add" | "Remove" | undefined;
    payload: {
        items: []//{id: number, deckname: string, price: number}
    };
}
type State = {
    state: "Add"
}
*/

export const CartContext = createContext({
    items: [],
});

export const cartReducer = (state: any, action: any) => {
    const { type, payload } = action;
  
    switch (type) {
        case "Add":
            return {...state, items: payload?.items};
    
        case "Remove":
            return {...state, items: payload?.items};
    
        default:
            throw new Error("No case for that type");
    }
};

