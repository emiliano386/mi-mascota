const express = require('express');
const router = express.Router();
const Adopcion = require('../modelos/Adopcion'); // Asegúrate de que el modelo esté en esta ruta

// Ruta para registrar una adopción
router.post('/', async (req, res) => {
  const { nombre, descripcion, telefono } = req.body;

  // Lógica para guardar la adopción en la base de datos
  try {
    const nuevaAdopcion = new Adopcion({ nombre, descripcion, telefono });
    await nuevaAdopcion.save();
    res.status(201).json(nuevaAdopcion);
  } catch (error) {
    console.error('Error al registrar adopción:', error);
    res.status(400).json({ message: 'Error al registrar la adopción. Verifica los datos ingresados.' });
  }
});

// Ruta para obtener todas las adopciones
router.get('/', async (req, res) => {
  try {
    const adopciones = await Adopcion.find(); // Asegúrate de que el modelo esté configurado correctamente
    res.json(adopciones);
  } catch (error) {
    console.error('Error al obtener adopciones:', error);
    res.status(500).json({ message: 'Error al obtener adopciones.' });
  }
});

module.exports = router;
