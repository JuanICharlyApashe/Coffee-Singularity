import { Link, NavLink } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';

export default function Navbar() {
  return (
    <Motion.nav
      className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-md z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-neonCyan text-xl font-bold">CyberCoffee</Link>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-neonBlue ${isActive ? 'text-neonPurple' : ''}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `hover:text-neonBlue ${isActive ? 'text-neonPurple' : ''}`
            }
          >
            Productos
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              `hover:text-neonBlue ${isActive ? 'text-neonPurple' : ''}`
            }
          >
            Registro
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-neonBlue ${isActive ? 'text-neonPurple' : ''}`
            }
          >
            Contacto
          </NavLink>
        </div>
      </div>
    </Motion.nav>
  );
}
