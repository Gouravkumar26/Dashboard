// File: src/pages/Login.jsx
import React from 'react';

export default function Login() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form className="flex flex-col gap-4">
        <input className="border p-2 rounded" placeholder="Email" />
        <input className="border p-2 rounded" placeholder="Password" type="password" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
}