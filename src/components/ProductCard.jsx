import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
    <Motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 p-4 rounded shadow-lg text-center"
    >
      <Link to={`/products/${product.id}`}
        className="space-y-2 block"
      >
        <img
          src={product.image}
          alt={product.name}
          className="mx-auto rounded"
        />
        <h3 className="text-lg font-semibold text-neonPurple">
          {product.name}
        </h3>
      </Link>
    </Motion.div>
  );
}
