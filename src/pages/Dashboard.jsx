// File: src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { nanoid } from 'nanoid';

export default function Dashboard() {
  const { tasks, addTask, deleteTask } = useTaskContext();
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      addTask({ id: nanoid(), title });
      setTitle('');
    }
  };
return (
  <div className="min-h-screen flex items-center justify-center bg-white px-4">
    <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Dashboard</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add new task"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
          >
            <span className="text-gray-700">{task.title}</span>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-600 hover:text-red-800 font-medium transition"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  </div>
);


}