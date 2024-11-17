// app/cart/page.tsx
'use client';

import { useCart } from '/Users/phoodit/glasses-store/context/CardContext';
import CartItem from '../../components/CartItem';
import CartSummary from '../../components/CartSummary';

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <CartSummary />
        </div>
      )}
    </div>
  );
}
