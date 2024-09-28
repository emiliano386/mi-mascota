const mongoose = require('mongoose');

const AdopcionSchema = new mongoose.Schema({
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
}, { timestamps: true }); // Agrega timestamps para saber cuándo se creó o actualizó

const Adopcion = mongoose.model('Adopcion', AdopcionSchema);
module.exports = Adopcion;
