
import { React, useState } from "react";
import { Button, Card, CardContent, Typography, Box, TextField } from "@mui/material";
import questions from "./questions";
const QuizManager = () => {
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState(questions[0]); // Getting questions from questions.js
    const [userInput, setUserInput] = useState("");
    const [feedback, setFeedback] = useState("");
    // Function to get a random question
    function getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        return questions[randomIndex];
    }
    // Function to load a new random question
    function loadNextQuestion() {
        setQuestion(getRandomQuestion());
        setFeedback(""); // Clear feedback for the next question
        setUserInput(""); // Clear the input field
    }

    const handleSubmit = () => {
        if (userInput === question.answer) { // Compare user input with the correct answer
            setScore(score + 1);
            setFeedback("Correct! 🎉");
        } else {
            setFeedback(`Oops! The correct answer was ${question.answer}.`);
        }
        setTimeout(() => loadNextQuestion(), 2000); // Load the next question after 2 seconds
    };
    return (
        <Box sx={{ maxWidth: 600, margin: "20px auto", textAlign: "center" }}>
            <Card sx={{ padding: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Math Master Quiz  🧮
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: "20px" }}>
                        Question: {question.question}
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
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ marginRight: "10px" }}
                    >
                        Submit
                    </Button>
                    <Typography variant="h6" color="secondary" sx={{ marginTop: "20px" }}>
                        {feedback}
                    </Typography>
                    <Typography variant="body1" sx={{ marginTop: "20px" }}>
                        Your score: {score}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
};
export default QuizManager;