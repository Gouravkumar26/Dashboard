
// File: src/pages/Analytics.jsx
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTaskContext } from '../context/TaskContext';

const COLORS = ['#00C49F', '#FF8042'];

export default function Analytics() {
  const { tasks } = useTaskContext();
  const completed = Math.floor(tasks.length * 0.4);
  const pending = tasks.length - completed;

  const data = [
    { name: 'Completed', value: completed },
    { name: 'Pending', value: pending },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Task Analytics</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}