const express = require('express');
const router = express.Router();
const Adopcion = require('../ModeloAdopciones');

// Crear una nueva adopción
router.post('/', async (req, res) => {
  const { nombre, descripcion, telefono } = req.body;

  try {
    const nuevaAdopcion = new Adopcion({ nombre, descripcion, telefono });
    await nuevaAdopcion.save();
    res.status(201).json(nuevaAdopcion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtener todas las adopciones
router.get('/', async (req, res) => {
  try {
    const adopciones = await Adopcion.find();
    res.json(adopciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Otras rutas (por ID, actualizar, eliminar) se pueden agregar aquí

module.exports = router;
