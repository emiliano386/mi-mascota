import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SobreNosotros from './components/SobreNosotros';
import Registro from './components/Registro';
import Refugios from './components/Refugios';
import Veterinarias from './components/Veterinarias';
import Adopciones from './components/Adopciones';
import MascotasPerdidas from './components/MascotasPerdidas';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [veterinarias, setVeterinarias] = useState([]);
  const [adopciones, setAdopciones] = useState([]);
  const [mascotasPerdidas, setMascotasPerdidas] = useState([]);

  // Fetch veterinarias data
  const fetchVeterinarias = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/veterinarias');
      if (!response.ok) {
        throw new Error('Error fetching veterinarias');
      }
      const data = await response.json();
      setVeterinarias(data);
    } catch (error) {
      console.error('Error fetching veterinarias:', error);
    }
  };

  // Fetch adopciones data
  const fetchAdopciones = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/adopciones');
      if (!response.ok) {
        throw new Error('Error fetching adopciones');
      }
      const data = await response.json();
      setAdopciones(data);
    } catch (error) {
      console.error('Error fetching adopciones:', error);
    }
  };

  // Fetch mascotas perdidas data
  const fetchMascotasPerdidas = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/mascotas-perdidas'); 
      if (!response.ok) {
        throw new Error('Error fetching mascotas perdidas');
      }
      const data = await response.json();
      setMascotasPerdidas(data);
    } catch (error) {
      console.error('Error fetching mascotas perdidas:', error);
    }
  };

  // Effect to fetch data based on active section
  useEffect(() => {
    switch (activeSection) {
      case 'veterinarias':
        fetchVeterinarias();
        break;
      case 'adopciones':
        fetchAdopciones();
        break;
      case 'mascotas-perdidas':
        fetchMascotasPerdidas();
        break;
      default:
        break;
    }
  }, [activeSection]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar setActiveSection={setActiveSection} />

      <main className="flex flex-col flex-1 p-4">
        {activeSection === 'home' && <Home />}
        {activeSection === 'sobre-nosotros' && <SobreNosotros />}
        {activeSection === 'mascotas-perdidas' && (
          <MascotasPerdidas mascotasPerdidas={mascotasPerdidas} />
        )}
        {activeSection === 'adopciones' && (
          <Adopciones adopciones={adopciones} />
        )}
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
