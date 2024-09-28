// En el componente de adopciones
const manejarRegistro = async (e) => {
  e.preventDefault();
  try {
    const respuesta = await axios.post('https://mi-mascota-backend.onrender.com/api/adopciones', {
      nombre,
      descripcion,
      telefono,
    });
    setAdopciones((prevAdopciones) => [...prevAdopciones, respuesta.data]); // Mantener el estado previo
    setMensajeExito('Adopción registrada con éxito.');
    setNombre('');
    setDescripcion('');
    setTelefono('');
  } catch (error) {
    console.error('Error al registrar adopción:', error);
    setMensajeExito('Hubo un error al registrar la adopción.');
  }
};
