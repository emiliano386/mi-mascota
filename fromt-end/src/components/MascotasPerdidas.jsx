import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MascotasPerdidas() {
  const [mascotas, setMascotas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');

  // Cargar las mascotas perdidas desde el backend
  useEffect(() => {
    axios.get('https://mi-mascota-backend.onrender.com/api/mascotas-perdidas')
      .then(response => setMascotas(response.data))
      .catch(error => console.error('Error al obtener las mascotas perdidas:', error));
  }, []);

  // Manejar el envío del formulario
  const onFormSubmit = async (e) => {
    e.preventDefault();

    const nuevaMascota = {
      nombre,
      descripcion,
      telefono,
    };

    try {
      await axios.post('https://mi-mascota-backend.onrender.com/api/mascotas-perdidas', nuevaMascota);
      setNombre('');
      setDescripcion('');
      setTelefono('');
      setMensaje('¡La mascota perdida se reportó correctamente!');
      
      // Refresca la lista de mascotas perdidas
      const response = await axios.get('https://mi-mascota-backend.onrender.com/api/mascotas-perdidas');
      setMascotas(response.data);
      
      // Restablecer el mensaje después de un breve período
      setTimeout(() => setMensaje(''), 3000);
    } catch (error) {
      console.error('Error al reportar la mascota perdida:', error);
      setMensaje('Error al reportar la mascota perdida.');
      setTimeout(() => setMensaje(''), 3000);
    }
  };

  // Filtrar las mascotas para mostrar solo las que tienen información relevante
  const filtradas = mascotas.filter(mascota => mascota.nombre || mascota.descripcion || mascota.telefono);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Mascotas Perdidas</h1>
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
          Reportar Mascota Perdida
        </button>
      </form>
      {mensaje && (
        <div className="bg-green-100 text-green-800 border border-green-400 rounded-lg p-4 mb-6">
          {mensaje}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtradas.map(mascota => (
          <div key={mascota._id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            {mascota.nombre && <h2 className="text-xl font-semibold mb-2">{mascota.nombre}</h2>}
            {mascota.descripcion && <p className="text-gray-700 mb-4">{mascota.descripcion}</p>}
            {mascota.telefono && <p className="text-gray-700">Teléfono: {mascota.telefono}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MascotasPerdidas;
