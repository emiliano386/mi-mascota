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
    <nav style={{ backgroundColor: 'green', padding: '10px' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
        {sections.map(section => (
          <li key={section.name} style={{ margin: '0 10px' }}>
            <button
              onClick={() => setActiveSection(section.name)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}
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
