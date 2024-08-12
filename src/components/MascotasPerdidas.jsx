// src/components/MascotasPerdidas.jsx
import React from 'react';

const MascotasPerdidas = ({ mascotasPerdidas }) => {
  return (
    <div>
      <h2>Mascotas Perdidas</h2>
      {mascotasPerdidas.length === 0 ? (
        <p>No hay mascotas perdidas reportadas.</p>
      ) : (
        mascotasPerdidas.map((mascota, index) => (
          <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
            <h3>{mascota.nombre}</h3>
            <p>{mascota.descripcion}</p>
            {mascota.imagen && <img src={mascota.imagen} alt={mascota.nombre} style={{ maxWidth: '100px' }} />}
          </div>
        ))
      )}
    </div>
  );
};

export default MascotasPerdidas;

