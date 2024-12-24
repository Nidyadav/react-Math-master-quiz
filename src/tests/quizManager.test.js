
import { fireEvent,render, screen } from '@testing-library/react';
import QuizManager from "../components/QuizManager";
import easyQuestions from '../components/easyQuestions';
import mediumQuestions from '../components/mediumQuestions';
import hardQuestions from '../components/hardQuestions';
describe('Quiz Manager Component correctly renders when level is empty', () => {
    const defaultProps = {
        level:"",
    }
    it('renders the screen correctly when level is not yet selected',()=>{
      render(<QuizManager {...defaultProps}/>);
      expect(screen.getByText(/Welcome to Math Master! 🧮/i)).toBeInTheDocument;
      const button = screen.getByText(/kids\(age 5-8\)/i); // Case-insensitive match
      expect(button).toBeInTheDocument();
      expect(screen.getByText(/kids\(age 9-12\)/i)).toBeInTheDocument;
      expect(screen.getByText(/kids\(age 13-16\)/i)).toBeInTheDocument;
    });   
    it('renders the screen correctly  when level is easy',()=>{
        render(<QuizManager level="Easy"/>);
        //expect(screen.getByText(/Welcome to Math Master! 🧮/i)).not.toBeInTheDocument;
        fireEvent.click(screen.getByText(/kids\(age 5-8\)/i));
        expect(screen.getByText(easyQuestions[0].question)).toBeInTheDocument();
      });  
      it('renders the screen correctly  when level is Medium',()=>{
        render(<QuizManager level="Medium"/>);
        fireEvent.click(screen.getByText(/kids\(age 9-12\)/i));
        expect(screen.getByText(mediumQuestions[0].question)).toBeInTheDocument();
      });     
      it('renders the screen correctly  when level is Hard',()=>{
        render(<QuizManager level="Medium"/>);
        fireEvent.click(screen.getByText(/kids\(age 13-16\)/i));
        expect(screen.getByText(hardQuestions[0].question)).toBeInTheDocument();
      });         
});