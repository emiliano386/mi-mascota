import React, { useState, useEffect } from 'react';

const Adopciones = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [adopcionesRecientes, setAdopcionesRecientes] = useState([]);

  // Cargar adopciones desde localStorage al inicio
  useEffect(() => {
    const datosAdopciones = JSON.parse(localStorage.getItem('adopciones')) || [];
    setAdopcionesRecientes(datosAdopciones);
  }, []);

  const manejarEnvio = (e) => {
    e.preventDefault();

    const nuevaAdopcion = { nombre, descripcion, telefono };

    // Actualizar el localStorage
    const datosAdopciones = JSON.parse(localStorage.getItem('adopciones')) || [];
    datosAdopciones.push(nuevaAdopcion);
    localStorage.setItem('adopciones', JSON.stringify(datosAdopciones));

    // Limpiar los campos
    setNombre('');
    setDescripcion('');
    setTelefono('');
    setAdopcionesRecientes(datosAdopciones); // Actualizar la lista de adopciones recientes
  };

  return (
    <div>
      <h1>Adopciones</h1>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Nombre de la mascota:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Teléfono:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />
        </div>
        <button type="submit">Agregar Adopción</button>
      </form>

      <h2>Adopciones Recientes</h2>
      <ul>
        {adopcionesRecientes.map((adopcion, index) => (
          <li key={index}>
            <strong>Nombre:</strong> {adopcion.nombre} <br />
            <strong>Descripción:</strong> {adopcion.descripcion} <br />
            <strong>Teléfono:</strong> {adopcion.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adopciones;
