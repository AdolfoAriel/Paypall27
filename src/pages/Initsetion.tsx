import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

function LoginForm({ onLogin }: LoginFormProps) {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(formData.email, formData.password);
    setFormData({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Correo electrónico:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="password">Contraseña:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <br />
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

// Aquí se agrega la prop onLogin al componente LoginForm
function App() {
  const handleLogin = (email: string, password: string) => {
    console.log(`Inicio de sesión con correo electrónico: ${email} y contraseña: ${password}`);
  };

  return (
    <div>
      <h1>Formulario de inicio de sesión</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
}

export default App;
