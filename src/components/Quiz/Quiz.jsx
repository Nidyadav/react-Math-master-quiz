import { Card } from "react-bootstrap";
import questions from "../questions";
import { React, useState } from "react";
import { CardContent, TextField, Typography } from "@mui/material";
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userInput, setUserInput] = useState("");
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);
    const { question, answer } = questions[currentQuestion];
    function loadNextQuestion() {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
        setUserInput("");
    }
    const handleSubmit = () => {
        if (userInput === answer) {
            setScore(score + 1);
        }
        setTimeout(() => loadNextQuestion(), 1000);
    };
    return (
        <div>
            {showScore ? (
                <div className='quiz-score'>
                    You scored  {score} out of {questions.length}
                    <span hidden={score<questions.length/2}>🎉</span>
                </div>
            ) : (
                <div className="quiz-container">
                    <Card className="quiz-card">
                        <CardContent>
                            <Typography variant="h4" className="quiz-title">
                                Math Master Quiz 🧮
                            </Typography>
                            <Typography variant="h8" className="question-count">Question {currentQuestion+1}/{questions.length}</Typography> 
                            <Typography variant="h6" className="quiz-question">
                                {question}
                            </Typography>
                            <TextField
                                label="Your answer"
                                variant="outlined"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                fullWidth
                                className="quiz-input" />
                            <button
                                variant="Contained"
                                color="primary"
                                onClick={handleSubmit}
                                className="quiz-button"
                                disabled={!userInput.trim()}>
                                Submit </button> <br></br>
                            </CardContent>
                    </Card>
                </div>)}
        </div>
    );
} export default Quiz;