import React, { useState } from 'react';

const Registro = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccessMessage('');

    try {
      const response = await fetch('https://mi-mascota-backend.onrender.com/api/registro', { // URL actualizada
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error('Error al registrar usuario');
      }

      const data = await response.json();
      console.log('Respuesta del servidor:', data);
      setSuccessMessage('¡Te has registrado con éxito!');
    } catch (e) {
      setError('Ocurrió un error al enviar el formulario.');
      console.error('Error:', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        <button
          type="submit"
          style={{ backgroundColor: 'green', color: 'white', padding: '10px', border: 'none', cursor: 'pointer' }}
          disabled={loading}
        >
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>
      </form>
    </section>
  );
};

export default Registro;
