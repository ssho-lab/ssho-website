import {
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import React from 'react';
import './App.css';
import {
  LandingPage
} from './pages';


function App({history}) {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
