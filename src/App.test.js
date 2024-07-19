import { render, screen } from '@testing-library/react';
import WelcomePage from './pages/Welcome/WelcomePage';

test('renders learn react link', () => {
  render(<WelcomePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
