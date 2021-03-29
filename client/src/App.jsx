// import './App.css';
import React, {Component} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import avatar from "./assets/images/user-image.png";
import Aside from './components/Aside/Aside';
import QuestionCard from "./components/QuestionCard/QuestionCard";
import AnswerCard from "./components/AnswerCard/AnswerCard";
import FeedbackCard from "./components/FeedbackCard/FeedbackCard";
// import TimeStamp from './components/TimeStamp/TimeStamp';

import './App.scss';
import QuestionList from "./components/QuestionList/QuestionList";
import AnswerList from "./components/AnswerList/AnswerList";

class App extends Component{
  state={
    _isMounted:false,
    activeQuestionID:"1",
    activeQuestionIndex:0,
    questions:[],
    questionDetails:{
      answers:[{
        feedbacks:[]
      }]
    }
    // questionAnswerData: questionAnswerDetailsData
  }

  componentDidMount(){
    this._isMounted = true;
    this.getQuestionDetailsData(this.state.activeQuestionID);
    this.getQuestionsData();
  }
  
  componentWillUnmount() {
    this._isMounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("comp updated", this.props);
    const { id } = this.props.match.params; 
    if (id !== undefined && prevState.questionDetails.id !== (id)) {
      this.getQuestionDetailsData(id);
    }
  }

  setActiveQuestion = (id) => {
    const questionIndex = this.state.questionAnswerData.findIndex((questionAnswer) => questionAnswer.id === id);
    // set current question to the id from questionList click event and also set the index of the current question
    this.setState({
      activeQuestionID: id,
      activeQuestionIndex: questionIndex,
    });
  };

  getQuestionsData = ()=>{
    axios
    .get(`http://localhost:8081/questions`)
      .then((response)=>{
        console.log("questions from api",response);
        this.setState({
          questions: response.data,
        });
      })
      .catch((error)=>console.log(error));
  };

  getQuestionDetailsData = (id)=>{
    console.log("before axios request",id);
    axios
      .get(`http://localhost:8081/questions/${id}`)
      .then((response)=>{
        console.log("questions details from api",response.data);
        this.setState({
          questionDetails: response.data,
        });
      })
      .catch((error)=>console.log(error));
  };

  render() {
    const {questions, questionDetails, activeQuestionID, activeQuestionIndex} = this.state;
    console.log("questions from app.js",questions);
    console.log("questionDetails from app.js",questionDetails);
    console.log("activeQuestionID from app.js",activeQuestionID);
    console.log("activeQuestionIndex from app.js",activeQuestionIndex);

  return (
    <div>
      <main className="main-section">
        <Aside/>


        <section className="main-section__right">
          {/* <Link to={`/postAnswer`} className=" ">
            <button className=" " type="submit">Post Answer</button>
          </Link> */}
          <QuestionList 
          questions={questions}
          questionDetails={questionDetails}
          currentQuestionID = {this.props.match.params.id ?? "1"}
          setActiveQuestion = {this.setActiveQuestion}/>
          {/* <AnswerList 
          questionAnswerData={questionDetails[activeQuestionID]} />         */}
        
        </section>


      </main>

    </div>
  );
}
}

export default App;
