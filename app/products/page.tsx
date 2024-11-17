// app/products/page.tsx
import ProductCard from '../../components/ProductCard';

const products = [
  { id: 1, name: 'Classic Glasses', price: 99,quantity: 1, image: '/images/glasses1.jpg' },
  { id: 2, name: 'Modern Glasses', price: 129,quantity: 1, image: '/images/glasses2.jpg' },
];

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
