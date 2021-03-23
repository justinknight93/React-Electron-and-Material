import { render, screen } from '@testing-library/react';
import Home from '../src/pages/home.js';

test('renders page', () => {
  render(<Home />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
