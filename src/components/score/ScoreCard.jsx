
import React, { useState } from "react";
import { Button, Typography, TextField, Box, Card, CardContent, Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useEffect } from "react";

const ScoreCard = ({ score, totalQuestions, onTryAgain }) => {
    const [nameInput, setNameInput] = useState("");
    const [highScore, setHighScore] = useState([]);

    useEffect(() => {
        const savedHighScore = JSON.parse(localStorage.getItem("highscores") || "[]");
        //console.log(savedHighScore);
        if (savedHighScore) {
            setHighScore(savedHighScore);
        }
    }, []);
    const handleTryAgain = () => {
        setHighScore([]);
        onTryAgain();
    };
    const handleSave = () => {
            const Score = {
            name:nameInput.trim(),
            Score: score
        };
        const newHighScore = [...highScore, Score].sort((a, b) => b.Score - a.Score);
        // const newHighScore = [
        //     ...highScore,
        //     { name: nameInput.trim(), score },
        // ].sort((a, b) => b.score - a.score); // Sort descending by score
        localStorage.setItem("highscores", JSON.stringify(newHighScore));
        setNameInput("");
    };
    return (
        <div className='score-card'>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="100vh"
                className="score-card-container">
                <Card
                    sx={{
                        padding: "20px",
                        maxWidth: "500px",
                        width: "100%",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                        textAlign: "center",
                    }}>
                    <CardContent>
                        <Typography variant="h4" color="primary" sx={{ marginBottom: "10px" }}>
                            Results 🎉
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ fontSize: "18px", marginBottom: "10px" }}
                        >
                            Total Questions: <strong>{totalQuestions}</strong>
                        </Typography>
                        <Typography variant="body1" className="quiz-score"
                            sx={{ fontSize: "18px", marginBottom: "10px" }}>
                            Your Score:{score}
                            <span hidden={score < totalQuestions / 2}>🎉</span>
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleTryAgain}
                            className="try-again-button"
                            sx={{ width: "100%" }}>
                            Try again! </Button>
                        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                            Enter your name below <br></br>to save your score!
                        </Typography>

                        <TextField
                            label="Your Name"
                            placeholder="Your name"
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: "20px" }}
                            onChange={(e) => setNameInput(e.target.value)}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ width: "100%" }}
                            onClick={handleSave}
                            disabled={!nameInput.trim()}
                        >
                        Save
                        </Button>
                        {highScore.length > 0 && (
                            <TableContainer component={Paper} className="score-table">
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><strong>Name</strong></TableCell>
                                            <TableCell align="right"><strong>Score</strong></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {highScore.map((entry, i) => (
                                            <TableRow key={i}>
                                                <TableCell>{entry.name}</TableCell>
                                                <TableCell align="right">{entry.Score}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>

                            </TableContainer>
                        )}
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}; export default ScoreCard;