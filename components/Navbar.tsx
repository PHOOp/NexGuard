'use client';

import Link from 'next/link';
import { useCart } from '../context/CardContext';

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="mb-16">
    <nav className="navbar fixed top-0 w-full bg-blue-500 text-white shadow-md z-0">
      <div className="container mx-auto flex justify-between items-center mb-8">
        <Link href="/" className="text-2xl font-bold">
          Home
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
    </div>
  );
}
