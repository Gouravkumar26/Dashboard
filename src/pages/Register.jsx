// File: src/pages/Register.jsx
import React from 'react';

export default function Register() {
  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form className="flex flex-col gap-4">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="Email" />
        <input className="border p-2 rounded" placeholder="Password" type="password" />
        <button className="bg-green-500 text-white py-2 px-4 rounded">Register</button>
      </form>
    </div>
  );
}
