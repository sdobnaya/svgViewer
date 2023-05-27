import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders textarea', () => {
  render(<App />);
  const textareaElement = screen.getByRole('textbox');
  expect(textareaElement).toBeInTheDocument();
});
