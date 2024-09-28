const User = require('../modelo/User'); // Ruta al modelo de usuario
const enviarCorreo = require('../enviarCorreo'); // Ruta al archivo de enviarCorreo

const registrarUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario ya existe
    const usuarioExistente = await User.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El usuario ya está registrado.' });
    }

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

    // Capturamos el tipo de error para dar más información
    const errorMessage = error.code === 11000 
      ? 'El correo ya está registrado.'
      : 'Error al registrar el usuario.';

    res.status(500).json({ message: errorMessage, error: error.message });
  }
};

module.exports = registrarUsuario;
