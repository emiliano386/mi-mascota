import { useState } from 'react';
import axios from 'axios';

const MascotasPerdidas = () => {
  // Definir los estados
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [mascotas, setMascotas] = useState([]);

  // Manejar el registro de la mascota perdida
  const manejarRegistro = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!nombre || !descripcion || !telefono) {
      setMensajeExito('Por favor, complete todos los campos.');
      return;
    }

    try {
      // Petición al backend
      const respuesta = await axios.post('https://mi-mascota-backend.onrender.com/api/mascotasPerdidas', {
        nombre,
        descripcion,
        telefono,
      });

      // Actualizar el estado de mascotas con la nueva mascota registrada
      setMascotas((prevMascotas) => [...prevMascotas, respuesta.data]);

      // Limpiar los campos y mostrar mensaje de éxito
      setMensajeExito('Mascota registrada con éxito.');
      setNombre('');
      setDescripcion('');
      setTelefono('');
    } catch (error) {
      // Manejo de errores, incluyendo mensajes personalizados según el código de respuesta
      if (error.response && error.response.status === 400) {
        setMensajeExito('Error: Datos inválidos.');
      } else {
        setMensajeExito('Hubo un error al registrar la mascota.');
      }
      console.error('Error al registrar mascota:', error);
    }
  };

  return (
    <div>
      <h1>Registrar Mascota Perdida</h1>
      <form onSubmit={manejarRegistro}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        <button type="submit">Registrar</button>
      </form>
      {mensajeExito && <p>{mensajeExito}</p>}
      <ul>
        {mascotas.map((mascota, index) => (
          <li key={index}>
            <strong>{mascota.nombre}</strong>: {mascota.descripcion} - {mascota.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MascotasPerdidas;
