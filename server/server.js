const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = 8081;
const questionAnswerRoutes = require("./routes/questionAnswerRoutes");
const { v4: uuidv4 } = require('uuid');

// require('dotenv').config();
// const PORT = process.env.PORT;

// const fs = require('fs');

// fs.writeFileSync('./data/video-details.json', "Hello checking writing" )
// const logData = fs.readFileSync('./data/video-details.json', 'utf8');
// console.log(logData);


// middleware
app.use(morgan('dev'));
app.use(cors());
// app.use(express.static('public/images'));
app.use(express.json());

// using the express.Router() from the file routes/questionAnswerRoutes.js
app.use('/questions', questionAnswerRoutes);


// server home route
app.get('/', (req,res) => {
    res.json('Welcome to  here @ productQ/');
})

// this is where to write the API document and could see on homepage of api
// app.get("/", (req, res) => {
//     res.json({
//     routes: {
//         videos: {
//         get: "get all videos",
//         url: "http://localhost:5000/videos",
//         },
//     },
//     });
// });

app.listen(PORT, console.log(`listening at:http://localhost:${PORT}`));