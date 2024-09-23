const mongoose = require('mongoose');

// Define el esquema del usuario
const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Crea el modelo a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
