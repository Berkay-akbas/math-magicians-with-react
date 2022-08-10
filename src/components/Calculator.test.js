import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

test('renders the quote page', () => {
  render(<Calculator />);
  expect(screen.getByText("Let's do some math!")).toBeInTheDocument()
});
