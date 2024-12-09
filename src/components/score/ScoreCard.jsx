import React from "react";
import { Button, Typography, TextField, Box, Card, CardContent } from "@mui/material";

const ScoreCard = ({ score, totalQuestions, onTryAgain }) => {
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
                            onClick={onTryAgain}
                            className="try-again-button"
                            sx={{ width: "100%" }}>
                            Try again! </Button>
                        <Typography variant="h6" sx={{ marginBottom: "10px" }}>
                            Enter your name below to save your score!
                        </Typography>

                        <TextField
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            sx={{ marginBottom: "20px" }}
                        />
                        <Button
                            variant="contained"
                            color="secondary"
                            sx={{ width: "100%" }}
                        >
                            Save
                        </Button>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
}; export default ScoreCard;