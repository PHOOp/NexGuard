// app/products/page.tsx
import ProductCard from '../../components/ProductCard';
import {list_product} from './product_list';
const products = list_product;

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
