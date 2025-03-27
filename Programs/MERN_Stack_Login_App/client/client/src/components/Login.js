import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api';
import '.././App.css'; // Import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("event fired")
      const { data } = await API.post('/auth/login', { email, password });
      console.log(data);
      localStorage.setItem('token', data.token);  // set token localStorage for authenticated requests
      localStorage.setItem('userType', data.userType);

      if (data.userType === 'admin') {
        navigate('/admin');
      } else if (data.userType === 'customer') {
        navigate('/customer');
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;