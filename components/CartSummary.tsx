// components/CartSummary.tsx
'use client';

import { useCart } from '/Users/phoodit/glasses-store/context/CardContext';
import Link from 'next/link';

export default function CartSummary() {
  const { cart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="mt-4">
      <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
      <Link href="/checkout">
        <button className="bg-green-500 text-white py-2 px-4 rounded mt-4">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}
