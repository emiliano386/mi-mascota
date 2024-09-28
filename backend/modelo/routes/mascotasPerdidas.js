const express = require('express');
const router = express.Router();
const MascotaPerdida = require('../ModeloMascotasPerdidas');

// Obtener todas las mascotas perdidas
router.get('/', async (req, res) => {
  try {
    const mascotas = await MascotaPerdida.find();
    res.json(mascotas);
  } catch (error) {
    console.error('Error al obtener las mascotas perdidas:', error);
    res.status(500).json({ message: 'Error al obtener las mascotas perdidas.' });
  }
});

// Agregar una nueva mascota perdida
router.post('/', async (req, res) => {
  const { nombre, descripcion, telefono } = req.body;

  try {
    const nuevaMascota = new MascotaPerdida({ nombre, descripcion, telefono });
    await nuevaMascota.save();
    res.status(201).json(nuevaMascota);
  } catch (error) {
    console.error('Error al crear mascota perdida:', error);
    res.status(400).json({ error: error.message });
  }
});

// Otras rutas (por ID, actualizar, eliminar) se pueden agregar aquí

module.exports = router;
