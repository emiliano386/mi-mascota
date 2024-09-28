const mongoose = require('mongoose');

// Define el esquema del usuario
const usuarioSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    unique: true,
    validate: {
      validator: (v) => /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v),
      message: 'El email debe ser válido'
    }
  },
  password: {
    type: String,
    required: [true, 'La contraseña es requerida'],
    minlength: [6, 'La contraseña debe tener al menos 6 caracteres']
  }
});

// Crea el modelo a partir del esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
