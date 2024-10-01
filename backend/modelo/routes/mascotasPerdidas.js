const express = require('express');
const router = express.Router();
const MascotaPerdida = require('../modelos/MascotaPerdida'); // Asegúrate de tener un modelo MascotaPerdida definido

// Obtener todas las mascotas perdidas
router.get('/', async (req, res) => {
  try {
    const mascotas = await MascotaPerdida.find(); // Obtener todas las mascotas perdidas de la base de datos
    res.json(mascotas); // Enviar las mascotas como respuesta
  } catch (err) {
    res.status(500).json({ message: err.message }); // Manejo de errores
  }
});

// Crear una nueva mascota perdida
router.post('/', async (req, res) => {
  const nuevaMascota = new MascotaPerdida({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    telefono: req.body.telefono,
  });

  try {
    const guardada = await nuevaMascota.save(); // Guardar la nueva mascota en la base de datos
    res.status(201).json(guardada); // Enviar la mascota guardada como respuesta
  } catch (err) {
    res.status(400).json({ message: err.message }); // Manejo de errores
  }
});

module.exports = router; // Exportar el router para usarlo en server.js

