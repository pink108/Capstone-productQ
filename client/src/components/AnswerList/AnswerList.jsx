import React from 'react'
import AnswerCard from '../AnswerCard/AnswerCard'
import './AnswerList.scss';

function AnswerList(props) {
    return (
        <div>
            <ul id="answerList" className= "answerList">
                <h3 className="main-section__feedbackTitle">Answers ({props.questionDetails.answers.length})</h3>
                {props.questionDetails.answers
                .map((answer) => (  
                    <li key={answer.id}>             
                        <AnswerCard
                        id = {answer.id}
                        answer={answer.answer} 
                        posted_on={answer.posted_on} 
                        name={answer.name}
                        votes={answer.votes}
                        feedbacks={answer.feedbacks}
                        AnswerDetails={props.questionDetails.answers[answer.id]}
                        /> 
                    </li>             
                ))}
            </ul>
        </div>
    )
}

export default AnswerList
