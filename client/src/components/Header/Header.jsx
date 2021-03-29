import React from 'react'
import { Link } from 'react-router-dom';
import './Header.scss';

import logo from '../../assets/logos/logo.png';
import avatar from "../../assets/images/user-image.png";

function Header() {
    return (
        <div>
            <header className="site-header">
                <div className="site-header__container">
                    <Link to={`/`} className="site-header__brand" >
                        <img className="site-header__logo" src={logo} alt="productQ logo"/> 
                    </Link>
                    {/* <div className="site-header__group"> */}
                    <Link to={`/`} className="site-header__signIn">
                    <button className="site-header__signIn--text" type="submit">Sign In</button>
                    </Link>

                    <div className="site-header__user">
                        <img className="site-header__user--image" src={avatar} alt="user image"/>
                    </div>
                {/* </div> */}
                </div>
                <h1 className="site-header__banner">Product Manager Interview Questions</h1>
            </header>
        </div>
    )
}

export default Header
