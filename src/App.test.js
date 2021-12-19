import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// initialize
test('renders press space bar', () => {
  render(<App />);
  const linkElement = screen.getByText(/Press the spacebar/i);
  expect(linkElement).toBeInTheDocument();
});

// card picker by keyboard
test('pick Life', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'L', code: 'KeyL'})
  const linkElement = screen.getByText(/Life/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Random', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'R', code: 'KeyR'})
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Deep', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'D', code: 'KeyD'})
  const linkElement = screen.getByText(/Deep/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Experiences', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'E', code: 'KeyE'})
  const linkElement = screen.getByText(/Experiences/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick If you could...', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'I', code: 'KeyI'})
  const linkElement = screen.getByText(/If you could.../i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Would you rather...', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'W', code: 'KeyW'})
  const linkElement = screen.getByText(/Would you rather.../i);
  expect(linkElement).toBeInTheDocument();
});