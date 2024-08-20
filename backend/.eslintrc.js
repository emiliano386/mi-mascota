module.exports = {
    env: {
      node: true, // Esto habilita las variables de entorno de Node.js
      es6: true   // Esto habilita características de ES6
    },
    extends: 'eslint:recommended', // Extiende las reglas recomendadas de ESLint
    parserOptions: {
      ecmaVersion: 2021, // Esto habilita la sintaxis moderna de JavaScript
    },
    rules: {
      // Aquí puedes agregar reglas personalizadas
      // Ejemplo: 'no-unused-vars': 'warn' // Muestra advertencias para variables no usadas
    },
  };
  