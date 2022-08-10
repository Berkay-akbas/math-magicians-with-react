import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from '@testing-library/user-event'
import App from './App';

test('full app rendering/navigating', async () => {
  const user = userEvent.setup();
  render(
        <Router>
        <App />
        </Router>
      );

  // verify page content for default route
  expect(screen.getByText(/Welcome to our page!/i)).toBeInTheDocument()

  // verify page content for expected route after navigating
  await user.click(screen.getByText(/Calculator/i))
  expect(screen.getByText(/Let's do some math!/i)).toBeInTheDocument();
  await user.click(screen.getByText(/Quote/i))
  expect(screen.getByText(/As far as the laws of mathematics refer to reality, they are not certain, and as far as they are certain, they do not refer to reality. — Albert Einstein/i)).toBeInTheDocument();
})