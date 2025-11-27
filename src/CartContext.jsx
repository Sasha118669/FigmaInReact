import React, {createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }){
const [cardsArr, setCardsArr] = useState([]);
const [subtotal, setSubtotal] = useState(0);

return(
<CartContext.Provider value={{ cardsArr, setCardsArr, subtotal, setSubtotal }}>
      {children}
    </CartContext.Provider>
);
}