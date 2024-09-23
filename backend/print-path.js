const path = require('path');

// Imprimir la ruta completa del archivo actual
console.log('Ruta completa del archivo actual:');
console.log(__filename);

// Imprimir la ruta del directorio actual
console.log('Ruta completa del directorio actual:');
console.log(__dirname);

// Imprimir la ruta completa del archivo que quieres verificar
const archivoAverificar = path.resolve(__dirname, 'Controlador/mascotasPerdidasController.js');
console.log('Ruta completa del archivo a verificar:');
console.log(archivoAverificar);
