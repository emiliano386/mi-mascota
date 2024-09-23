const ModeloMascotaPerdida = require('../modelo/ModeloMascotasPerdidas');

// Obtener todas las mascotas perdidas
exports.getMascotasPerdidas = async (req, res) => {
  try {
    const mascotasPerdidas = await ModeloMascotaPerdida.find();
    res.json(mascotasPerdidas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Agregar una nueva mascota perdida
exports.createMascotaPerdida = async (req, res) => {
  const { nombre, descripcion, telefono } = req.body;

  // Sin imagen, la ruta de la imagen no se necesita
  const nuevaMascotaPerdida = new ModeloMascotaPerdida({
    nombre,
    descripcion,
    telefono,
    imagen: null, // No se guarda imagen en la base de datos
  });

  try {
    const mascotaPerdida = await nuevaMascotaPerdida.save();
    res.status(201).json(mascotaPerdida);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
