import React, { useState } from 'react';

const Registro = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

    try {
      // Simulación de llamada a una API
      // Reemplaza esto con tu llamada real a la API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Formulario de registro enviado:', form);
    } catch (e) {
      setError('Ocurrió un error al enviar el formulario.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={{ backgroundColor: 'white', padding: '20px', marginBottom: '20px' }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Correo Electrónico</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
            required
          />
        </div>
        <div>
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px' }}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
