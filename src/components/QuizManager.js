
import {React,useState} from "react";
import { Button, Card, CardContent, Typography, Box, TextField } from "@mui/material";
const QuizManager = () => {
    const [score, setScore] = useState(0);
    const [question, setQuestion] = useState("5 + 3"); // will generate it from Question component
    const [answer, setAnswer] = useState(8); // will make it dynamic
    const [userInput, setUserInput] = useState("");
    const [feedback, setFeedback] = useState("");
    const handleSubmit = () => {
        if (parseInt(userInput) === answer) {
            setScore(score + 1);
            setFeedback("Correct! 🎉");
        } else {
            setFeedback("Oops! Try again.");
        }
        // Reset input and fetch new question logic here
        setUserInput("");
    };
    return (
        <Box sx={{ maxWidth: 600, margin: "20px auto", textAlign: "center" }}>
            <Card sx={{ padding: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        Math Master Quiz  🧮
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: "20px" }}>
                        Question: {question}
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
                        Score: {score}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
} ;
export default QuizManager;