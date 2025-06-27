import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.username === username.trim())) {
      alert('Username already exists!');
      return;
    }
    const newUser = { username: username.trim() };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    navigate('/');
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
        <h3 className="text-center mb-3">Register</h3>
        <form onSubmit={handleRegister}>
          <div className="mb-3">
            <input className="form-control" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <button className="btn btn-success w-100" type="submit">Register</button>
        </form>
        <p className="mt-3 text-center">
          Have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

