import { render, screen, fireEvent } from '@testing-library/react';
import ScoreCard from '../components/score/ScoreCard';
describe('ScoreCard is rendered correctly',()=>{
    beforeEach(() => {
        // Mock localStorage to control saved scores
        const mockHighScores = [
          { name: 'Alice', Score: 95 },
          { name: 'Bob', Score: 90 },
        ];
        Storage.prototype.getItem = jest.fn(() => JSON.stringify(mockHighScores));
        Storage.prototype.setItem = jest.fn();
      });
    const mockTryAgain = jest.fn();
    const handleSave=jest.fn();
    
it('renders score and total questions',()=>{
    render(<ScoreCard score={7} totalQuestions={10} onTryAgain={mockTryAgain} />);
    expect(screen.getByText(/score:/i)).toHaveTextContent('Your Score:7🎉');
});
it('calls tryAgain when Try again button is clicked',()=>{
    render(<ScoreCard score={7} totalQuestions={10} onTryAgain={mockTryAgain} />);
    const button = screen.getByRole('button', { name: /Try again!/i });
    fireEvent.click(button);
    expect(mockTryAgain).toHaveBeenCalledTimes(1);
});
it('should show Your name text box and save button when showScore  is false',()=>{
    render(<ScoreCard score={7} totalQuestions={10} onTryAgain={mockTryAgain} showScoreTable={false}/>);
    expect(screen.getByText(/Enter your name below/i)).toBeInTheDocument;
    expect(screen.getByRole('textbox',{name:/Your name/i})).toBeInTheDocument;
    const saveButton=screen.getByRole('button',{name:/Save/i}).toBeInTheDocument;
});
it('calls handleSave when Save button is clicked',()=>{
    render(<ScoreCard score={7} totalQuestions={10} onTryAgain={mockTryAgain} showScoreTable={false}/>);
    const button = screen.getByRole('button', { name: /Save/i });
    fireEvent.click(button);
    expect(handleSave).toHaveBeenCalled;
});

it('should show table with saved names when showScore  is true', ()=>{
    render(<ScoreCard score={7} totalQuestions={10} onTryAgain={mockTryAgain} />);
    // Simulate saving the score to trigger the table rendering
    const input = screen.getByLabelText(/Your Name/i);
    const saveButton = screen.getByRole('button', { name: /save/i });

    fireEvent.change(input, { target: { value: 'John Doe' } });
    fireEvent.click(saveButton);
    screen.debug();
     // Assert that the table is now rendered
     const table = screen.getByRole('table');
     expect(table).toBeInTheDocument();
     const rows=screen.getAllByRole('row');
     expect(rows).toHaveLength(4);
     expect(screen.getByText('John Doe')).toBeInTheDocument;
  
  });
});