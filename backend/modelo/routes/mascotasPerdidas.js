import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MascotasPerdidas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMascotas = async () => {
      try {
        const response = await axios.get('https://mi-mascota-backend.onrender.com/mascotas-perdidas');
        setMascotas(response.data);
      } catch (err) {
        setError('Error al cargar las mascotas perdidas.');
      }
    };
    fetchMascotas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mi-mascota-backend.onrender.com/mascotas-perdidas', { nombre, descripcion, telefono });
      // Volver a obtener la lista de mascotas después de agregar una nueva
      fetchMascotas();
      // Limpiar los campos
      setNombre('');
      setDescripcion('');
      setTelefono('');
    } catch (err) {
      setError('Error al agregar la mascota perdida.');
    }
  };

  return (
    <div>
      <h2>Reportar Mascota Perdida</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Nombre"
          required
        />
        <input
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          placeholder="Descripción"
          required
        />
        <input
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          placeholder="Teléfono"
          required
        />
        <button type="submit">Agregar</button>
      </form>
      <h2>Lista de Mascotas Perdidas</h2>
      <ul>
        {mascotas.map((mascota) => (
          <li key={mascota._id}>{mascota.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default MascotasPerdidas;
