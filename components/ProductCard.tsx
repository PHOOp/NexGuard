// components/ProductCard.tsx
'use client';

import { useCart } from '/Users/phoodit/glasses-store/context/CardContext';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4">
      <img src={product.image} alt={product.name} className="w-full h-auto object-cover" />
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white mt-4 py-2 px-4 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
