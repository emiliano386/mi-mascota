const fs = require('fs');
const path = require('path');

const uploadDir = path.join(__dirname, 'upload');

// Función para eliminar todos los archivos en la carpeta
fs.readdir(uploadDir, (err, files) => {
  if (err) throw err;
  
  files.forEach(file => {
    fs.unlink(path.join(uploadDir, file), err => {
      if (err) throw err;
    });
  });

  console.log('Todos los archivos han sido eliminados.');
});
