const mongoose = require('mongoose');

// Definir el esquema de Adopción
const adopcionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
});

// Crear y exportar el modelo de Adopción
module.exports = mongoose.model('Adopcion', adopcionSchema);
