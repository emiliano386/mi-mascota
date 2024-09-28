const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); 
require('dotenv').config(); 

const adopcionesRouter = require('./modelo/routes/adopciones');
const mascotasPerdidasRouter = require('./modelo/routes/mascotasPerdidas');
const veterinariasRouter = require('./modelo/routes/veterinarias');
const registroRouter = require('./modelo/routes/registro');
const enviarCorreoRouter = require('./modelo/enviarCorreo');

const app = express();
const port = process.env.PORT || 5000;

const corsOptions = {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());

// Rutas de la API
app.use('/api/adopciones', adopcionesRouter);
app.use('/api/mascotasPerdidas', mascotasPerdidasRouter); 
app.use('/api/veterinarias', veterinariasRouter);
app.use('/api/registro', registroRouter);
app.use('/api/enviar-correo', enviarCorreoRouter); 

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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
