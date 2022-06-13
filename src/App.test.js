import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders Postcode Search', () => {
  render(<App />);
  const titleElement = screen.getByText(/Postcode Search/i);
  expect(titleElement).toBeInTheDocument();
});
