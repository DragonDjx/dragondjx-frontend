import { createContext, useCallback, useEffect, useState } from "react";

interface CartProvider {
  children: React.ReactNode
};

interface Cart {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface CartInterface {
  cart: Array<Cart>,
  addToCart: (cart: Cart) => void;
  removeFromCart: (cart: Cart) => void;
};


export const CartContext = createContext({} as CartInterface);

export const CartProvider = ({children}: CartProvider) => {

  const [cart, setCart] = useState([] as Cart[]);

  const addToCart = useCallback((newItem: Cart) => {
    let isAlreadyInCart = cart.find(x => x.id === newItem.id);

    if(isAlreadyInCart) return;

    let newCart: Cart[] = [...cart, newItem];
    setCart(newCart);
  }, [cart]);

  const removeFromCart = useCallback((item: Cart) => {
    const filteredCart = cart.filter(x => x.id !== item.id);
    setCart(filteredCart);
  }, [cart]);

  return (

    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart
    }}>

      {children}
    </CartContext.Provider>
  )
}