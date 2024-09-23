const User = require('../modelo/User'); // Ruta al modelo de usuario
const enviarCorreo = require('../enviarCorreo'); // Ruta al archivo de enviarCorreo

const registrarUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Crear un nuevo usuario (ajusta según tu modelo de usuario)
    const nuevoUsuario = new User({ email, password });
    await nuevoUsuario.save();

    // Enviar correo de confirmación a tu dirección
    await enviarCorreo(
      'emilianosantana386@gmail.com', // mi dirección de correo para recibir notificaciones
      'Nuevo Registro en Mi Mascota', // Asunto del correo
      `Se ha registrado un nuevo usuario con el correo: ${email}` // Cuerpo del correo
    );

    res.status(201).send('Usuario registrado exitosamente');
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).send('Error al registrar el usuario');
  }
};

module.exports = registrarUsuario;

