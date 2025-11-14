import React, {createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }){
const [cardsArr, setCardsArr] = useState([]);

return(
<CartContext.Provider value={{ cardsArr, setCardsArr }}>
      {children}
    </CartContext.Provider>
);
}