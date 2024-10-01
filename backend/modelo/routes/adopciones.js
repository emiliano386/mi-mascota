const express = require('express');
const router = express.Router();
const Adopcion = require('../modelos/Adopcion'); // Asegúrate de tener un modelo Adopcion definido

// Obtener todas las adopciones
router.get('/', async (req, res) => {
  try {
    const adopciones = await Adopcion.find(); // Obtener todas las adopciones de la base de datos
    res.json(adopciones); // Enviar las adopciones como respuesta
  } catch (err) {
    res.status(500).json({ message: err.message }); // Manejo de errores
  }
});

// Crear una nueva adopción
router.post('/', async (req, res) => {
  const nuevaAdopcion = new Adopcion({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    telefono: req.body.telefono,
  });

  try {
    const guardada = await nuevaAdopcion.save(); // Guardar la nueva adopción en la base de datos
    res.status(201).json(guardada); // Enviar la adopción guardada como respuesta
  } catch (err) {
    res.status(400).json({ message: err.message }); // Manejo de errores
  }
});

module.exports = router; // Exportar el router para usarlo en server.js
