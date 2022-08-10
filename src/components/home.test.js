import { render, screen } from '@testing-library/react';
import Home from './home';

test('renders the home page', () => {
  render(<Home />);
  expect(screen.getByRole('heading')).toHaveTextContent(/Welcome to our page!/);
});
