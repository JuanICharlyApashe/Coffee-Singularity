import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Products() {
  return (
    <div className="pt-20 max-w-5xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-neonPurple">Nuestros Cafés</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
