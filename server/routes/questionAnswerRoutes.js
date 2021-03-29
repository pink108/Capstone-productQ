const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const fs = require('fs');

// load question-answer-details json file using the file system module `fs`
function loadQuestionAnswerDetailsData(){
    const logData = fs.readFileSync('./data/question-answer-details.json', 'utf8');   
    return logData; 
}
loadQuestionAnswerDetailsData();

function loadAnswerDetailsData(){
    const logAnswerData = fs.readFileSync('./data/answer-details.json', 'utf8');   
    return logAnswerData; 
}
loadAnswerDetailsData();

// //get questions route
router.get("/", (req, res) => {
    console.log("get questions");
    const questions = JSON.parse(loadQuestionAnswerDetailsData());
    const mappedQuestions = questions.map((question) => {
        return {
        id: question.id,
        description: question.description,
        asked_at: question.asked_at,
        asked_on: question.asked_on,
        views: question.views,
        type: question.type,
        answers:question.answers
        };
    });
        // res.json(videos);
        res.json(mappedQuestions); // return a response containing the videos json data
    });

// get single question details
router.get("/:id", (req, res) => {
    // console.log('req.params', req.params); // used to get id from api call
    const questions = JSON.parse(loadQuestionAnswerDetailsData()); // JSON.parse converts string to object
    const foundQuestionIndex = questions.findIndex((question) => {
    return question.id === req.params.id;
    });
    console.log('foundQuestionIndex', foundQuestionIndex); // find index of question using id
    res.json(questions[foundQuestionIndex]);
});


// post new question
router.post("/", (req, res) => {
    //  console.log("req.body", req.body);
    if (req.body.description === '' && req.body.asked_at === '' && req.body.asked_on === '' && req.body.type === '') {
        res.status(422).send('please enter a description, asked at, asked on and type');
    } 
    else {
        const questions = JSON.parse(loadQuestionAnswerDetailsData());
        const newQuestion = {
        id: uuidv4(),
        description: req.body.description,
        asked_at: req.body.asked_at,
        asked_on: req.body.asked_on,
        type: req.body.type,
        // timestamp: Date.now(),
        answers:[],
        views:"0",
        };
        questions.push(newQuestion);
        fs.writeFileSync('./data/question-answer-details.json', JSON.stringify(questions,null,"\t"));
        
        //return response
        res.json({
        message: "posted question from endpoint pink testing",
        newQuestion,
        });
    }
});
 
// post new answer
router.post("/:id", (req, res) => {
    console.log("req.body", req.body);
    console.log('req.params', req.params);  
    if (req.body.answer === '') {
        res.status(422).send('please enter your answer');
    } 
    else {
        // const answers = JSON.parse(loadAnswerDetailsData());
        const answers = JSON.parse(loadQuestionAnswerDetailsData());
        console.log("req.body parse answers", answers);
        let questionIndex = answers.findIndex(answer=>answer.id ==req.params.id)
        console.log(questionIndex);
        const newAnswer = {
        id: uuidv4(),
        // QuestionID: req.params.id,
        answer: req.body.answer,
        name: "Pink R",
        posted_on: Date.now(),
        views:"0",
        feedbacks:[],
        };
        answers[questionIndex].answers.push(newAnswer);
        // fs.writeFileSync('./data/answer-details.json', JSON.stringify(answers,null,"\t"));
        fs.writeFileSync('./data/question-answer-details.json', JSON.stringify(answers,null,"\t"));
        
        //return response
        res.json({
        message: "posted answer from endpoint pink testing",
        newAnswer,
        });
    }
});

module.exports = router;
    