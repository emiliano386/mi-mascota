require('dotenv').config(); // Esto carga las variables de entorno desde el archivo .env
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Permite todas las solicitudes CORS
app.use(express.json());

// Conexión a la base de datos
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch((err) => console.error('Error al conectar a MongoDB:', err));

// Rutas
const veterinariasRoutes = require('./modelo/routes/veterinarias');
app.use('/api/veterinarias', veterinariasRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
