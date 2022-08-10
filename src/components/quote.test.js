import { render, screen } from '@testing-library/react';
import Quote from './quote.js';

test('renders the quote page', () => {
  render(<Quote />);
  expect(screen.getByText("As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality. — Albert Einstein")).toBeInTheDocument()
});
