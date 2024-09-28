const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config(); // Carga las variables de entorno desde el archivo .env

const adopcionesRouter = require('./modelo/routes/adopciones');
const mascotasPerdidasRouter = require('./modelo/routes/mascotasPerdidas');
const registroRouter = require('./modelo/routes/registro');
const enviarCorreoRouter = require('./modelo/enviarCorreo');

const app = express();
const port = process.env.PORT || 5000;

// Configuración de CORS
const corsOptions = {
  origin: 'https://mi-mascota.onrender.com', // Dominio de tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions)); // Aplica las opciones de CORS
app.use(express.static(path.join(__dirname, '../public'))); // Sirve archivos estáticos
app.use(express.json()); // Permite manejar datos JSON en las solicitudes

// Rutas de la API
app.use('/api/adopciones', adopcionesRouter);
app.use('/api/mascotasPerdidas', mascotasPerdidasRouter); 
app.use('/api/registro', registroRouter);
app.use('/api/enviar-correo', enviarCorreoRouter); 

// Conexión a MongoDB
const mongoUri = process.env.MONGODB_URI; 
if (!mongoUri) {
  console.error('Error: MONGODB_URI no está definida en el archivo .env');
  process.exit(1);
}

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1);
  });

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

// Inicializa el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
