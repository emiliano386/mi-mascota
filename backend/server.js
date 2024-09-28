const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Cargar variables de entorno desde el archivo .env

// Rutas
const adopcionesRouter = require('./modelo/routes/adopciones');
const mascotasPerdidasRouter = require('./modelo/routes/mascotasPerdidas');
const veterinariasRouter = require('./modelo/routes/veterinarias');
const registroRouter = require('./modelo/routes/registro');
const enviarCorreoRouter = require('./modelo/enviarCorreo');

const app = express();
const port = process.env.PORT || 5000;

// Configuración de CORS
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

// Middleware
app.use(express.json());

// Rutas
app.use('/api/adopciones', adopcionesRouter);
app.use('/api/mascotasPerdidas', mascotasPerdidasRouter); 
app.use('/api/veterinarias', veterinariasRouter);
app.use('/api/registro', registroRouter);
app.use('/api/enviar-correo', enviarCorreoRouter); 

// Conectar a MongoDB
const mongoUri = process.env.MONGODB_URI; // Obtener la URI desde .env
if (!mongoUri) {
  console.error('Error: MONGODB_URI no está definida en el archivo .env');
  process.exit(1);
}

mongoose.connect(mongoUri)
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

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
