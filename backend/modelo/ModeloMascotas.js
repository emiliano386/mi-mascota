const mongoose = require('mongoose');

// Definir el esquema para las mascotas
const modeloMascotasSchema = new mongoose.Schema({
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
  // Puedes añadir otros campos que consideres necesarios
});

// Exportar el modelo
module.exports = mongoose.model('ModeloMascotas', modeloMascotasSchema);
