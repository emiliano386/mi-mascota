import React, { useEffect, useState } from 'react';

const Adopciones = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [adopcionesRecientes, setAdopcionesRecientes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState('');

  // Cargar adopciones del localStorage al iniciar
  useEffect(() => {
    const storedAdopciones = JSON.parse(localStorage.getItem('adopciones')) || [];
    setAdopcionesRecientes(storedAdopciones);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mostrar mensaje de carga
    setCargando(true);
    setMensaje('Se está cargando su mascota...');

    // Crear un objeto de adopción
    const nuevaAdopcion = { nombre, descripcion, telefono };

    // Simular un retraso de carga (puedes ajustarlo o eliminarlo)
    setTimeout(() => {
      // Actualizar el estado de adopciones recientes
      const nuevasAdopciones = [...adopcionesRecientes, nuevaAdopcion];
      setAdopcionesRecientes(nuevasAdopciones);

      // Guardar en localStorage
      localStorage.setItem('adopciones', JSON.stringify(nuevasAdopciones));

      // Limpiar los campos del formulario
      setNombre('');
      setDescripcion('');
      setTelefono('');

      // Mostrar mensaje de éxito
      setCargando(false);
      setMensaje('Su mascota se cargó con éxito.');
    }, 1500); // 1.5 segundos de retraso
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-xl font-bold">Adopciones</h2>
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
          Agregar Adopción
        </button>
      </form>

      {cargando && <p className="mt-4 text-blue-600">{mensaje}</p>}
      {!cargando && mensaje && <p className="mt-4 text-green-600">{mensaje}</p>}

      <h3 className="text-lg font-bold mt-6">Adopciones Recientes:</h3>
      <ul className="w-full max-w-md">
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
