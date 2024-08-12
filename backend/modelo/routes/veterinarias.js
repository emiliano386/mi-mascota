// modelos/routes/veterinarias.js

const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');
require('dotenv').config();

// Conexión a MongoDB
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Conectado a MongoDB desde rutas");
    } catch (e) {
        console.error("Error conectando a MongoDB desde rutas:", e);
    }
}

connectToDatabase();

router.get('/', async (req, res) => {
    try {
        const db = client.db('nombre_de_tu_base_de_datos'); // Cambia esto al nombre de tu base de datos
        const collection = db.collection('veterinarias');
        const veterinarias = await collection.find({}).toArray();
        res.json(veterinarias);
    } catch (e) {
        res.status(500).json({ error: 'Error al obtener veterinarias' });
    }
});

router.post('/', async (req, res) => {
    try {
        const db = client.db('nombre_de_tu_base_de_datos'); // Cambia esto al nombre de tu base de datos
        const collection = db.collection('veterinarias');
        const nuevaVeterinaria = req.body;
        await collection.insertOne(nuevaVeterinaria);
        res.status(201).json(nuevaVeterinaria);
    } catch (e) {
        res.status(500).json({ error: 'Error al agregar veterinaria' });
    }
});

module.exports = router;
