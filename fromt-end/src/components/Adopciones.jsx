import React, { useEffect, useState } from 'react';

const Adopciones = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [adopcionesRecientes, setAdopcionesRecientes] = useState([]);

  // Cargar adopciones del localStorage al iniciar
  useEffect(() => {
    const storedAdopciones = JSON.parse(localStorage.getItem('adopciones')) || [];
    setAdopcionesRecientes(storedAdopciones);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear un objeto de adopción
    const nuevaAdopcion = { nombre, descripcion, telefono };

    // Actualizar el estado de adopciones recientes
    const nuevasAdopciones = [...adopcionesRecientes, nuevaAdopcion];
    setAdopcionesRecientes(nuevasAdopciones);

    // Guardar en localStorage
    localStorage.setItem('adopciones', JSON.stringify(nuevasAdopciones));

    // Limpiar los campos del formulario
    setNombre('');
    setDescripcion('');
    setTelefono('');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Adopciones</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="border p-1"
          />
        </div>
        <div className="mb-2">
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            className="border p-1"
          />
        </div>
        <div className="mb-2">
          <label>Teléfono:</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            className="border p-1"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2">
          Agregar Adopción
        </button>
      </form>

      <h3 className="text-lg font-bold">Adopciones Recientes:</h3>
      <ul>
        {adopcionesRecientes.map((adopcion, index) => (
          <li key={index} className="border-b py-2">
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
