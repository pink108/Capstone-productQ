import React from 'react';
import avatar from "../../assets/images/user-image.png";
import './FeedbackCard.scss';

function FeedbackCard(props) {
    const {feedbacks} = props.feedBackDetails;
    console.log("feedbacks from feedbacklist",feedbacks);

    return (
        <div>
            <div className="main-section__feedbackContainer">  
                {/* <h3 className="main-section__feedbackTitle">2 Feedbacks</h3> */}
                <hr className="main-section__feedbackDivider"/> 
                <div className="main-section__feedbackCard">    
                <div className="main-section__userInfo">
                    <img className="main-section__userImage" src={avatar} alt="user image"/> 
                    <div>
                        <p className="main-section__userName">{props.name}</p>
                        <p className="main-section__userPostedOn">{props.posted_on}</p>
                    </div>
                </div>        
                <p className="main-section__feedbackDescription">{props.feedback}</p> 
                </div>
            </div>
        </div>
    )
}

export default FeedbackCard
