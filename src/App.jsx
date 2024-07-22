// src/App.jsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SobreNosotros from './components/SobreNosotros';
import Registro from './components/Registro';

function App() {
  const [activeSection, setActiveSection] = useState('sobre-nosotros');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

    
      <NavBar setActiveSection={setActiveSection} />

      <main style={{ flex: '1', padding: '20px' }}>

        {activeSection === 'sobre-nosotros' && <SobreNosotros />}

        {activeSection === 'mascotas-perdidas' && (
          <section style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
            <h2>Mascotas Perdidas</h2>
            <p>Información sobre mascotas perdidas.</p>
          </section>
        )}

        {activeSection === 'adopciones' && (
          <section style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
            <h2>Adopciones</h2>
            <p>Explora mascotas disponibles para adopción.</p>
          </section>
        )}

        {activeSection === 'veterinarias' && (
          <section style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
            <h2>Veterinarias</h2>
            <p>Encuentra veterinarias cercanas.</p>
          </section>
        )}


        {activeSection === 'refugios' && (
          <section style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
            <h2>Refugios</h2>
            <p>Información sobre refugios de mascotas.</p>
          </section>
        )}


        {activeSection === 'registro' && <Registro />}
      </main>
      <footer style={{ backgroundColor: 'green', padding: '20px', textAlign: 'center', color: 'white' }}>
        <p> 2024 Rescate de Mascotas</p>
      </footer>
    </div>
  );
}

export default App;
