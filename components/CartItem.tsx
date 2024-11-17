// components/CartItem.tsx
'use client';

import { useCart } from '/Users/phoodit/glasses-store/context/CardContext';

type CartItemProps = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function CartItem({ id, name, price, quantity }: CartItemProps) {
  const { removeFromCart } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h4 className="text-lg">{name}</h4>
        <p className="text-gray-500">${price.toFixed(2)} x {quantity}</p>
      </div>
      <button
        onClick={() => removeFromCart(id)}
        className="bg-red-500 text-white py-1 px-2 rounded"
      >
        Remove
      </button>
    </div>
  );
}
