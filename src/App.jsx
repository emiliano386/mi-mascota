// src/App.jsx
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import SobreNosotros from './components/SobreNosotros';
import Registro from './components/Registro';
import Refugios from './components/Refugios';
import Veterinarias from './components/Veterinarias';
import Adopciones from './components/Adopciones'; // Importa el componente Adopciones

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
        {activeSection === 'adopciones' && <Adopciones />} {/* Renderiza el componente Adopciones */}
        {activeSection === 'veterinarias' && <Veterinarias />}
        {activeSection === 'refugios' && <Refugios />}
        {activeSection === 'registro' && <Registro />}
      </main>

      <footer style={{ backgroundColor: 'green', padding: '20px', textAlign: 'center', color: 'white' }}>
        <p>2024 Rescate de Mascotas</p>
      </footer>
    </div>
  );
}

export default App;

