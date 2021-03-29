import React from 'react'
import FeedbackCard from '../FeedbackCard/FeedbackCard'
import './FeedbackList.scss';

function FeedbackList(props) {
    // const {answers} = props.questionAnswerData;
    // console.log("answers from feedbacklist",answers);
    // const {feedbacks} = props.questionAnswerData.answers;
    // console.log("feedbacks from feedbacklist",feedbacks);

    return (
    
        <div>
            <ul id="feedbackList" className= "feedbackList">
                <h3 className="main-section__feedbackTitle">{props.FeedbackDetails.length} Feedbacks</h3>
                {props.FeedbackDetails
                .map((feedback) => (  
                    <li key={feedback.id}>             
                        <FeedbackCard 
                        // id = {feedbacks.id}
                        // feedback={feedbacks.feedback} 
                        // posted_on={feedbacks.posted_on} 
                        // name={feedbacks.name}
                        id = {feedback.id}
                        feedback={feedback.feedback} 
                        posted_on={feedback.posted_on} 
                        name={feedback.name}
                        feedBackDetails={props.FeedbackDetails}
                        // questionAnswerData= {props.questionAnswerData}
                        />  
                    </li>             
                ))}
            </ul>
        </div>
    )
}

export default FeedbackList
