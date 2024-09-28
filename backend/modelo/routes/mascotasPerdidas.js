const manejarRegistro = async (e) => {
  e.preventDefault();
  try {
    const respuesta = await axios.post('https://mi-mascota-backend.onrender.com/api/mascotasPerdidas', {
      nombre,
      descripcion,
      telefono,
    });
    setMascotas((prevMascotas) => [...prevMascotas, respuesta.data]); // Mantener el estado previo
    setMensajeExito('Mascota registrada con éxito.');
    setNombre('');
    setDescripcion('');
    setTelefono('');
  } catch (error) {
    console.error('Error al registrar mascota:', error);
    setMensajeExito('Hubo un error al registrar la mascota.');
  }
};
