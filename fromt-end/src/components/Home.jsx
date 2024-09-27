// src/components/Home.jsx
import React from 'react';
import Logo from './Logo'; // Importa el componente Logo

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Logo />
      {/* Puedes agregar más contenido aquí si lo deseas */}
    </div>
  );
};

export default Home;
