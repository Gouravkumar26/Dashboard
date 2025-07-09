// File: src/components/Counter.jsx
import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-4 border rounded max-w-xs mx-auto mt-6">
      <p className="text-lg mb-2">Count: {count}</p>
      <button className="bg-blue-500 text-white px-3 py-1 mr-2 rounded" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}