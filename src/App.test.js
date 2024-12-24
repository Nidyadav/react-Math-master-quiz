import { render, screen, within } from '@testing-library/react';
import App from './App';
import Quiz from './components/Quiz/Quiz';

test('renders Math app', () => {
  render(<App />);
  const appDiv = screen.getByRole('heading', { level:4});
  const heading=within(appDiv).getByText('Welcome to Math Master! 🧮');
  expect(heading).toBeInTheDocument();
  expect(screen.getByText(/kids\(age 5-8\)/i)).toBeInTheDocument;
  expect(screen.getByText(/kids\(age 9-12\)/i)).toBeInTheDocument;
  expect(screen.getByText(/kids\(age 13-16\)/i)).toBeInTheDocument;
  });
