// src/components/Logo.jsx
import React from 'react';

function Logo() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white p-12 rounded-lg shadow-lg text-center flex flex-col items-center border border-gray-300">
        <svg
          className="w-40 h-40 mb-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Círculo grande en el medio como elipse */}
          <ellipse cx="12" cy="14" rx="5" ry="4" fill="#48BB78" />
          <ellipse cx="12" cy="14" rx="4" ry="3.5" fill="#FEEBC8" />
          {/* Círculo ovalado arriba del círculo del medio */}
          <ellipse cx="12" cy="6" rx="4" ry="2" fill="#48BB78" />
          {/* Ojos pequeños separados arriba del círculo ovalado */}
          <circle cx="9" cy="3" r="1.5" fill="#48BB78" />
          <circle cx="15" cy="3" r="1.5" fill="#48BB78" />
          {/* Ojos del perro */}
          <circle cx="8" cy="11" r="1.5" fill="#48BB78" />
          <circle cx="16" cy="11" r="1.5" fill="#48BB78" />
          {/* Ojos entre los círculos de arriba y el círculo principal */}
          <circle cx="9" cy="6" r="0.8" fill="#48BB78" />
          <circle cx="15" cy="6" r="0.8" fill="#48BB78" />
          {/* Patas debajo */}
          <circle cx="8" cy="19" r="2" fill="#48BB78" />
          <circle cx="16" cy="19" r="2" fill="#48BB78" />
          {/* Cola estilizada hacia arriba y a la derecha */}
          <path
            d="M17 16c2-1 3-2 3-3"
            stroke="#48BB78"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          {/* Orejas estilizadas como hojas */}
          <path
            d="M4 8C4 5 6 2 8 4C6 6 4 8 4 8Z"
            fill="#48BB78"
            transform="rotate(-30 6 8)" // Ajusta la oreja izquierda
          />
          <path
            d="M20 8C20 5 18 2 16 4C18 6 20 8 20 8Z"
            fill="#48BB78"
            transform="rotate(30 18 8)" // Ajusta la oreja derecha
          />
          {/* Boca del perro, separada del círculo principal */}
          <path
            d="M10 12Q12 14 14 12"
            stroke="#48BB78"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            transform="translate(0 -3)" // Ajusta la posición de la boca
          />
        </svg>
        <h1 className="text-4xl font-bold text-gray-800">Mi Mascota</h1>
        <p className="mt-4 text-gray-600 text-lg">Rescatando vidas</p>
      </div>
    </div>
  );
}

export default Logo;





























