import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render without crash', () => {
  render(<App />);
});
