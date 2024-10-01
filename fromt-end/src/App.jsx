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

  // Cambia la URL a la de tu backend en Render
  const API_BASE_URL = 'https://mi-mascota-backend.onrender.com';

  // Fetch data based on active section
  const fetchData = async (url, setState) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error fetching data from ${url}`);
      }
      const data = await response.json();
      setState(data);
    } catch (error) {
      console.error(`Error fetching data: ${error.message}`);
    }
  };

  // Effect to fetch data based on active section
  useEffect(() => {
    switch (activeSection) {
      case 'veterinarias':
        fetchData(`${API_BASE_URL}/api/veterinarias`, setVeterinarias);
        break;
      case 'adopciones':
        fetchData(`${API_BASE_URL}/api/adopciones`, setAdopciones);
        break;
      case 'mascotasPerdidas':
        fetchData(`${API_BASE_URL}/api/mascotasPerdidas`, setMascotasPerdidas);
        break;
      case 'registro': 
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
        {activeSection === 'mascotasPerdidas' && (
          <MascotasPerdidas mascotasPerdidas={mascotasPerdidas} />
        )}
        {activeSection === 'adopciones' && (
          <Adopciones adopciones={adopciones} />
        )}
        {activeSection === 'veterinarias' && (
          <Veterinarias veterinarias={veterinarias} />
        )}
        {activeSection === 'refugios' && <Refugios />}
        {activeSection === 'registro' && <Registro />} {/* componente de Registro */}
      </main>

      <footer className="bg-green-500 p-4 text-center text-white">
        <p>2024 Rescate de Mascotas</p>
      </footer>
    </div>
  );
}

export default App;
