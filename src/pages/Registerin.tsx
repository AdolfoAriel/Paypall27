import React, { useState } from 'react';

interface User {
  name: string;
  email: string;
  password: string;
}

function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData: User = { name, email, password };
    // Aquí agregarías la lógica para registrar al usuario
    // ...
    setUser(userData);
  };

  if (user) {
    return (
      <div>
        <p>Usuario registrado con éxito:</p>
        <ul>
          <li>Nombre: {user.name}</li>
          <li>Correo electrónico: {user.email}</li>
        </ul>
      </div>
    );
  } else {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <br />
        <label htmlFor="email">Correo electrónico:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <button type="submit">Registrarse</button>
      </form>
    );
  }
}

export default RegisterForm;
