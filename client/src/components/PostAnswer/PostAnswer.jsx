import React from "react";
import axios from 'axios';
import './PostAnswer.scss'; 
import Button from "../Button/Button";
import { Link, Redirect} from 'react-router-dom';

class PostAnswer extends React.Component {
    state={
        answer: "",
        questionID: this.props.questionDetails.id,
        formIsSubmitted: false,
        showHidePostAnswer: false,
        questionDetails: this.props.questionDetails
    };
    

    updateAnswer = (event) =>{
        this.setState({
            answer: event.target.value,
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (!this.state.answer) {
            alert("answer can not be empty.");
            return;
        }
        
        if (this.state.answer) {
            this.setState({formIsSubmitted:true})
        }
        // this.postNewAnswer(this.state.questionID);   
        this.props.postNewAnswer(this.state.answer);  
    }

    // postNewAnswer = (id) => {
    //     // console.log("before axios postnewanswer request", questionID);
    //     axios
    //     .post(`http://localhost:8081/questions/${id}`, {
    //         answer: this.state.answer,
    //     })
    //     .then((response) => {
    //         console.log('response from posting answer to api', response);
    //         this.setState({
    //         answer: '',
    //         });
    //     })
    //     .catch((err) => console.log(err));
    // };

    handleShowHidePostAnswer = (event) => {
        // event.preventDefault();
        console.log('showHidePostAnswer');
        this.setState({
            showHidePostAnswer: !this.state.showHidePostAnswer
        })
    }

    render(){
        const questionDetails = this.props.questionDetails;
        console.log("this is from postanswer", questionDetails);
        const questionID = this.props.questionDetails.id;
        console.log("this is from postanswer questionID", questionID)

        const showHidePostAnswer = this.state.showHidePostAnswer ? null : (<div><PostAnswer questionDetails={questionDetails}/></div>)
        
        if(this.state.formIsSubmitted){
            // return <Redirect to={`/`}/>
            return <Redirect to={`/question/${questionDetails.id}/${questionDetails.description}`}/>
        }
        console.log("props printing from render postanwer",this.props)
        return (
            <div>
                {/* <hr className="upload__topdivider"/> */}
                <section className="postAnswer">
                    {/* <h1 className="upload__title">Post Answer</h1> */}
                    {/* <hr className="upload__divider"/> */}
                    <form id= "postAnswer__form" className="postAnswer__form" onSubmit={this.handleFormSubmit}>
                        {/* <div className="postAnswer__formgroups"> */}
                            {/* <div className="postAnswer__formgroup"> */}
                                <label htmlFor="answerDescription" className="postAnswer__formLabel"></label>
                                <textarea id="answer" className="postAnswer__textarea" name="answer_description" placeholder="Add a description of your answer" onChange={this.updateAnswer}  value= {this.state.answer} ></textarea>
                            {/* </div>  */}
                        {/* </div> */}
                        {/* <hr className="upload__divider"/> */}
                        <div className="postAnswer__buttonGroup">
                            <Button type="submit" text="Submit" className="postAnswer__submit"/> 
                                                
                            <Link to={`/question/${questionDetails.id}/${questionDetails.description}`} >
                            <Button text="CANCEL" className="postAnswer__cancel" />
                            </Link>
                        </div>           
                    </form>
                </section>
                
            </div>
        )
    }
}
export default PostAnswer
