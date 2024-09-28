const express = require('express');
const router = express.Router();
const MascotaPerdida = require('../MascotaPerdida'); // Asegúrate de que el modelo esté en esta ruta

// Ruta para registrar una mascota perdida
router.post('/', async (req, res) => {
  const { nombre, descripcion, telefono } = req.body;

  // Lógica para guardar la mascota perdida en la base de datos
  try {
    const nuevaMascotaPerdida = new MascotaPerdida({ nombre, descripcion, telefono });
    await nuevaMascotaPerdida.save();
    res.status(201).json(nuevaMascotaPerdida);
  } catch (error) {
    console.error('Error al registrar mascota perdida:', error);
    res.status(400).json({ message: 'Error al registrar la mascota perdida. Verifica los datos ingresados.' });
  }
});

// Ruta para obtener todas las mascotas perdidas
router.get('/', async (req, res) => {
  try {
    const mascotasPerdidas = await MascotaPerdida.find();
    res.json(mascotasPerdidas);
  } catch (error) {
    console.error('Error al obtener mascotas perdidas:', error);
    res.status(500).json({ message: 'Error al obtener mascotas perdidas.' });
  }
});

module.exports = router;
