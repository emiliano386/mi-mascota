const express = require('express');
const router = express.Router();
const enviarCorreo = require('../enviarCorreo'); 
const Usuario = require('../Usuario'); 
const bcrypt = require('bcryptjs'); // Cambia a bcryptjs

// Ruta para manejar el registro
router.post('/', async (req, res) => {
  const { email, password } = req.body;

  // Agregar log para verificar la solicitud recibida
  console.log('Solicitud de registro recibida:', req.body);

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

    // Hashear la contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear y guardar el nuevo usuario
    const nuevoUsuario = new Usuario({ email, password: hashedPassword });
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


    // Crear y guardar el nuevo usuario
    const nuevoUsuario = new Usuario({ email, password: hashedPassword }); // Usa la contraseña hasheada
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
