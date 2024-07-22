// src/components/NavBar.jsx
import React from 'react';

const NavBar = ({ setActiveSection }) => {
  return (
    <nav style={{ backgroundColor: 'green', padding: '10px' }}>
      <ul style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', padding: 0 }}>
        <li style={{ margin: '0 10px' }}>
          <button onClick={() => setActiveSection('sobre-nosotros')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
            Sobre Nosotros
          </button>
        </li>
        <li style={{ margin: '0 10px' }}>
          <button onClick={() => setActiveSection('mascotas-perdidas')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
            Mascotas Perdidas
          </button>
        </li>
        <li style={{ margin: '0 10px' }}>
          <button onClick={() => setActiveSection('adopciones')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
            Adopciones
          </button>
        </li>
        <li style={{ margin: '0 10px' }}>
          <button onClick={() => setActiveSection('veterinarias')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
            Veterinarias
          </button>
        </li>
        <li style={{ margin: '0 10px' }}>
          <button onClick={() => setActiveSection('refugios')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
            Refugios
          </button>
        </li>
        <li style={{ margin: '0 10px' }}>
          <button onClick={() => setActiveSection('registro')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }}>
            Registro
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
