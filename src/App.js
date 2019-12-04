import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Homepage from './Pages/Homepage'
import NavBar from './Components/NavBar'
import Lessons from './Pages/Lessons'
import Exercise from './Pages/Exercise'
import { BrowserRouter as Router} from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/lessons" component={Lessons} />
            <Route exact path="/lessons/:slug" component={Exercise} />
            <Route component={Error} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
