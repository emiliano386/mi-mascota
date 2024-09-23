const express = require('express');
const router = express.Router();
const enviarCorreo = require('../enviarCorreo'); 
const Usuario = require('../Usuario'); 

// Ruta para manejar el registro
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  // Validación básica de datos
  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son requeridos' });
  }

  try {
    // Verifica si el usuario ya existe
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    // Crear y guardar el nuevo usuario
    const nuevoUsuario = new Usuario({ email, password });
    await nuevoUsuario.save();

    // Enviar correo de confirmación
    await enviarCorreo(
      email,
      'Confirmación de Registro',
      `Hola,\n\nTe has registrado exitosamente.\n\nSaludos,\nEquipo`
    );

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
});

module.exports = router;


module.exports = router;
