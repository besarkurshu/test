import React from 'react';
import './App.css';
import Main from './Main';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path='/' component={Main} />
    </Switch>
  </Router>
  );
}

export default App;
