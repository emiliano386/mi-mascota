import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Adopciones = () => {
  const [adopciones, setAdopciones] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState(''); 
  const [error, setError] = useState('');

  const fetchAdopciones = async () => {
    try {
      const response = await axios.get('https://mi-mascota-backend.onrender.com/adopciones');
      setAdopciones(response.data);
    } catch (err) {
      setError('Error al cargar las adopciones.');
    }
  };

  useEffect(() => {
    fetchAdopciones();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://mi-mascota-backend.onrender.com/adopciones', { nombre, descripcion, telefono });
      // Volver a obtener la lista de adopciones después de agregar una nueva
      fetchAdopciones(); // Esto ahora funcionará
      // Limpiar los campos
      setNombre('');
      setDescripcion('');
      setTelefono('');
    } catch (err) {
      setError('Error al agregar la adopción.');
    }
  };

  return (
    <div>
      <h2>Crear Adopción</h2>
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
      <h2>Lista de Adopciones</h2>
      <ul>
        {adopciones.map((adopcion) => (
          <li key={adopcion._id}>{adopcion.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Adopciones;
