// src/components/Veterinarias.jsx
import React from 'react';

// Lista de veterinarias de ejemplo
const veterinarias = [
    {
        nombre: 'Budhapets',
        direccion: 'Av. Tte. Gral. D. Álvarez 2077, CABA',
        telefono: '011 4583-5595',
      },
      {
        nombre: 'Asistcan Veterinaria',
        direccion: 'Miralla 1058, CABA',
        telefono: '011 4477-1344',
      },

        {
          nombre: 'Veterinaria EVET',
          direccion: 'Av. Dr. Ricardo Balbín 660, San Miguel',
          telefono: '011 6008-4781',
        },
        {
          nombre: 'HV Hospital Veterinario',
          direccion: 'Gdor. Ugarte 2152, Olivos',
          telefono: '011 4791-5593',
        },
        {
          nombre: 'Veterinario a Domicilio',
          direccion: 'Mariano Pelliza, Olivos',
          telefono: '011 4023-6262',
        },
        {
          nombre: 'Veterinaria Paraná',
          direccion: 'Paraná 6580, Villa Adelina',
          telefono: '011 4587-4218',
        },
        {
            nombre: 'Veterinaria Avi',
            direccion: 'Av. de Mayo 1885, B1704 Ramos Mejía',
            telefono: '011 15-4992-5322',
          },
          {
            nombre: 'Veterinaria En Morón',
            direccion: 'Gral. José de San Martín 592, Morón',
            telefono: '011 4629-6044',
          },
          {
            nombre: 'Veterinaria Avi 24 Sáenz Peña',
            direccion: 'Av. Gral. Mosconi 2802, Sáenz Peña',
            telefono: '011 7518-2528',
          },
          {
            nombre: 'Veterinaria ADAP 24 hs.',
            direccion: 'Av. Bartolomé Mitre 1002, Moreno',
            telefono: '0237 463-9838',
          },
          {
            nombre: 'Veterinaria Nocturna Morón',
            direccion: 'Gral. José de San Martín 592, Morón',
            telefono: '011 4629-6044',
          },
          {
            nombre: 'Hospital Veterinario del Oeste',
            direccion: 'Av. Gral. Paz 11939, Lomas del Mirador',
            telefono: '011 4488-8269',
          },
          {
            nombre: 'Veterinaria Mora',
            direccion: 'Andrade 993, Quilmes',
            telefono: '011 5375-7817',
          },
          {
            nombre: 'Centro Veterinario Avellaneda',
            direccion: 'Gral. Paz 224, Avellaneda',
            telefono: '011 4222-9499',
          },
          {
            nombre: 'Clínica Veterinaria Escalada',
            direccion: 'Av. Presb Pedro F. Uriarte 418, Banfield',
            telefono: '011 4248-0330',
          },
          {
            nombre: 'Veterinaria en Berazategui 24 hs',
            direccion: 'Av. 14 2577, Berazategui Oeste',
            telefono: '011 4256-7863',
          },



  // Agrega más veterinarias aquí
];

const Veterinarias = () => {
  return (
    <section className="bg-white p-5 mb-5">
      <h2 className="text-xl font-bold mb-4">Veterinarias Abiertas 24hs</h2>
      <ul className="list-disc pl-5">
        {veterinarias.map((veterinaria, index) => (
          <li key={index} className="mb-4">
            <h3 className="font-semibold">{veterinaria.nombre}</h3>
            <p><strong>Dirección:</strong> {veterinaria.direccion}</p>
            <p><strong>Teléfono:</strong> {veterinaria.telefono}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Veterinarias;
