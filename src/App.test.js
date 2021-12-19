import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// initialize
test('renders press space bar', () => {
  render(<App />);
  const linkElement = screen.getByText(/Press the spacebar/i);
  expect(linkElement).toBeInTheDocument();
});

// card picker by keyboard
test('pick Random', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'R', code: 'KeyR'})
  const linkElement = screen.getByText(/Random/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Hopes & Dreams', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'H', code: 'KeyH'})
  const linkElement = screen.getByText(/Hopes & Dreams/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Self-Expression', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'S', code: 'KeyS'})
  const linkElement = screen.getByText(/Self-Expression/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Reflection', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'X', code: 'KeyX'})
  const linkElement = screen.getByText(/Reflection/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Likes and Dislikes', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'L', code: 'KeyL'})
  const linkElement = screen.getByText(/Likes & Dislikes/i);
  expect(linkElement).toBeInTheDocument();
});

test('pick Emotional Intelligence', () => {
  render(<App />);
  fireEvent.keyDown(document, {key: 'E', code: 'KeyE'})
  const linkElement = screen.getByText(/Emotional Intelligence/i);
  expect(linkElement).toBeInTheDocument();
});