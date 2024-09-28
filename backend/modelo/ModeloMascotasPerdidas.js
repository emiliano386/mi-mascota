const mongoose = require('mongoose');

const MascotaPerdidaSchema = new mongoose.Schema({
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
  // Otros campos que consideres necesarios
}, { timestamps: true }); // Agrega timestamps para saber cuándo se creó o actualizó

const MascotaPerdida = mongoose.model('MascotaPerdida', MascotaPerdidaSchema);
module.exports = MascotaPerdida;
