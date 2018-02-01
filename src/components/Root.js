import React from 'react';
import { Route } from 'react-router-dom';
import Dictionary from './Dictionary';
import Quiz from './Quiz';
import Header from './Header';

const Root = () => (
  <div className="wrapper">
    <Header />
    <Route exact path="/" component={Dictionary} />
    <Route path="/quiz" component={Quiz} />
  </div>);

export default Root;
