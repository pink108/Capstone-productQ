import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import {Switch, Route, Redirect} from "react-router-dom";
// import './index.css';
import App from './App';
import Header from './components/Header/Header';
import PostQuestion from './components/PostQuestion/PostQuestion';
import PostAnswer from './components/PostAnswer/PostAnswer';
import QuestionDetails from './components/QuestionDetails/QuestionDetails';
// import "./styles/main.scss";
// import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
          <Route path="/" component={App} exact />
          {/* <Route path="/questions" component={App} exact /> */}
          {/* <Route path="/question/:id" component={App} /> */}
          <Route path="/question/:id/:description" component={QuestionDetails} />
          <Route path="/postQuestion" component={PostQuestion} />
          <Route path="/postAnswer" component={PostAnswer} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
      </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

