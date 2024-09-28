import { useState } from 'react';
import axios from 'axios';

const Adopciones = () => {
  // Definir los estados
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [adopciones, setAdopciones] = useState([]);

  // Manejar el registro de adopciones
  const manejarRegistro = async (e) => {
    e.preventDefault();

    // Validación de campos
    if (!nombre || !descripcion || !telefono) {
      setMensajeExito('Por favor, complete todos los campos.');
      return;
    }

    try {
      // Petición al backend
      const respuesta = await axios.post('https://mi-mascota-backend.onrender.com/api/adopciones', {
        nombre,
        descripcion,
        telefono,
      });

      // Actualizar el estado de adopciones con la nueva adopción registrada
      setAdopciones((prevAdopciones) => [...prevAdopciones, respuesta.data]);

      // Limpiar los campos y mostrar mensaje de éxito
      setMensajeExito('Adopción registrada con éxito.');
      setNombre('');
      setDescripcion('');
      setTelefono('');
    } catch (error) {
      // Manejo de errores, incluyendo mensajes personalizados según el código de respuesta
      if (error.response && error.response.status === 400) {
        setMensajeExito('Error: Datos inválidos.');
      } else {
        setMensajeExito('Hubo un error al registrar la adopción.');
      }
      console.error('Error al registrar adopción:', error);
    }
  };

  return (
    <div>
      <h1>Registrar Mascota en Adopción</h1>
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
        {adopciones.map((adopcion, index) => (
          <li key={index}>
            <strong>{adopcion.nombre}</strong>: {adopcion.descripcion} - {adopcion.telefono}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Adopciones;
