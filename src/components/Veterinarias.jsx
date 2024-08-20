// src/components/Veterinarias.jsx
import React from 'react';

const Veterinarias = ({ veterinarias }) => {
  return (
    <section className="bg-white p-5 mb-5">
      <h2 className="text-xl font-bold mb-4">Veterinarias Abiertas 24hs</h2>
      <ul className="list-disc pl-5">
        {veterinarias.map((veterinaria) => (
          <li key={veterinaria._id} className="mb-4">
            <h3 className="font-semibold">{veterinaria.nombre}</h3>
            <p><strong>Dirección:</strong> {veterinaria.direccion}</p>
            <p><strong>Teléfono:</strong> {veterinaria.telefono}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Veterinarias;
