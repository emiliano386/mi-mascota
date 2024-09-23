const express = require('express');
const router = express.Router();
const Mascota = require('../ModeloMascotas');

// Obtener todas las mascotas
router.get('/', async (req, res) => {
  try {
    const mascotas = await Mascota.find();
    res.json(mascotas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Crear una nueva mascota
router.post('/', async (req, res) => {
  const { nombre, descripcion, telefono } = req.body;

  try {
    const nuevaMascota = new Mascota({ nombre, descripcion, telefono });
    await nuevaMascota.save();
    res.status(201).json(nuevaMascota);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Obtener una mascota por ID
router.get('/:id', async (req, res) => {
  try {
    const mascota = await Mascota.findById(req.params.id);
    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }
    res.json(mascota);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Actualizar una mascota por ID
router.put('/:id', async (req, res) => {
  const { nombre, descripcion, telefono } = req.body;

  try {
    const mascota = await Mascota.findByIdAndUpdate(
      req.params.id,
      { nombre, descripcion, telefono },
      { new: true }
    );
    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }
    res.json(mascota);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminar una mascota por ID
router.delete('/:id', async (req, res) => {
  try {
    const mascota = await Mascota.findByIdAndDelete(req.params.id);
    if (!mascota) {
      return res.status(404).json({ message: 'Mascota no encontrada' });
    }
    res.json({ message: 'Mascota eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
