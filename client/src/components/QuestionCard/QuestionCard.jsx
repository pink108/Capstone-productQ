import React from 'react';
import views from '../../assets/icons/icon-views.svg';
import './QuestionCard.scss';
import AnswerList from '../AnswerList/AnswerList'
import { Link } from 'react-router-dom';

function QuestionCard(props) {
    return (
        <div>
            {/* <li onClick={() => {props.setActiveQuestion(props.id);}}> */}
                <div className="main-section__questionCard">
                    {/* <a href="/" onClick={() => {props.setActiveQuestion(props.id);}}> */}
                    <Link to={`/question/${props.id}/${props.description}`}>
                        <h2 className="main-section__question">{props.description}</h2> 
                    </Link>
                    {/* </a> */}
                    <div className="main-section__questionGroup">
                        <h3 className="main-section__questionTime">Asked at <span className="main-section__questionTime--bold">{props.asked_at}</span> on {new Date(props.asked_on).toLocaleDateString()}</h3>  
                        <div className="main-section__viewsGroup">
                            <p className="main-section__viewsCount">10</p>
                            <p className="main-section__viewsText">answers /</p>
                            <img className="main-section__viewsIcon" src={views} alt="views icon"/>
                            <p className="main-section__viewsCount">{props.views}</p>
                            <p className="main-section__viewsText">views</p>
                        </div>
                    </div>
                    <hr className="main-section__questionDivider"/>  
                    <button className="main-section__categoryButton" type="button">{props.type}</button>
                    <button className="main-section__companyButton" type="button">{props.asked_at}</button>
                </div>
                {/* <AnswerList 
                questionAnswerData={props.questionDetails} />   */}
        
            {/* </li> */}
        </div>
    )
}

export default QuestionCard
