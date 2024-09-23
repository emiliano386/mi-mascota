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

// Obtener una adopción por ID
router.get('/:id', async (req, res) => {
  try {
    const adopcion = await Adopcion.findById(req.params.id);
    if (!adopcion) {
      return res.status(404).json({ error: 'Adopción no encontrada' });
    }
    res.json(adopcion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar una adopción por ID
router.put('/:id', async (req, res) => {
  const { nombre, descripcion, telefono } = req.body;

  try {
    const adopcion = await Adopcion.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion, telefono },
      { new: true }
    );
    if (!adopcion) {
      return res.status(404).json({ error: 'Adopción no encontrada' });
    }
    res.json(adopcion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar una adopción por ID
router.delete('/:id', async (req, res) => {
  try {
    const adopcion = await Adopcion.findByIdAndDelete(req.params.id);
    if (!adopcion) {
      return res.status(404).json({ error: 'Adopción no encontrada' });
    }
    res.json({ message: 'Adopción eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
