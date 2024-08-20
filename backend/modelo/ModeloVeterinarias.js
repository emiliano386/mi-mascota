const mongoose = require('mongoose');

// Define el esquema para Veterinaria
const veterinariaSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: String,
        required: true,
    },
    // Agrega más campos según lo necesites
});

// Crea el modelo basado en el esquema
const Veterinaria = mongoose.model('Veterinaria', veterinariaSchema);

module.exports = Veterinaria;
