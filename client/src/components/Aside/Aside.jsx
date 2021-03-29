import React from 'react'
import './Aside.scss';
import { Link, Redirect} from 'react-router-dom';

function Aside() {
    return (
        <div>
        <aside className="main-section__left">
            <div className="main-section__asideText">
                <Link to={`/postQuestion`} className=" ">
                <button className="main-section__postQuestion" type="submit">Post Question</button>
                </Link>
                <h2 className="main-section__asideText">ALL</h2>
                <h2 className="main-section__asideText">From me</h2>
                <h2 className="main-section__asideText">Read</h2>       
            </div>
        </aside>
        </div>
    )
}

export default Aside
