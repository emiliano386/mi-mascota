// server.js

const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const port = 5000;

// Middleware para procesar JSON
app.use(express.json());

// Conexión a MongoDB
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Conectado a MongoDB");
    } catch (e) {
        console.error("Error conectando a MongoDB:", e);
    }
}

connectToDatabase();

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

// Importa el enrutador de veterinarias
const veterinariasRouter = require('./modelos/routes/veterinarias');

// Usa el enrutador de veterinarias
app.use('/api/veterinarias', veterinariasRouter);

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
