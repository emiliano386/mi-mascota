import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MascotasPerdidas() {
  const [mascotas, setMascotas] = useState([]);
  const [nuevaMascota, setNuevaMascota] = useState({ nombre: '', descripcion: '', telefono: '' });
  const [mensaje, setMensaje] = useState('');

  // Cargar las mascotas perdidas desde el backend o desde localStorage
  useEffect(() => {
    const cargarMascotas = () => {
      const mascotasGuardadas = localStorage.getItem('mascotasPerdidas');
      if (mascotasGuardadas) {
        setMascotas(JSON.parse(mascotasGuardadas));
      } else {
        axios.get('/api/mascotasPerdidas')
          .then(response => {
            setMascotas(response.data);
            localStorage.setItem('mascotasPerdidas', JSON.stringify(response.data)); // Guardar en localStorage
          })
          .catch(error => console.error('Error al obtener las mascotas perdidas:', error));
      }
    };
    cargarMascotas();
  }, []);

  // Manejar el envío del formulario
  const onFormSubmit = (e) => {
    e.preventDefault();

    axios.post('/api/mascotasPerdidas', nuevaMascota)
      .then(() => {
        setMensaje('¡La mascota perdida se reportó correctamente!');

        // Resetear el formulario
        setNuevaMascota({ nombre: '', descripcion: '', telefono: '' });

        // Actualizar la lista de mascotas
        return axios.get('/api/mascotasPerdidas');
      })
      .then(response => {
        setMascotas(response.data);
        localStorage.setItem('mascotasPerdidas', JSON.stringify(response.data)); // Actualizar localStorage
      })
      .catch(error => {
        console.error('Error al reportar la mascota perdida:', error);
        setMensaje('Error al reportar la mascota perdida. Por favor, verifica la información.');
      })
      .finally(() => {
        // Restablecer el mensaje después de un breve período
        setTimeout(() => setMensaje(''), 3000);
      });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Mascotas Perdidas</h1>
      <form onSubmit={onFormSubmit} className="space-y-4 mb-6">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nuevaMascota.nombre}
            onChange={(e) => setNuevaMascota({ ...nuevaMascota, nombre: e.target.value })}
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
            value={nuevaMascota.descripcion}
            onChange={(e) => setNuevaMascota({ ...nuevaMascota, descripcion: e.target.value })}
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
            value={nuevaMascota.telefono}
            onChange={(e) => setNuevaMascota({ ...nuevaMascota, telefono: e.target.value })}
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
        <div className="bg-green-100 text-green-800 border border-green-400 rounded-lg p-4 mb-6 text-center">
          {mensaje}
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-4 text-center">Mascotas Perdidas Recientes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mascotas.map(mascota => (
          <div key={mascota._id} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{mascota.nombre}</h2>
            <p className="text-gray-700 mb-4">{mascota.descripcion}</p>
            <p className="text-gray-700">Teléfono: {mascota.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MascotasPerdidas;
