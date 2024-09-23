const express = require('express');
const router = express.Router();
const { getMascotasPerdidas, createMascotaPerdida } = require('../../Controlador/mascotasPerdidasController');

// Obtener todas las mascotas perdidas
router.get('/', getMascotasPerdidas);

// Agregar una nueva mascota perdida sin imagen
router.post('/', createMascotaPerdida);

module.exports = router;
