const express = require('express');
const router = express.Router();
const Veterinaria = require('../ModeloVeterinarias'); // Asegúrate de que esta ruta sea correcta

// Obtener todas las veterinarias
router.get('/', async (req, res) => {
    try {
        const veterinarias = await Veterinaria.find();
        res.json(veterinarias);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Agregar una nueva veterinaria
router.post('/', async (req, res) => {
    const veterinaria = new Veterinaria({
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        telefono: req.body.telefono
    });

    try {
        const nuevaVeterinaria = await veterinaria.save();
        res.status(201).json(nuevaVeterinaria);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar una veterinaria existente (PUT)
router.put('/:id', async (req, res) => {
    try {
        const veterinaria = await Veterinaria.findById(req.params.id);
        if (!veterinaria) {
            return res.status(404).json({ message: 'Veterinaria no encontrada' });
        }

        // Actualizar los campos con los datos del cuerpo de la solicitud
        veterinaria.nombre = req.body.nombre || veterinaria.nombre;
        veterinaria.direccion = req.body.direccion || veterinaria.direccion;
        veterinaria.telefono = req.body.telefono || veterinaria.telefono;

        const veterinariaActualizada = await veterinaria.save();
        res.json(veterinariaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar parcialmente una veterinaria existente (PATCH)
router.patch('/:id', async (req, res) => {
    try {
        const veterinaria = await Veterinaria.findById(req.params.id);
        if (!veterinaria) {
            return res.status(404).json({ message: 'Veterinaria no encontrada' });
        }

        // Actualizar solo los campos que se envían en el cuerpo de la solicitud
        if (req.body.nombre) veterinaria.nombre = req.body.nombre;
        if (req.body.direccion) veterinaria.direccion = req.body.direccion;
        if (req.body.telefono) veterinaria.telefono = req.body.telefono;

        const veterinariaActualizada = await veterinaria.save();
        res.json(veterinariaActualizada);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
