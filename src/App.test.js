import { render, screen, within } from '@testing-library/react';
import App from './App';
import Quiz from './components/Quiz/Quiz';

test('renders Math app', () => {
  render(<App />);
  screen.debug();
  const appDiv = screen.getByRole('heading', { level:4});
  const heading=within(appDiv).getByText('Math Master Quiz 🧮');
  expect(heading).toBeInTheDocument();
});
