const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    //Add more fields to the schema if needed
    questionText: {type: String, required: true},
    options: [{type: String, required: false}],
    correctAnswer: {type: String, required: true},
    course: {type: String, required: true}
})

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;