import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Adopciones() {
  const [adopciones, setAdopciones] = useState([]);
  const [nuevaAdopcion, setNuevaAdopcion] = useState({ nombre: '', descripcion: '', telefono: '' });
  const [mensaje, setMensaje] = useState('');
  const [adopcionesRecientes, setAdopcionesRecientes] = useState([]); // Estado para adopciones recientes

  // Cargar las adopciones desde el backend
  useEffect(() => {
    axios.get('/api/adopciones')
      .then(response => setAdopciones(response.data))
      .catch(error => console.error('Error al obtener las adopciones:', error));
  }, []);

  // Manejar el envío del formulario
  const onFormSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/adopciones', nuevaAdopcion)
      .then(() => {
        setMensaje('¡La adopción se cargó correctamente!');

        // Agregar la nueva adopción a la lista de adopciones recientes
        setAdopcionesRecientes([...adopcionesRecientes, nuevaAdopcion]);

        // Resetear el formulario
        setNuevaAdopcion({ nombre: '', descripcion: '', telefono: '' });

        // Refresca la lista de adopciones
        return axios.get('/api/adopciones');
      })
      .then(response => setAdopciones(response.data))
      .catch(error => {
        console.error('Error al agregar la adopción:', error);
        setMensaje('Error al agregar la adopción.');
      })
      .finally(() => {
        // Restablecer el mensaje después de un breve período
        setTimeout(() => setMensaje(''), 3000);
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Adopciones</h1>
      <form onSubmit={onFormSubmit} className="space-y-4 mb-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nuevaAdopcion.nombre}
            onChange={(e) => setNuevaAdopcion({ ...nuevaAdopcion, nombre: e.target.value })}
            placeholder="Nombre"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={nuevaAdopcion.descripcion}
            onChange={(e) => setNuevaAdopcion({ ...nuevaAdopcion, descripcion: e.target.value })}
            placeholder="Descripción"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="text"
            id="telefono"
            name="telefono"
            value={nuevaAdopcion.telefono}
            onChange={(e) => setNuevaAdopcion({ ...nuevaAdopcion, telefono: e.target.value })}
            placeholder="Teléfono"
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-blue-600"
        >
          Agregar Adopción
        </button>
      </form>
      {mensaje && (
        <div className="bg-green-100 text-green-800 border border-green-400 rounded-lg p-4 mb-6">
          {mensaje}
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-4">Adopciones Recientes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {adopcionesRecientes.map((adopcion, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{adopcion.nombre}</h2>
            <p className="text-gray-700 mb-4">{adopcion.descripcion}</p>
            <p className="text-gray-700">Teléfono: {adopcion.telefono}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
        {adopciones.map(adopcion => (
          <div key={adopcion._id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            {adopcion.nombre && <h2 className="text-xl font-semibold mb-2">{adopcion.nombre}</h2>}
            {adopcion.descripcion && <p className="text-gray-700 mb-4">{adopcion.descripcion}</p>}
            {adopcion.telefono && <p className="text-gray-700">Teléfono: {adopcion.telefono}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Adopciones;
