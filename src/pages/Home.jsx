import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://via.placeholder.com/1200x800?text=Futuristic+Cafe')" }}>
      <Motion.div
        className="text-center p-8 bg-gray-900 bg-opacity-70 rounded"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-neonBlue mb-4">Bienvenido a CyberCoffee</h1>
        <p className="mb-8 text-lg md:text-2xl">El sabor del futuro en cada taza</p>
        <Link
          to="/products"
          className="px-6 py-3 bg-neonPurple text-white rounded hover:bg-neonBlue"
        >
          Ver Productos
        </Link>
      </Motion.div>
    </div>
  );
}
