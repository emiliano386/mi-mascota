import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Adopciones = () => {
  const [adopciones, setAdopciones] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');

  useEffect(() => {
    const obtenerAdopciones = async () => {
      const respuesta = await axios.get('https://mi-mascota-backend.onrender.com/api/adopciones');
      setAdopciones(respuesta.data);
    };
    obtenerAdopciones();
  }, []);

  const manejarRegistro = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await axios.post('https://mi-mascota-backend.onrender.com/api/adopciones', {
        nombre,
        descripcion,
        telefono,
      });
      setAdopciones([...adopciones, respuesta.data]);
      setMensajeExito('Adopción registrada con éxito.');
      setNombre('');
      setDescripcion('');
      setTelefono('');
    } catch (error) {
      console.error('Error al registrar adopción:', error);
      setMensajeExito('Hubo un error al registrar la adopción.');
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
        <button type="submit">Agregar Adopción</button>
      </form>
      {mensajeExito && <p>{mensajeExito}</p>}
      <div>
        {adopciones.map((adopcion) => (
          <div key={adopcion._id}>
            <h3>{adopcion.nombre}</h3>
            <p>{adopcion.descripcion}</p>
            <p>{adopcion.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopciones;
