import React from 'react';
import avatar from "../../assets/images/user-image.png";
import FeedbackList from "../FeedbackList/FeedbackList";
import './AnswerCard.scss';

function AnswerCard(props) {
    // console.log("this props is from AnswerCard",props);
    const {feedbacks} = props;
    // console.log("this feedbacks is from AnswerCard",feedbacks);

    return (      
        <div>
            <div className="main-section__answerContainer">  
                <div className="main-section__answerCard">    
                    <div className="main-section__userInfo">
                    <img className="main-section__userImage" src={avatar} alt="user image"/> 
                    <div>
                        <p className="main-section__userName">{props.name}</p>
                        <p className="main-section__userPostedOn">{new Date(props.posted_on).toLocaleDateString()}</p>
                        {/* <p className="main-section__userPostedOn">{props.posted_on}</p> */}
                    </div>
                </div>        
                <p className="main-section__answerDescription">{props.answer}</p>
                <div className="main-section__answerGroup">
                    <p className="main-section__votesCount">{props.votes}</p>
                    <p className="main-section__votesText">votes |</p>
                    <p className="main-section__feedbackCount">{feedbacks.length}</p>
                    <p className="main-section__feedbackText">feedback</p>
                </div>
                </div>
                <div className="main-section__votesGroup">
                    {/* <p className="main-section__votesText">Vote</p> */}
                    <button className=" " type="submit">Vote</button>
                    {/* <p className="main-section__votesText">Give feedback</p> */}
                    <button className=" " type="submit">Give Feedback</button>
                </div>
                {/* <FeedbackList FeedbackDetails={props.feedbacks}/> */}
            </div>
        </div>
    )
}

export default AnswerCard
