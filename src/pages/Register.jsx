import { useState } from 'react';
import { motion as Motion } from 'framer-motion';

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20 max-w-md mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-neonPurple">Registro</h2>
      {submitted ? (
        <Motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-neonBlue"
        >
          Registro exitoso
        </Motion.p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          <input
            type="email"
            placeholder="Correo"
            required
            className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          />
          <button className="w-full py-2 bg-neonPurple rounded hover:bg-neonBlue">Registrarse</button>
        </form>
      )}
    </div>
  );
}
