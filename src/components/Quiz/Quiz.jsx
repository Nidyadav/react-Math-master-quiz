
//import questions from "../hardQuestions";
import { React, useState } from "react";
import { Button, Card, CardContent, Typography, Box, TextField } from "@mui/material";
import ScoreCard from "../score/ScoreCard";

function Quiz({ questions,level}) {
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
    const resetQuiz = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowScore(false);
    };
    const handleSubmit = () => {
        if (parseInt(userInput) === answer) {
            setScore(score + 1);
        }
        setTimeout(() => loadNextQuestion(), 1000);
    };
    return (
        <div>
            {showScore ? (
                <ScoreCard score={score} totalQuestions={questions.length} onTryAgain={resetQuiz} />

            ) : (
                <div>
                    <Box className="quiz-container" sx={{  textAlign: "center" }}>
                        <Card className="quiz-card">
                            <CardContent>
                                <Typography variant="h4" className="quiz-title" gutterBottom>
                                    Math Master Quiz  🧮
                                </Typography>
                                <Typography variant="h6"  gutterBottom color="red">
                                     Level: {level}
                                </Typography>
                                <Typography variant="h8" className="question-count" color="purple">Question {currentQuestion + 1}/{questions.length}</Typography>
                                <Typography variant="h6" className="quiz-question">
                                    {question}
                                </Typography>
                                <TextField
                                    label="Your Answer"
                                    variant="outlined"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    fullWidth
                                    sx={{ marginBottom: "20px" }}
                                    />
                                    <Button
                                    className="quiz-button"
                                    variant="contained"
                                    onClick={handleSubmit}
                                    disabled={!userInput.trim()}>
                                    Submit </Button> <br></br>
                            </CardContent>
                        </Card>
                    </Box>
                </div>
            )
            }
        </div>
    );
} export default Quiz;