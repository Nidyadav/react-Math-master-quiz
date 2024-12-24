
import { React, useState } from "react";
import { Button, Card, CardContent, Typography, Box} from "@mui/material";
import hardQuestions from "./hardQuestions";
import easyQuestions from "./easyQuestions";
import mediumQuestions from "./mediumQuestions";
import Quiz from "./Quiz/Quiz";
const QuizManager = () => {

    const [level, setLevel] = useState(""); // Track the selected difficulty level
    const [questions, setQuestions] = useState([]); // Store the selected questions
    const handleStartQuiz = (selectedLevel) => {
        setLevel(selectedLevel);

        // Load questions based on selected level
        switch (selectedLevel) {
            case "Easy":
                setQuestions(easyQuestions);
                break;
            case "Medium":
                setQuestions(mediumQuestions);
                break;
            case "Hard":
                setQuestions(hardQuestions);
                break;
            default:
                setQuestions([]);
        }
    };
    return (
            <div className="Mathapp">
            {level === "" ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                    sx={{ backgroundColor: "#f5f5f5", padding: "20px" }}
                >
                    <Card sx={{ padding: "20px", maxWidth: "400px", width: "100%", textAlign: "center" }}>
                        <CardContent>
                            <Typography variant="h4" color="primary" gutterBottom>
                                Welcome to Math Master! 🧮
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: "20px" }}>
                                Choose a level based on your age.
                            </Typography>
                            <Button
                        
                                variant="contained"
                                color="primary"
                                sx={{ marginBottom: "10px", width: "100%" }}
                                onClick={() => handleStartQuiz("Easy")}
                            >
                            Kids(Age 5-8)
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{ marginBottom: "10px", width: "100%" }}
                                onClick={() => handleStartQuiz("Medium")}
                            >
                                kids(Age 9-12)
                            </Button>
                            <Button
                                variant="contained"
                                color="success"
                                sx={{ width: "100%" }}
                                onClick={() => handleStartQuiz("Hard")}
                            >
                                kids(Age 13-16)
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            ) : (
                <Quiz questions={questions} level={level} />
            )}
        </div>
    );

};
export default QuizManager;