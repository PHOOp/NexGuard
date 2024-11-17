'use client';

import Link from 'next/link';
import { useCart } from '/Users/phoodit/glasses-store/context/CardContext';

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-blue-500 text-white pt-4 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Glasses Store
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/products" className="hover:underline">
            Products
          </Link>
          <Link href="/cart" className="hover:underline">
            Cart ({cartCount})
          </Link>
        </div>
      </div>
    </nav>
  );
}
