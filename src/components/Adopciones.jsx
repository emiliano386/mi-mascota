import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Adopciones() {
  const [adopciones, setAdopciones] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Cargar las adopciones desde el backend
  useEffect(() => {
    axios.get('/api/adopciones')
      .then(response => setAdopciones(response.data))
      .catch(error => console.error('Error al obtener las adopciones:', error));
  }, []);

  // Manejar el envío del formulario
  const onFormSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/adopciones', { nombre, descripcion, telefono })
      .then(() => {
        setNombre('');
        setDescripcion('');
        setTelefono('');
        setMensaje('¡La adopción se cargó correctamente!');
        
        // Refresca la lista de adopciones
        axios.get('/api/adopciones')
          .then(response => setAdopciones(response.data))
          .catch(error => console.error('Error al obtener las adopciones:', error));
        
        // Restablecer el mensaje después de un breve período
        setTimeout(() => setMensaje(''), 3000); // Ajusta el tiempo según sea necesario
      })
      .catch(error => {
        console.error('Error al agregar la adopción:', error);
        setMensaje('Error al agregar la adopción.');
        setTimeout(() => setMensaje(''), 3000); // Ajusta el tiempo según sea necesario
      });
  };

  // Filtrar las adopciones para mostrar solo las que tienen información relevante
  const filtradas = adopciones.filter(adopcion => adopcion.nombre || adopcion.descripcion || adopcion.telefono);

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
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
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
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
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
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtradas.map(adopcion => (
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
