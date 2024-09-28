import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MascotasPerdidas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  
  useEffect(() => {
    const obtenerMascotas = async () => {
      const respuesta = await axios.get('https://mi-mascota-backend.onrender.com/api/mascotasPerdidas');
      setMascotas(respuesta.data);
    };
    obtenerMascotas();
  }, []);

  const manejarRegistro = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await axios.post('https://mi-mascota-backend.onrender.com/api/mascotasPerdidas', {
        nombre,
        descripcion,
        telefono,
      });
      setMascotas([...mascotas, respuesta.data]);
      setMensajeExito('Mascota registrada con éxito.');
      setNombre('');
      setDescripcion('');
      setTelefono('');
    } catch (error) {
      console.error('Error al registrar mascota:', error);
      setMensajeExito('Hubo un error al registrar la mascota.');
    }
  };

  return (
    <div>
      <form onSubmit={manejarRegistro}>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          required
        />
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          required
        />
        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Teléfono"
          required
        />
        <button type="submit">Agregar Mascota Perdida</button>
      </form>
      {mensajeExito && <p>{mensajeExito}</p>}
      <div>
        {mascotas.map((mascota) => (
          <div key={mascota._id}>
            <h3>{mascota.nombre}</h3>
            <p>{mascota.descripcion}</p>
            <p>{mascota.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MascotasPerdidas;
