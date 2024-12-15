import { render, screen, fireEvent } from '@testing-library/react';
import ScoreCard from '../components/score/ScoreCard';
describe('ScoreCard is rendered correctly',()=>{
    const mockTryAgain = jest.fn();
it('renders score and total questions',()=>{
    render(<ScoreCard score={7} totalQuestions={10} onTryAgain={mockTryAgain} />);
    expect(screen.getByText(/score:/i)).toHaveTextContent('Your Score:7🎉');
});
it('calls tryAgain when tryAgain button is clicked',()=>{
    render(<ScoreCard score={7} totalQuestions={10} onTryAgain={mockTryAgain} />);
    const button = screen.getByRole('button', { name: /Try again!/i });
    fireEvent.click(button);
    expect(mockTryAgain).toHaveBeenCalledTimes(1);
});
});