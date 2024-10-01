import React, { useEffect, useState } from 'react';

const MascotasPerdidas = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mascotasRecientes, setMascotasRecientes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // Cargar mascotas perdidas del localStorage al iniciar
  useEffect(() => {
    const storedMascotas = JSON.parse(localStorage.getItem('mascotasPerdidas')) || [];
    setMascotasRecientes(storedMascotas);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar mensaje de carga
    setCargando(true);
    setMensaje('Se está cargando su mascota...');

    // Crear un objeto de mascota perdida
    const nuevaMascota = { nombre, descripcion, telefono };

    // Simular un retraso de carga
    setTimeout(() => {
      // Actualizar el estado de mascotas recientes
      const nuevasMascotas = [...mascotasRecientes, nuevaMascota];
      setMascotasRecientes(nuevasMascotas);

      // Guardar en localStorage
      localStorage.setItem('mascotasPerdidas', JSON.stringify(nuevasMascotas));

      // Limpiar los campos del formulario
      setNombre('');
      setDescripcion('');
      setTelefono('');

      // Mostrar mensaje de éxito
      setCargando(false);
      setMensaje('Su mascota se cargó con éxito.');

      // Ocultar mensaje después de 3 segundos
      setTimeout(() => {
        setMensaje('');
      }, 3000); // 3000 ms = 3 segundos
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold">Mascotas Perdidas</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md mt-4">
        <div className="mb-4">
          <label className="block mb-1">Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            required
            className="border p-2 w-full"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Teléfono:</label>
          <input
            type="text"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">
          Agregar Mascota Perdida
        </button>
      </form>

      {cargando && <p className="mt-4 text-blue-600">{mensaje}</p>}
      {!cargando && mensaje && <p className="mt-4 text-green-600">{mensaje}</p>}

      <h3 className="text-lg font-bold mt-6">Mascotas Perdidas Recientes:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mt-4">
        {mascotasRecientes.map((mascota, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-md bg-white">
            <h4 className="font-bold">{mascota.nombre}</h4>
            <p className="mt-1"><strong>Descripción:</strong> {mascota.descripcion}</p>
            <p className="mt-1"><strong>Teléfono:</strong> {mascota.telefono}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MascotasPerdidas;
