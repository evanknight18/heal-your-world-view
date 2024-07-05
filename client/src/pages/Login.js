import React, { useState } from 'react';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={onSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <input
        type="email"
        name="email"
        value={email}
        onChange={onChange}
        placeholder="Email"
        required
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={onChange}
        placeholder="Password"
        required
        className="w-full p-2 mb-4 border rounded"
      />
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Login</button>
    </form>
  );
};

export default Login;
