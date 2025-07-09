
// File: src/__tests__/Counter.test.jsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

test('increments and decrements the counter', () => {
  render(<Counter />);
  const count = screen.getByText(/count: 0/i);
  expect(count).toBeInTheDocument();

  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/decrement/i));
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();
});