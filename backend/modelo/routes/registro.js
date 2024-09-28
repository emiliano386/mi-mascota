const express = require('express');
const router = express.Router();
const enviarCorreo = require('../enviarCorreo'); 
const Usuario = require('../Usuario'); 
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  console.log('Solicitud de registro recibida:', req.body);

  if (!email || !password) {
    console.error('Error de validación: faltan datos'); 
    return res.status(400).json({ error: 'Email y contraseña son requeridos' });
  }

  try {
    const usuarioExistente = await Usuario.findOne({ email });
    if (usuarioExistente) {
      console.error('Error: El usuario ya está registrado'); 
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const nuevoUsuario = new Usuario({ email, password: hashedPassword });
    await nuevoUsuario.save();

    await enviarCorreo(
      email,
      'Confirmación de Registro',
      `Hola,\n\nTe has registrado exitosamente.\n\nSaludos,\nEquipo`
    );

    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario', detalle: error.message });
  }
});

module.exports = router;
