import React from "react";
import axios from 'axios';
import './PostQuestion.scss'; 
import Button from "../Button/Button";
import { Link, Redirect} from 'react-router-dom';

class PostQuestion extends React.Component {
    state={
        question_description: "",
        question_asked_at: "",
        question_asked_on: "",
        question_type: "",
        formIsSubmitted: false,
    };

    updateDescription = (event) =>{
        this.setState({
            question_description: event.target.value,
        });
    };

    updateAskedAt = (event) =>{
        this.setState({
            question_asked_at: event.target.value,
        });
    };

    updateAskedOn = (event) =>{
        this.setState({
            question_asked_on: event.target.value,
        });
    };

    updateType = (event) =>{
        this.setState({
            question_type: event.target.value,
        });
    };
    

    handleFormSubmit = (event) => {
        event.preventDefault();
        if (!this.state.question_description) {
            alert("Question description can not be empty.");
            return;
        }
        if (!this.state.question_asked_at) {
            alert("Question asked_at can not be empty.");
            return;
        }
        if (!this.state.question_asked_on) {
            alert("Question asked_on can not be empty.");
            return;
        }
        if (!this.state.question_type) {
            alert("Question type can not be empty.");
            return;
            } 
        if (this.state.question_description && this.state.question_asked_at && this.state.question_asked_on && this.state.question_type) {
            this.setState({formIsSubmitted:true})
        }
        this.postNewQuestion();   
    }

    postNewQuestion = () => {
        axios
        .post(`http://localhost:8081/questions`, {
            description: this.state.question_description,
            asked_at: this.state.question_asked_at,
            asked_on: this.state.question_asked_on,
            type: this.state.question_type,
        })
        .then((response) => {
            console.log('response from posting to api', response);
            this.setState({
            question_description: '',
            question_asked_at: '',
            question_asked_on: '',
            question_type: '',
            });
        })
        .catch((err) => console.log(err));
    };

    render(){
        if(this.state.formIsSubmitted){
            return <Redirect to={`/`}/>
        }
        return (
            <div>
                {/* <hr className="upload__topdivider"/> */}
                <section className="postQuestion">
                    <h1 className="postQuestion__title">Post Interview Question</h1>
                    <hr className="postQuestion__divider"/>
                    <form id= "postQuestion__form" className="postQuestion__form" onSubmit={this.handleFormSubmit}>
                        <div className="postQuestion__formGroups">
                            <div className="postQuestion__formGroup">
                                <label htmlFor="questionTitle" className="postQuestion__formLabel">Question</label>
                                <input type="text" id="questionName" className="postQuestion__input" name="question_title" placeholder="e.g. How would you improve Google Map?" onChange={this.updateDescription}  value= {this.state.question_description} />
                                {/* <label htmlFor="videotitle" className="upload__formlabel">Question</label>
                                <input type="text" id="videoname" className="upload__input" name="video_title" placeholder="e.g.How would you improve Google Map?" onChange={this.updateDescription}  value= {this.state.question_description} /> */}
                                
                                <label htmlFor="questionCompany" className="postQuestion__formLabel">Company</label>
                                <select className="postQuestion__dropdown" onChange={this.updateAskedAt}  value= {this.state.question_asked_at}required>
                                    <option value="">Please Select</option>
                                    <option value="Facebook">Facebook</option>
                                    <option value="Apple">Apple</option>
                                    <option value="Amazon">Amazon</option>
                                    <option value="Google">Google</option>
                                    <option value="Microsoft">Microsoft</option>
                                    <option value="Other">Other</option>
                                </select>

                                <label htmlFor="questionType" className="postQuestion__formLabel">Question Type</label>
                                <select className="postQuestion__dropdown" onChange={this.updateType}  value= {this.state.question_type}required>
                                    <option value="">Please Select</option>
                                    <option value="Product Design">Product Design</option>
                                    <option value="Product Improvement">Product Improvement</option>
                                    <option value="Product Estimation">Product Estimation</option>
                                    <option value="Product Metrics">Product Metrics</option>
                                    <option value="Problem Solving">Problem Solving</option>
                                </select>

                                <label htmlFor="questionAskedOn" className="postQuestion__formLabel" >When it was asked</label>
                                <input type="date" id="asked_on" className="postQuestion__date" name="question_asked_on" onChange={this.updateAskedOn}  value= {this.state.question_asked_on} required/>

                                
                            </div> 
                        </div>
                        {/* <hr className="upload__divider"/> */}
                        <div className="postQuestion__buttonGroup">
                            <Button type="button" text="Post Question" className="postQuestion__submit"/>                       
                            <Link to={`/`}>
                            <Button text="CANCEL" className="postQuestion__cancel"/>
                            </Link>
                        </div>           
                    </form>
                </section>
                
            </div>
        )
    }
}
export default PostQuestion
