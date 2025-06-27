import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(u => u.username === username.trim());
    if (existingUser) {
      localStorage.setItem('currentUser', JSON.stringify(existingUser));
      navigate('/');
    } else {
      alert('User not found. Please register.');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-3">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input className="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100" type="submit">Login</button>
        </form>
        <p className="mt-3 text-center">
          No account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
