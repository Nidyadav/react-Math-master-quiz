import React from "react";
import { Typography } from "@mui/material";
const ScoreCard = ({ score, totalQuestions, onTryAgain }) => {
    return (
        <div className='score-card'>
            <Typography variant="body1" className="quiz-score">
                You scored  {score} out of {totalQuestions}
                <span hidden={score < totalQuestions / 2}>🎉</span>
            </Typography>
            <br></br>
            <button
                variant="Contained"
                color="primary"
                onClick={onTryAgain}
                className="try-again-button">
                Try again! </button>
        </div>
    );

}; export default ScoreCard;