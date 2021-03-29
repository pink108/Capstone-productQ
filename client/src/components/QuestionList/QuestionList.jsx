import React from 'react'
import QuestionCard from '../QuestionCard/QuestionCard';
import './QuestionList.scss';
import { Link } from 'react-router-dom';

function QuestionList(props) {
    return (
        <div>
            <ul id="questionList" className= "questionList">
                {props.questions
                // .sort((a,b) => new Date(b.question.asked_on) - new Date(b.question.asked_on)
                .map((question) => (  
                    <li className= "questionList__item" key={question.id}>  
                        {/* <Link to={`/question/${question.id}`}>              */}

                        <QuestionCard
                            id = {question.id}
                            description={question.description} 
                            asked_at={question.asked_at} 
                            views={question.views}
                            type={question.type}
                            asked_on={question.asked_on}
                            answers={question.answers}
                            // question={props.question}
                            questionDetails={props.questionDetails}
                            setActiveQuestion={props.setActiveQuestion}/> 
                        {/* </Link>  */}
                    </li>             
                ))}
            </ul>
            
        </div>
    )
}

export default QuestionList
