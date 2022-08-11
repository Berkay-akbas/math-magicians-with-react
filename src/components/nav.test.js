import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './nav';

test('renders the home page', () => {
  render(
    <Router>
      <Nav />
    </Router>,
  );
  expect(screen.getByText('MATH MAGICIANS')).toBeInTheDocument();
});
