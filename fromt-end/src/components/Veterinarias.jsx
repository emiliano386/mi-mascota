// src/components/Veterinarias.jsx
import React from 'react';

const Veterinarias = () => {
  // Lista de veterinarias
  const veterinarias = [
    {
      nombre: 'Veterinaria del Parque',
      direccion: 'Av. del Libertador 8501, CABA',
      telefono: '011 4805-0921'
    },
    {
      nombre: 'Veterinaria Cañitas',
      direccion: 'Baez 273, CABA',
      telefono: '011 4800-5722'
    },
    {
      nombre: 'Veterinaria Pacheco',
      direccion: 'Av. Pacheco de Melo 2327, CABA',
      telefono: '011 4803-9627'
    },
    {
      nombre: 'Veterinaria de la Ciudad',
      direccion: 'Av. Juan B. Justo 1599, CABA',
      telefono: '011 4867-4411'
    },
    {
      nombre: 'Clinica Veterinaria Almagro',
      direccion: 'Av. Corrientes 3950, CABA',
      telefono: '011 4862-2667'
    },
  ];

  return (
    <section style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Veterinarias Abiertas 24hs</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {veterinarias.map((veterinaria, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <h3 style={{ fontWeight: 'bold' }}>{veterinaria.nombre}</h3>
            <p><strong>Dirección:</strong> {veterinaria.direccion}</p>
            <p><strong>Teléfono:</strong> {veterinaria.telefono}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Veterinarias;
