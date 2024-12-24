import Quiz from '../components/Quiz/Quiz';
import { fireEvent,render, screen } from '@testing-library/react';
import ScoreCard from "../components/score/ScoreCard";
//import questions from "../componenets/questions";

jest.mock('../components/score/ScoreCard', () => {
    return function MockedScoreCard() {
        return <div>Mocked ScoreCard</div>;
      };
  });
  questions: [
    { id: 1,question: 'What is 2 + 2?', answer: '4' },
    { id:2, question: 'What is 3 + 5?', answer: '8' },
  ],
describe('Quiz Component correctly renders', () => {
    const mockResetQuiz = jest.fn(); // Mock the resetQuiz function
    const mockHandleSubmit = jest.fn(); // Mock the handleSubmit function

      const defaultProps = {
        showScore: false,
        score: 7,
        questions: Array(10).fill({}),
        currentQuestion: 10,
        question: "What is the square of 4?",
        userInput: "",
        setUserInput: jest.fn(),
        handleSubmit: mockHandleSubmit,
        resetQuiz: mockResetQuiz,
    };

    // it('renders the quiz card when showScore is false', () => {
    //     //render(<Quiz {...defaultProps} />);
    //       render(<Quiz {...defaultProps} level={""} questions={questions}/>);
    //     // Ensure the quiz card renders
    //     expect(screen.getByText(/Math Master Quiz 🧮/i)).toBeInTheDocument();
    //     expect(screen.getByText(/Question 1\/10/i)).toBeInTheDocument();
    //     expect(screen.getByText(/What is the square of 4?/i)).toBeInTheDocument();
    //     expect(screen.getByLabelText(/your answer/i)).toBeInTheDocument();
    //     expect(screen.getByRole('button', { name: /submit/i })).toBeDisabled();
    // });
    it('enables input button when input is provided',()=>{
        render(<Quiz{...defaultProps} userInput="16"/>)
        const submitButton=screen.getByRole('button',{name:/submit/i});
        expect(submitButton).toBeEnabled;
    });
    it('calls handleSubmit when submit button is clicked',()=>{
        render(<Quiz{...defaultProps} userInput="16"/>)
        const submitButton=screen.getByRole('button',{name:/submit/i});
        fireEvent.click(submitButton);
        expect(mockHandleSubmit).toHaveBeenCalled;
    });
    it('calls scoreCard when showScore is true',()=>{
       
        render(<Quiz{...defaultProps} userInput="16"/>);
        const submitButton = screen.getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);
        screen.debug;
        //render(<ScoreCard/>);
       // expect(screen.getByText('/ScoreCard/i')).toBeInTheDocument();
    });
   
});
// describe('Quiz Component calls score card after all questions are answered', () => {
//     const mockResetQuiz = jest.fn(); // Mock the resetQuiz function
//     const mockHandleSubmit = jest.fn(); // Mock the handleSubmit function
//     const defaultProps = {
//         showScore: true,
//     };
    
//     it('renders the score card when showScore is true', () => {
//         render(<Quiz {...defaultProps} />);
//      screen.debug();
//     const inputField = screen.getByLabelText(/Your Answer/i);
//     const submitButton = screen.getByRole('button', { name: /submit/i });
//     fireEvent.change(inputField, { target: { value: '4' } });
//     fireEvent.click(submitButton);
//     fireEvent.change(inputField, { target: { value: '8' } });
//     fireEvent.click(submitButton);
//     expect(screen.getByText(/mocked scorecard/i)).toBeInTheDocument();
//     });
// });
