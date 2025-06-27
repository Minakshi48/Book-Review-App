import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';

const App = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={currentUser ? <BookListPage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/:id" element={<BookDetailPage />} />
      </Routes>
    </>
  );
};

export default App;

