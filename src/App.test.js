import { render, screen } from '@testing-library/react';
import App from './App';

test('renders press space bar', () => {
  render(<App />);
  const linkElement = screen.getByText(/Press the spacebar/i);
  expect(linkElement).toBeInTheDocument();
});
