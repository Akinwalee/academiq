const express = require("express");
const router = express.Router();
const UserProgress = require("../models/UserProgress");
const Question = require("../models/Question");
const UserProgress = require("../models/UserProgress");

router.post("/answer/:questionId", async (req, res) => {
    const { userId, selectedOption } = req.body;
    const questionId = req.params.questionId;

    try {
        let UserProgress = await UserProgress.findOne({ userId });
        const question = await Question.findById(questionId);
        if (!question){
            return (res.status(404).json({ messsage: "Question not found"}));
        }

        UserProgress.answeredQuestion.push(questionId);
        if (question.correctAnswer === selectedOption) {
            UserProgress.correctAnswers++;
        } else {
            UserProgress.incorrectAnswers++;
        }

        UserProgress = await UserProgress.save();
        res.status(200).json({ message: "Progress updated" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error updating progress" });
    }
});