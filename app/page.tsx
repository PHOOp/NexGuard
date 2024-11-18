// app/page.tsx
'use client';

import ProductCard from '../components/ProductCard';
import { list_product } from './products/product_list';
const products = list_product;

export default function HomePage() {

  return (
    <div className="z-0">
      <h1 className="text-2xl font-bold">Our products</h1>
      <p className="mt-4">Find your perfect pair of glasses!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {products.map((products) => (
        <ProductCard key={products.id} product={products} />
      ))}
    </div>
    </div>
    
  );
}
