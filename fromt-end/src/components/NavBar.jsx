import React from 'react';

const NavBar = ({ setActiveSection }) => {
  const sections = [
    { name: 'home', label: 'Home' },
    { name: 'mascotas-perdidas', label: 'Mascotas Perdidas' },
    { name: 'adopciones', label: 'Adopciones' },
    { name: 'veterinarias', label: 'Veterinarias' },
    { name: 'refugios', label: 'Refugios' },
    { name: 'registro', label: 'Registro' },
    { name: 'sobre-nosotros', label: 'Sobre Nosotros' },
  ];

  return (
    <nav className="bg-green-600 p-4">
      <ul className="flex flex-wrap justify-center list-none p-0">
        {sections.map(section => (
          <li key={section.name} className="mx-2">
            <button
              onClick={() => setActiveSection(section.name)}
              className="text-white bg-transparent border-none cursor-pointer hover:bg-green-500 px-3 py-2 rounded"
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
