import React from "react";
import axios from 'axios';
import Button from "../Button/Button";
import { Link, Redirect} from 'react-router-dom';

class PostFeedback extends React.Component {
    state={
        feedback: "",
        formIsSubmitted: false,
        showHideGiveFeedback: false,
        questionDetails: this.props.questionDetails
    };

    updateFeedback = (event) =>{
        this.setState({
            feedback: event.target.value,
        });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (!this.state.feedback) {
            alert("feedback can not be empty.");
            return;
        }
        
        if (this.state.feedback) {
            this.setState({formIsSubmitted:true})
        }
        this.postNewFeedback();   
    }

    postNewFeedback = () => {
        axios
        .post(`http://localhost:8081/questions/:id`, {
            feedback: this.state.feedback,
        })
        .then((response) => {
            console.log('response from posting feedback to api', response);
            this.setState({
            feedback: '',
            });
        })
        .catch((err) => console.log(err));
    };

    handleShowHideGiveFeedback = (event) => {
        // event.preventDefault();
        console.log('showHideGiveFeedback');
        this.setState({
            showHideGiveFeedback: !this.state.showHideGiveFeedback
        })
    }

    render(){
        const questionDetails = this.props.questionDetails;
        // const showHideGiveFeedback = this.state.showHideGiveFeedback ? null : (<div><PostAnswer questionDetails={questionDetails}/></div>)
        
        if(this.state.formIsSubmitted){
            // return <Redirect to={`/`}/>
            return <Redirect to={`/question/${questionDetails.id}/${questionDetails.description}`}/>
        }
        
        return (
            <div>
                {/* <hr className="upload__topdivider"/> */}
                <section className="upload">
                    {/* <h1 className="upload__title">Post Answer</h1> */}
                    <hr className="upload__divider"/>
                    <form id= "upload__form" className="upload__form" onSubmit={this.handleFormSubmit}>
                        <div className="upload__formgroups">
                            <div className="upload__formgroup">
                                <label htmlFor="videodescription" className="upload__formlabel"></label>
                                <textarea id="upload" className="upload__textarea" name="video_description" placeholder="Add a description of your video" onChange={this.updateAnswer}  value= {this.state.answer} ></textarea>
                            </div> 
                        </div>
                        {/* <hr className="upload__divider"/> */}
                        <div className="upload__buttongroup">
                            <Button type="button" text="Submit" className="upload__submitpublish"/> 
                                                
                            <Link to={`/question/${questionDetails.id}/${questionDetails.description}`} >
                            <Button text="CANCEL" className="upload__submitcancel" onClick={() => this.handleShowHidePostAnswer("showHidePostAnswer")}/>
                            </Link>
                        </div>           
                    </form>
                </section>
                
            </div>
        )
    }
}
export default PostAnswer
