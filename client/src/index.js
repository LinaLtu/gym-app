import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import MainPage from './components/MainPage';
import DetailsPage from './components/DetailsPage';
import './index.css';

const router = (
  <Router history={createBrowserHistory()}>
    <div>
      <Route exact path="/" component={MainPage} />
      <Route path="/course/:courseId" component={DetailsPage} />
    </div>
  </Router>
);
ReactDOM.render(router, document.getElementById('root'));