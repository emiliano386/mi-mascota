const mongoose = require('mongoose');

// Definir el esquema para Mascotas Perdidas
const mascotaPerdidaSchema = new mongoose.Schema({
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
  fechaReporte: {
    type: Date,
    default: Date.now,
  },
  // El campo imagen ha sido eliminado
});

module.exports = mongoose.model('MascotaPerdida', mascotaPerdidaSchema);
