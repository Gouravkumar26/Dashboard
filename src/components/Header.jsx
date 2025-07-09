// File: src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 p-5 text-white shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">🌟 TaskManager</div>
        <div className="space-x-6 text-base">
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/analytics" className="hover:underline">Analytics</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </div>
      </div>
    </nav>
  );
}