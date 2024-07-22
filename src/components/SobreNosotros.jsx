// src/components/SobreNosotros.jsx
import React, { useState } from 'react';

const SobreNosotros = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section id="about" className="p-6 bg-gray-100">
      <button 
        onClick={toggleVisibility} 
        className="text-xl font-bold mb-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
      >
        {isVisible ? 'Ocultar Sobre Nosotros' : 'Mostrar Sobre Nosotros'}
      </button>
      {isVisible && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-gray-700">
            esta web fue creada para rescatar y encontrar hogares para mascotas abandonadas. 
          
          </p>
        </div>
      )}
    </section>
  );
};

export default SobreNosotros;
