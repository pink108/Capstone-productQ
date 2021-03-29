import React from 'react';
import 'UserImage.scss';

function UserImage(props) {
    return (
        <img className={props.className} src={props.user} alt="user image"/>
    )
}

export default UserImage;
