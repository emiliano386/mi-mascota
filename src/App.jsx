// src/App.jsx
import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SobreNosotros from './components/SobreNosotros';
import Registro from './components/Registro';
import Refugios from './components/Refugios';
import Veterinarias from './components/Veterinarias';
import Adopciones from './components/Adopciones';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [veterinarias, setVeterinarias] = useState([]);

  const fetchVeterinarias = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/veterinarias');
      if (!response.ok) {
        throw new Error('Red error');
      }
      const data = await response.json();
      setVeterinarias(data);
    } catch (error) {
      console.error('Error fetching veterinarias:', error);
    }
  };

  useEffect(() => {
    if (activeSection === 'veterinarias') {
      fetchVeterinarias();
    }
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar setActiveSection={setActiveSection} />

      <main className="flex flex-col flex-1 p-4">
        {activeSection === 'home' && <Home />}
        {activeSection === 'sobre-nosotros' && <SobreNosotros />}
        {activeSection === 'mascotas-perdidas' && (
          <section className="bg-white p-4 mb-4">
            <h2>Mascotas Perdidas</h2>
            <p>Información sobre mascotas perdidas.</p>
          </section>
        )}
        {activeSection === 'adopciones' && <Adopciones />}
        {activeSection === 'veterinarias' && (
          <Veterinarias veterinarias={veterinarias} />
        )}
        {activeSection === 'refugios' && <Refugios />}
        {activeSection === 'registro' && <Registro />}
      </main>

      <footer className="bg-green-500 p-4 text-center text-white">
        <p>2024 Rescate de Mascotas</p>
      </footer>
    </div>
  );
}

export default App;
