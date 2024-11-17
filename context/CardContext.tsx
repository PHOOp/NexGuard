// /context/CartContext.tsx
'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the structure of a cart item
type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

// Define the shape of the cart context
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
};

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component to wrap the app
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (existingItem) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      } else {
        return [...prevCart, item];
      }
    });
  };

  // Remove an item from the cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
