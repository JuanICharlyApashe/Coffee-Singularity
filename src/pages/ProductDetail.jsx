import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { motion as Motion } from 'framer-motion';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) {
    return <p className="pt-20 text-center">Producto no encontrado</p>;
  }

  return (
    <div className="pt-20 max-w-3xl mx-auto p-4">
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 p-6 rounded shadow-lg flex flex-col md:flex-row gap-6"
      >
        <img src={product.image} alt={product.name} className="rounded w-full md:w-1/2" />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-neonPurple">{product.name}</h2>
          <p>{product.description}</p>
          <p className="text-neonBlue text-xl">{product.price}</p>
        </div>
      </Motion.div>
    </div>
  );
}
