import React, { useState } from 'react';

// Lista inicial de mascotas en adopción
const mascotas = [
  {
    nombre: 'Rex',
    descripcion: 'Perro grande y amigable, busca una familia amorosa.',
    foto: 'https://via.placeholder.com/150',
  },
  {
    nombre: 'Miau',
    descripcion: 'Gato de pelaje negro, muy cariñoso y juguetón.',
    foto: 'https://via.placeholder.com/150',
  },
  // Agrega más mascotas aquí
];

const Adopciones = () => {
  const [listaMascotas, setListaMascotas] = useState(mascotas);
  const [nuevoNombre, setNuevoNombre] = useState('');
  const [nuevaDescripcion, setNuevaDescripcion] = useState('');
  const [nuevaFoto, setNuevaFoto] = useState(null);
  const [fotoPreview, setFotoPreview] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result);
        setNuevaFoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const agregarMascota = (e) => {
    e.preventDefault();
    const nuevaMascota = {
      nombre: nuevoNombre,
      descripcion: nuevaDescripcion,
      foto: nuevaFoto,
    };
    setListaMascotas([...listaMascotas, nuevaMascota]);
    setNuevoNombre('');
    setNuevaDescripcion('');
    setNuevaFoto(null);
    setFotoPreview('');
  };

  return (
    <section className="bg-white p-5 mb-5">
      <h2 className="text-xl font-bold mb-4">Mascotas en Adopción</h2>
      <div className="mb-5">
        <h3 className="text-lg font-semibold mb-2">Agregar una nueva mascota</h3>
        <form onSubmit={agregarMascota} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nombre:</label>
            <input
              type="text"
              value={nuevoNombre}
              onChange={(e) => setNuevoNombre(e.target.value)}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Descripción:</label>
            <textarea
              value={nuevaDescripcion}
              onChange={(e) => setNuevaDescripcion(e.target.value)}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Foto:</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 w-full"
            />
            {fotoPreview && (
              <img src={fotoPreview} alt="Vista previa" className="w-full h-32 object-cover mt-2" />
            )}
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Agregar Mascota
          </button>
        </form>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Lista de Mascotas</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {listaMascotas.map((mascota, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded shadow-sm">
              <img src={mascota.foto} alt={mascota.nombre} className="w-full h-32 object-cover mb-3" />
              <h4 className="text-md font-semibold">{mascota.nombre}</h4>
              <p>{mascota.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adopciones;

