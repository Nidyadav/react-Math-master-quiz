import React, { useState } from "react";
import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { useHistory } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Welcome = () => {
    const history = useHistory();
    const [level, setLevel] = useState("Easy");
    const handleStartQuiz = (level) => {
        //if(level==="Easy") {
        setLevel(level);
        //}
    };
    return (

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
                        Kids (Age 5-8)
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        sx={{ marginBottom: "10px", width: "100%" }}
                        onClick={() => handleStartQuiz("Medium")}
                    >
                        kids (Age 9-12)
                    </Button>
                    <Button
                        variant="contained"
                        color="success"
                        sx={{ width: "100%" }}
                        onClick={() => handleStartQuiz("Hard")}
                    >
                        kids (Age 13-16)
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};
export default Welcome;