// src/components/Refugios.jsx
import React from 'react';

// Lista de refugios
const refugios = [
    {
        nombre: 'Refugio de Animales Tabares',
        direccion: 'Av. La Plata 3131, CABA',
        telefono: '011 4952-8201'
      },
      {
        nombre: 'Refugio Animalista de Buenos Aires (RABA)',
        direccion: 'Av. Rivadavia 4100, CABA',
        telefono: '011 4931-6360'
      },
      {
        nombre: 'Refugio Zoo de Buenos Aires',
        direccion: 'Av. Sarmiento 2704, CABA',
        telefono: '011 5277-2914'
      },
      {
        nombre: 'Centro de Rescate Animal "Rescatados"',
        direccion: 'Av. Jujuy 5900, CABA',
        telefono: '011 4912-6448'
      },
      {
        nombre: 'Fundación S.O.S. Animales',
        direccion: 'Av. Cabildo 2225, CABA',
        telefono: '011 4782-4579'
      },
      {
        nombre: 'El Refugio de Gato',
        direccion: 'Av. Santa Fe 1234, CABA',
        telefono: '011 4899-3402'
      },
      // Refugios en Gran Buenos Aires
      {
        nombre: 'Refugio Animal Los Bosques',
        direccion: 'Av. San Martín 1550, San Martín',
        telefono: '011 4757-2061'
      },
      {
        nombre: 'Refugio Animal de Pilar',
        direccion: 'Ruta 8 Km 52, Pilar',
        telefono: '0230 442-5800'
      },
      {
        nombre: 'Rescate Animal de Tigre',
        direccion: 'Av. Cazón 125, Tigre',
        telefono: '011 4749-6102'
      },
      {
        nombre: 'Fundación Protectora de Animales de La Matanza',
        direccion: 'Av. Juan Manuel de Rosas 3955, La Matanza',
        telefono: '011 2071-4700'
      },
      {
        nombre: 'Centro de Rescate Animal de Morón',
        direccion: 'Av. Rivadavia 12000, Morón',
        telefono: '011 4628-5645'
      },
      {
        nombre: 'Refugio Animalista de Lomas',
        direccion: 'Av. Hipólito Yrigoyen 9500, Lomas de Zamora',
        telefono: '011 4244-2281'
      }
  
];

const Refugios = () => {
  return (
    <section style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
      <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Refugios de Mascotas en Buenos Aires</h2>
      <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
        {refugios.map((refugio, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <h3 style={{ fontWeight: 'bold' }}>{refugio.nombre}</h3>
            <p><strong>Dirección:</strong> {refugio.direccion}</p>
            <p><strong>Teléfono:</strong> {refugio.telefono}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Refugios;





