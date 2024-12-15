import Quiz from "../components/Quiz/Quiz";
import { act,fireEvent,render, screen, within } from '@testing-library/react';
import ScoreCard from "../components/score/ScoreCard";

describe('Quiz Component correctly renders', () => {
    const mockResetQuiz = jest.fn(); // Mock the resetQuiz function
    const mockHandleSubmit = jest.fn(); // Mock the handleSubmit function
    //jest.mock('../components/score/ScoreCard', () => jest.fn(() => <div>Mocked ScoreCard</div>)); 
    // jest.mock('../components/score/ScoreCard', () => jest.fn(() => 'Mocked ScoreCard'));

    // const mockProps = {
    //     score: 7,
    //     questions: Array(10).fill({}),
    //     onTryAgain: mockResetQuiz
    // };
    const defaultProps = {
        showScore: false,
        score: 7,
        questions: Array(10).fill({}),
        currentQuestion: 0,
        question: "What is the square of 4?",
        userInput: "",
        setUserInput: jest.fn(),
        handleSubmit: mockHandleSubmit,
        resetQuiz: mockResetQuiz,
    };

    it('renders the quiz card when showScore is false', () => {
        render(<Quiz {...defaultProps} />);

        // Ensure the quiz card renders
        expect(screen.getByText(/Math Master Quiz 🧮/i)).toBeInTheDocument();
        expect(screen.getByText(/Question 1\/10/i)).toBeInTheDocument();
        expect(screen.getByText(/What is the square of 4?/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/your answer/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
    });
    it('enables input button when input is provided',()=>{
        render(<Quiz{...defaultProps} userInput="16"/>)
        const submitButton=screen.getByRole('button',{name:/submit/i});
        expect(submitButton).toBeEnabled;
    });
    it('calls handleSubmit when submit button is clicked',()=>{
        render(<Quiz{...defaultProps} userInput="16"/>)
        const submitButton=screen.getByRole('button',{name:/submit/i});
        fireEvent.click(submitButton);
        expect(mockHandleSubmit).toHaveBeenCalledTimes(1);
    });
    // it('calls scoreCard when showScore is true',()=>{
       
    //     render(<Quiz{...defaultProps} showScore={true}/>);
    //     //render(<ScoreCard/>);
    //     expect(screen.getByText('/Mocked ScoreCard/i')).toBeInTheDocument();
    // });
});

