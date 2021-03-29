import React from 'react';
import './Button.scss';

function Button(props) {
    // if(props.handleShowHidePostAnswer == undefined){
    //     props.handleShowHidePostAnswer = console.log("this is from button")
    // onClick ={props.handleShowHidePostAnswer}}
    return (
    
            <button className={props.className} type="submit">{props.text} </button>
        
    )
}

export default Button;
