import React, {Component} from 'react'
import axios from "axios";
import './QuestionDetails.scss';
import QuestionCard from '../QuestionCard/QuestionCard';
import AnswerList from '../AnswerList/AnswerList';
import { Link } from 'react-router-dom';
import views from '../../assets/icons/icon-views.svg';
import PostAnswer from '../PostAnswer/PostAnswer';

class QuestionDetails extends Component{
    state={
    _isMounted:false,
    showHidePostAnswer: false,
    currentid:'',
    questionDetails:{
        answers:[{
        feedbacks:[]
        }]
    }

    }

    componentDidMount(){
        console.log("this questiondetails from componentdidmount",this.props);
        this._isMounted = true;
        this.getQuestionDetailsData(this.props.match.params.id);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    getQuestionDetailsData = (id)=>{
        console.log("before axios request",id);
        axios
        .get(`http://localhost:8081/questions/${id}`)
        .then((response)=>{
            console.log("questions details from api for QuestionDetails",response.data);
            console.log("question id details from api for QuestionDetails",response.data.id);
            this.setState({
            questionDetails: response.data,
            currentid: response.data.id,
            });
        })
        .catch((error)=>console.log(error));
    };

    handleShowHidePostAnswer = (event) => {
        // event.preventDefault();
        console.log('showHidePostAnswer');
        this.setState({
            showHidePostAnswer: !this.state.showHidePostAnswer
        })
    }

    postNewAnswer = (payload) => {
        // console.log("before axios postnewanswer request", questionID);
        axios
        .post(`http://localhost:8081/questions/${this.state.currentid}`, {
            answer: payload,
        })
        .then((response) => {
            console.log('response from posting answer to api', response.data);
            // this.setState({
            // this.state.questionDetails.answers.push(response.data.newAnswer);
            // });
            this.getQuestionDetailsData(this.state.currentid);
        })
        .catch((err) => console.log(err));
    };

    render(){
        const {questionDetails} = this.state;
        console.log("questionDetails from app.js",questionDetails);
        // const showHidePostAnswer = this.state.showHidePostAnswer ? (<div><h1>this is my answer</h1></div>) : null
        const showHidePostAnswer = this.state.showHidePostAnswer ? (<div><PostAnswer questionDetails={questionDetails} postNewAnswer={this.postNewAnswer}/></div>) : null

        return (
            <div className="questionDetails">
                <Link to={`/`}>
                <button className="questionDetails__goBack">Go Back</button>
                </Link>

                <QuestionCard 
                description={questionDetails.description} 
                views={questionDetails.views}
                asked_at={questionDetails.asked_at}
                asked_on={questionDetails.asked_on}
                type={questionDetails.type}
                />

                <button className="questionDetails__postAnswer " type="submit" onClick={() => this.handleShowHidePostAnswer("showHidePostAnswer")}>Post Answer</button>
                {showHidePostAnswer}
                
                <AnswerList 
                questionDetails={questionDetails} 
                // currentid={this.state.currentid}
                />
                

                
            </div>
        )
    }
    
}

export default QuestionDetails;
