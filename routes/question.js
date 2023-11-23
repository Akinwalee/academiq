const express = require("express");
const router = express.Router();
const Question = require("../models/Question");

const questionService = {}

//Implement question CRUD
//ToDO: Implement other operations (getQuestionByCourse....and any other relevant ones)
questionService.createQuestion = async (questionData) => {
    try {
        const newQuestion = new Question(questionData);
        const savedQuestion = await newQuestion.save();
        return (savedQuestion);
    } catch (error) {
        throw new Error("Error creating question");
    }
};

questionService.getAllQuestion = async () => {
    try{
        const questions = await Question.find({});
        return (question);
    } catch (error) {
        throw new Error("Error retrieving questions");
    }
};


// Sample of creating a single question
// const newQuestion = new Question({
//     questionText: "Who said that the human mind is a clean slate?",
//     options: ["Aristotle", "Socrates", "Karl Max"],
//     correctAnswer: "Aristotle",
//     course: "GNS 106"
// });

// newQuestion.save()


//Question routes

router.post("/questions", async (req, res) => {
    try {
        const question = await questionService.createQuestion(req.body);
        res.status(201).json({message: "Question created successfully", question});
    } catch (error) {
        res.status(500).json({message: "Error creating questions"});
    }
});

router.get("/question", async (req, res) => {
    try {
        const questions = await questionService.getAllQuestion();
        res.status(200).json(questions);
    } catch (error) {
        res.status(500).json({message: "Error retrieving questions"})
    }
})

module.exports = router;